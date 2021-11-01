const btnMobile = document.querySelector('button#btn-mobile');

btnMobile.addEventListener('click', () => {
    const nav = document.querySelector('nav#nav');
    nav.classList.toggle('active');
});