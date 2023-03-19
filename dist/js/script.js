const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      menuLinks = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});
