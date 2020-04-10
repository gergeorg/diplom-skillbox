var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        loop: true,
        slidesPerView: 2,
      },
 
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
  
        560: {
          slidesPerView: 2,
        },

        768: {
          slidesPerView: 2,
        },

        1025: {
          slidesPerView: 3,
        },
      }
    });

let burger = document.querySelector('.menu__burger');
let menu = document.querySelector('.nav');
let close = document.querySelector('.nav_close');

burger.addEventListener('click', function(e){
    e.preventDefault();
    menu.classList.add('nav_open');
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', function(e){
  e.preventDefault();
  menu.classList.remove('nav_open');
  document.body.style.overflow = 'scroll';
});
