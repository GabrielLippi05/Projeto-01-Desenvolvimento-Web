const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

// Adiciona evento de clique
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active'); // Anima o ícone
    navMenu.classList.toggle('active'); // Exibe/esconde o menu
});
