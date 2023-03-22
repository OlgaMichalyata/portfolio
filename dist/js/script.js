const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      menuLinks = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    hamburger.style.display = 'none';
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.style.display = 'flex';
});

menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', () => {
        menu.classList.remove('active');
        hamburger.style.display = 'flex';
    });
});
