let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  loginForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
  navbar.classList.remove('active');
}

window.onscroll = () =>{
  navbar.classList.remove('active');
  loginForm.classList.remove('active');
}

var swiper = new Swiper(".review-slider",{
  spaceBetween: 20,
  centeredSlides: true,
  grabCursor: true,
  autoplay:{
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

const close = document.getElementById('close');
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}