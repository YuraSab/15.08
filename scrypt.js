document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger_menu');
    const header = document.querySelector('header');
    const blurOverlay = document.getElementById('blur_overlay');
    const closeMenu = document.getElementById('close_menu');

    burgerMenu.addEventListener('click', () => {
        header.classList.remove('hide');
        blurOverlay.style.display = "block";
    });

    blurOverlay.addEventListener('click', () => {
        header.classList.add('hide');
        blurOverlay.style.display = "none";
    });

    closeMenu.addEventListener('click', () => {
        header.classList.add('hide');
        blurOverlay.style.display = "none";
    });
});