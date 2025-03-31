const toggleBtn = document.querySelector('.toggle-btn');
const body = document.body;

if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});