const menu = document.querySelector('#menu');
const overlay = document.querySelector('.overlay');
const desktopLinks = document.querySelector('.desktop__links');
const body = document.getElementById('body');

menu.addEventListener('click', () => {
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
    overlay.classList.add('fade-out');
    overlay.classList.remove('fade-in');
    desktopLinks.classList.remove('fade-in');
    desktopLinks.classList.add('fade-out');
    body.classList.remove('no-overflow');
  } else {
    menu.classList.add('open');
    overlay.classList.remove('fade-out');
    overlay.classList.add('fade-in');
    desktopLinks.classList.remove('fade-out');
    desktopLinks.classList.add('fade-in');
    body.classList.add('no-overflow');
  }
});
