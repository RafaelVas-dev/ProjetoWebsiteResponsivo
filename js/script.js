// ===== Menu Dinamico =====
let navbar = document.querySelector('#header');

document.addEventListener('scroll', () => {
    let scrollTop = window.scrollY

    if(scrollTop > 0){
        navbar.classList.add('rolar')
    } else{
        navbar.classList.remove('rolar')
    }

});

// ===== Menu Mobile =====

let btnMenu = document.querySelector('#btn-menu-mob');
let linha1 = document.querySelector('.line-menu-mob-1');
let linha2 = document.querySelector('.line-menu-mob-2');
let menuMobile = document.querySelector('#menu-mobile');
let body = document.querySelector('body')

btnMenu.addEventListener('click', () => {
    linha1.classList.toggle('ativo1')
    linha2.classList.toggle('ativo2')

    menuMobile.classList.toggle('abrir')

    body.classList.toggle('no-overflow')

});




