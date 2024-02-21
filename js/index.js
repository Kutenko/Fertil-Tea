var scrollPosition = window.scrollY;
var logoContainer = document.getElementById('#expert');

window.addEventListener('scroll', function() {

    scrollPosition = window.scrollY;

    if (scrollPosition >= 30) {
        logoContainer.classList.add('c-logo--scrolled');
    } else {
        logoContainer.classList.remove('c-logo--scrolled');
    }
});