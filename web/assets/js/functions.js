// dragging for top image
var _DRAGGGING_STARTED = 0;
var _LAST_MOUSEMOVE_POSITION = { x: null, y: null };
var _DIV_OFFSET = $('#image-container').offset();
var _CONTAINER_WIDTH = $("#image-container").outerWidth();
var _CONTAINER_HEIGHT = $("#image-container").outerHeight();
var _IMAGE_WIDTH;
var _IMAGE_HEIGHT;
var _IMAGE_LOADED = 0;

// Check whether image is cached or wait for the image to load 
// This is necessary before calculating width and height of the image
if($('#drag-image').get(0).complete) {
  ImageLoaded();
}
else {
  $('#drag-image').on('load', function() {
    ImageLoaded();
  });
}

// Image is loaded
function ImageLoaded() {
  _IMAGE_WIDTH = $("#drag-image").width();
  _IMAGE_HEIGHT = $("#drag-image").height();
  _IMAGE_LOADED = 1;  
}

$('#image-container').on('mousedown', function(event) {
  /* Image should be loaded before it can be dragged */
  if(_IMAGE_LOADED == 1) { 
    _DRAGGGING_STARTED = 1;

    /* Save mouse position */
    _LAST_MOUSE_POSITION = { x: event.pageX - _DIV_OFFSET.left, y: event.pageY - _DIV_OFFSET.top };
  }
});

$('#image-container').on('mouseup', function() {
  _DRAGGGING_STARTED = 0;
});

$('#image-container').on('mousemove', function(event) {
  if(_DRAGGGING_STARTED == 1) {
    var current_mouse_position = { x: event.pageX - _DIV_OFFSET.left, y: event.pageY - _DIV_OFFSET.top };
    var change_x = current_mouse_position.x - _LAST_MOUSE_POSITION.x;
    var change_y = current_mouse_position.y - _LAST_MOUSE_POSITION.y;

    /* Save mouse position */
    _LAST_MOUSE_POSITION = current_mouse_position;

    var img_top = parseInt($("#drag-image").css('top'), 10);
    var img_left = parseInt($("#drag-image").css('left'), 10);

    var img_top_new = img_top + change_y;
    var img_left_new = img_left + change_x;

    /* Validate top and left do not fall outside the image, otherwise white space will be seen */
    if(img_top_new > 0)
      img_top_new = 0;
    if(img_top_new < (_CONTAINER_HEIGHT - _IMAGE_HEIGHT))
      img_top_new = _CONTAINER_HEIGHT - _IMAGE_HEIGHT;

    if(img_left_new > 0)
      img_left_new = 0;
    if(img_left_new < (_CONTAINER_WIDTH - _IMAGE_WIDTH))
      img_left_new = _CONTAINER_WIDTH - _IMAGE_WIDTH;

    $("#drag-image").css({ top: img_top_new + 'px', left: img_left_new + 'px' });
  }
});


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



// navebar background in mobile
$('.navbar-toggler').on('click', function(e) {
  $('.top-section').toggleClass("top-section2");
  e.preventDefault();
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








