// menu hamburguer
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Adiciona ou remove a classe 'active'
    mobileMenu.classList.toggle('is-active'); // Alterna a classe do botão
});
