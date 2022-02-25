const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  },
  spaceBetween: 0,
  autoplay: {
   delay: 3000,
 },
 grabCursor: true,
 autoHeight: true,
});

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  centeredSlides: false,
  centeredSlidesBounds: false,
  breakpoints: {
    640: {
      slidesPerView: 2,
      grabCursor: true,
      centeredSlides: true,
      centeredSlidesBounds: true,
    },
    768: {
      slidesPerView: 3,
      centeredSlides: true,
      centeredSlidesBounds: true,
    },
    1024: {
      slidesPerView: 5,
    },
  },
  spaceBetween: 0,
  autoplay: {
   delay: 2000,
 },
 autoHeight: true,
});

const swiper3 = new Swiper('.swiper3', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
   delay: 5000,
 },
});


$(document).ready(function() {
    $('.arrow-images').click(function() {
      $(this).toggleClass('show-btm-arrow');
            $('.extra-text').slideToggle("fast");
    });
});



$(document).ready(function() {
    var $header = $("header"),
        $clone = $header.before($header.clone().addClass("clone"));
    
    $(window).on("scroll", function() {
        var fromTop = $(window).scrollTop();
        $("body").toggleClass("down", (fromTop > 700));
    });
});