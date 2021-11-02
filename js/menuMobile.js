const btnMobile = document.getElementsByClassName('hamburguer');
const itemsMenu = document.getElementsByClassName('item-menu');

btnMobile[0].addEventListener('click', () => {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
});

for(let i = 0;itemsMenu.length;i++) {
    itemsMenu[i].addEventListener('click', () => {
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
    });
};