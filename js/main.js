const nameInput = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmedPassword = document.getElementById('confirmedPassword');
let age = document.getElementById('age');
let phone = document.getElementById('phone');
let url = document.getElementById('url');
let massage = document.getElementById('massage');
let errorPointer = document.getElementById('errors');
let confirm = document.getElementById('confirm');

let error = {
    name: null,
    email: null,
    password: null,
    confirmedPassword: null,
    age: null,
    phone: null,
    url: null,
    massage: null,
};

let start = true;
nameInput.addEventListener('change', (event) => validName(event));
email.addEventListener('change', (event) => validEmail(event));
password.addEventListener('change', (event) => validPassword(event));
confirmedPassword.addEventListener('change', (event) => validConfirmedPassword(event));
age.addEventListener('change', (event) => validAge(event));
phone.addEventListener('change', (event) => validPhone(event));
url.addEventListener('change', (event) => validUrl(event));
massage.addEventListener('change', (event) => validMassage(event));
confirm.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('submit');
    for (const property in error) {
        if (start) {
            if (error[property] === null) {
                errorPointer.innerText = 'Sorry you have to submit all the requirment';
            }
            else {
                console.log(true);
            }
        } else {
            errorPointer.innerText = 'Sorry you have to start write your requirment';
        }

        console.log(`${property}: ${error[property]}`);
    }


});

// email valid
function validName(event) {
    event.preventDefault()
    errorPointer.innerText = '';
    console.log(event.target.value.length)
    if (event.target.value.length >= 3 && event.target.value.length < 10) {
        console.log(true);
    }
    else {
        error.name = 'Your name need be more than 3 chars and less than 10 chars '
        errorPointer.innerText = error.name;
    }
}

// email valid
function validEmail(event) {
    event.preventDefault()
    let emailValid = event.target.value.toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    if (emailValid == null) {
        console.log('email error');
        error.email = 'Your email invalid please try again '
        errorPointer.innerText = error.email;
    }
    else {
        console.log('valid');

    }

}
//passwold valid 
function validPassword(event) {
    event.preventDefault();
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");
    console.log(event.target.value);
    if (event.target.value.match(strongRegex) !== null) {
        console.log(true);
    }
    else {
        console.log('password error');
        error.password = 'Your  password not need at least have uppercase and lowercase with at least 6 chars'
        errorPointer.innerText = error.password;
    }

}


// confirm password valid 
function validConfirmedPassword(event) {
    event.preventDefault();
    console.log(password.value);
    if (password.target.value.length !== 0 && error.password === null) {
        if (event.target.value.match(strongRegex) === password.target.value) {
            console.log(true);
        }
        else {
            console.log('confirem error');
            error.confirmedPassword = 'Your password not the same'
            errorPointer.innerText = error.confirmedPassword;
        }
    }
    else {
        console.log('your password not valid');
    }

}

// age valid 
function validAge(event) {
    event.preventDefault();
    console.log(event.target.value);
    if (parseInt(event.target.value) > 18) {
        console.log(true);
    }
    else {
        console.log('Your age should be over 18');
        error.age = 'Your age should be over 18';
        errorPointer.innerText = error.age;
    }
}
// phone valid 
function validPhone(event) {
    event.preventDefault();
    console.log(event.target.value.slice(0, 3));
    if (event.target.value.slice(0, 3) === '777') {
        if (event.target.value.length === 9) {
            console.log(true);

        }
        else {
            console.log('Your phone must start with 777 and be 9 number along');
            error.phone = 'Your phone must start with 777 and be 9 number along';
            errorPointer.innerText = error.phone;
        }
    } else {
        console.log('Your phone must start with 777 and be 9 number along');
        error.phone = 'Your phone must start with 777 and be 9 number along';
        errorPointer.innerText = error.phone;
    }

}

// url valid 
function validUrl(event) {
    event.preventDefault();
    const urlExp = new RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    console.log(event.target.value.match(urlExp));

    if (event.target.value.match(urlExp) !== null) {
        console.log(true);
    }
    else {
        console.log('Your url should be valid');
        error.url = 'Your url should be valid';
        errorPointer.innerText = error.url;
    }

}
// url Massage 
function validMassage(event) {
    event.preventDefault();
    console.log(event.target.value);

    if (event.target.value.length > 20) {
        console.log(true);
    }
    else {
        console.log('Your massage should be more than 20 chars');
        error.massage = 'Your massage should be more than 20 chars';
        errorPointer.innerText = error.massage;
    }

}

// password test Aa*sd3g