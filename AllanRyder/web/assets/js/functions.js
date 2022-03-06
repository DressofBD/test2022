// parallax
$(document).ready(function () {
  function t() {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    for (i = 0; i < e.length; i++) ActiveLayer = e[i], ActiveParent = $(ActiveLayer).parent(), Distance = ActiveParent.offset().top, HeightParent = ActiveParent.height(), HeightLayer = $(ActiveLayer).height(), console.log(t), Scroll = Math.round((t - Distance) / $(ActiveLayer).attr("speed")), $(ActiveLayer).css({
      transform: "translateY(" + Scroll + "px)"
    })
  }
  var e = $(document).find(".parallax");
  $(window).scroll(function () {

    t()
  })
});




// scroll to require sections
// $(document).ready(function(){
//     $(window).scroll(function(){
//         var WindowTop = $(this).scrollTop();
//         $('section').each(function(i){
//             if(WindowTop > $(this).offset().top - 50&& 
//                WindowTop < $(this).offset().top + $(this).outerHeight(true)
//               ){
//                 $('a.nav-link').removeClass('active');
//                 $('a.nav-link').eq(i).find('a').addClass('active');
//             }
//         });
//     });
// });



$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function() {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //    $('nav').fadeIn("fast");
    //} else {
    //    $('nav').fadeOut("fast");
    //}
  
    // Assign active class to nav links while scolling
    $('section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.navbar-nav li a.active').removeClass('active');
            $('.navbar-nav li a').eq(i).addClass('active');
        }
    });
}).scroll();





// smooth scroll
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});



// swiper slider 1
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
   delay: 3000,
 },
});


// Count number
// inViewport jQuery plugin
// http://stackoverflow.com/a/26831113/383904
$(function($, win) {
  $.fn.inViewport = function(cb) {
    return this.each(function(i,el){
      function visPx(){
        var H = $(this).height(),
            r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
        return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
      } visPx();
      $(win).on("resize scroll", visPx);
    });
  };
}(jQuery, window));


jQuery(function($) {

  $(".count-number").inViewport(function(px) {
    if(px>0 && !this.initNumAnim) { 
      this.initNumAnim = true; 
      $(this).prop('Counter',0).animate({
        Counter: $(this).text()
      }, {
        duration: 3000,
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });         
    }
  });

});


// fixed header
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $("#header").addClass("whiteHeader");
    } else {
        $("#header").removeClass("whiteHeader");
    }
});





