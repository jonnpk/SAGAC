const header = document.querySelector('header');
const logoPaths = document.querySelectorAll('.main-logo-path');
const hamburgerPaths = document.querySelectorAll('.hamburger path');
const ratio = window.innerHeight;

window.addEventListener('scroll', () => {
    if (window.scrollY > ratio) {
        header.classList.add('scrolled');
        // Logo paths and hamburger paths change to black
        logoPaths.forEach(path => (path.style.fill = '#151515'));
        hamburgerPaths.forEach(path => (path.style.fill = '#151515'));
    } else {
        header.classList.remove('scrolled');
        // Revert logo paths and hamburger paths to original color
        logoPaths.forEach(path => (path.style.fill = 'white'));
        hamburgerPaths.forEach(path => (path.style.fill = 'white'));
    }
});