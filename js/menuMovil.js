document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.getElementById('burger_menu');
    const sliderMenu = document.getElementById('sliderMenu');

    burgerMenu.addEventListener('click', function() {
        sliderMenu.classList.toggle('active');
    });
});