// parallax for top image
(function ($) {
$.fn.parallax = function (options) {
  var parallax_element = this;
  var settings = {
    speed: '100',
    ascending: true,
    delay: '1000'
  };
  if (options) {
    $.extend(settings, options);
  }
  var ad = "+";
  if (!settings['ascending'] == true) {
    var ad = "-";
  }
  $(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    parallax_element.css({
      "transform": "translate(0px, " + ad + wScroll / settings['speed'] + "%)",
      "transition-duration": settings['delay'] + "ms"
    });
  });
}
}(jQuery));
$("#parallax1").parallax({speed:90,ascending:true,delay:1000});


// swiper slider 1
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  slidesPerView: 2,
  spaceBetween: 0,
  autoplay: {
   delay: 3000,
 },
 grabCursor: true,
});

// swiper slider 2
const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  slidesPerView: 2,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
  spaceBetween: 0,
  autoplay: {
   delay: 2000,
 },
});

// swiper slider 3
const swiper3 = new Swiper('.swiper3', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
   delay: 5000,
 },
});


// show more text
$(document).ready(function() {
    $('.arrow-images').click(function() {
      $(this).toggleClass('show-btm-arrow');
            $('.extra-text').slideToggle("fast");
    });
});


// sticky menue
$(document).ready(function() {
    $(window).on("scroll", function() {
        var fromTop = $(window).scrollTop();
        $("body").toggleClass("down", (fromTop > 830));
        $("header").toggleClass("fixed", (fromTop > 830));
    });
});


// navebar background in mobile
$('.navbar-toggler').on('click', function(e) {
  $('.top-section').toggleClass("top-section2");
  e.preventDefault();
});






