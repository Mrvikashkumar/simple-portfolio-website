// open menu and close menu
let menu = document.querySelector('.menu');
// function for open menu
function openMenu() {
  menu.classList.add('open-menu')
  document.body.style.overflow = "hidden";
}
// function for close menu
function closeMenu() {
  menu.classList.remove('open-menu');
  document.body.style.overflow = "auto";
}

let menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(function (element) {
  element.addEventListener('click', (e) => {
    setTimeout(() => {
      closeMenu();
    }, 500)
  });
})

// scrolling effect
let nav = document.getElementById('nav');
let tapToTopBtn = document.getElementById('tapToTopBtn');
function scrollEffect() {
  if (scrollY > 40) {
    nav.classList.add('fixed-nav');
    tapToTopBtn.classList.add('show-tap-to-top');
  } else {
    nav.classList.remove('fixed-nav')
    tapToTopBtn.classList.remove('show-tap-to-top');
  }
}
window.addEventListener('scroll', scrollEffect)

// text writing effect
let profession = document.querySelector('.profession');
let text = "developer";

  function textAnimation() {
    let textArr = text.split('');
    for (var i = 0; i < textArr.length; i++) {
      function close(x) {
        setTimeout(() => {
          profession.innerText += textArr[x];
        }, x * 400)
      }
      close(i);
    }
  }

window.addEventListener('DOMContentLoaded', textAnimation)
