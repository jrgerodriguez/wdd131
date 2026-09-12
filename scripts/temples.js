const hamburgerBtn = document.querySelector('#hamburger-btn');
const nav = document.querySelector('#primary-nav');

hamburgerBtn.addEventListener('click', function () {
    nav.classList.toggle('open');
    const isOpen = nav.classList.contains('open');
    hamburgerBtn.textContent = isOpen ? '✕' : '☰';
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
});
