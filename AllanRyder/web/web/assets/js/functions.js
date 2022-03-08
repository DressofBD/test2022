


// swiper slider 3
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  slidesPerView: 4,
  breakpoints: {
  640: {
    slidesPerView: 4,
  },
  768: {
    slidesPerView: 6,
  },
  1024: {
    slidesPerView: 8,
  },
},
  autoplay: {
   delay: 50000,
 },
});



// sticky menue
jQuery(function($) {
  var $nav = $('#header');
  var $win = $(window);
  var winH = $win.height();

  $win.on("scroll", function () {
      if ($(this).scrollTop() > winH ) {
          $nav.addClass("fixed");
      } else {
          $nav.removeClass("fixed");
      }
  }).on("resize", function(){ 
     winH = $(this).height();
  });
});




$('.navbar-toggler').on('click', function(e) {
  $('.site-header').toggleClass("menu-open");
  e.preventDefault();
});


// show more text on filter
$('.show-more').on('click', function(e) {
  $(this).toggleClass("change-icon");
  $('.filter-result').toggleClass("full-height");
  e.preventDefault();
});



