const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('is-active', isOpen);
        mobileMenu.setAttribute('aria-expanded', String(isOpen));
        mobileMenu.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('is-active');
            mobileMenu.setAttribute('aria-expanded', 'false');
            mobileMenu.setAttribute('aria-label', 'Abrir menu');
        });
    });
}
