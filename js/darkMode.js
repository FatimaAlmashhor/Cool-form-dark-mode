const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    let value = getComputedStyle(document.documentElement)
        .setProperty('--text-color', '#fff');
    console.log(value);
})