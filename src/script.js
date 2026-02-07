const menuIcon = document.querySelector('.mobile-menu-icon');
const navMenu = document.querySelector('.navMenu ul');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('open');
    navMenu.classList.toggle('open');
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.navMenu a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('open');
        navMenu.classList.remove('open');
    });
});