$(function(){
  // Detect window scroll and update navbar
  $(window).scroll(function(e){
    if($(document).scrollTop() > 120) {
      $('.tm-navbar').addClass("scroll");
    } else {
      $('.tm-navbar').removeClass("scroll");
    }
  });

  // Close mobile menu after click
  $('#tmNav a').on('click', function(){
    $('.navbar-collapse').removeClass('show');
  })

  // Scroll to corresponding section with animation
  $('#tmNav').singlePageNav({
    'easing': 'easeInOutExpo',
    'speed': 600
  });

  // Add smooth scrolling to all links
  // https://www.w3schools.com/howto/howto_css_smooth_scroll.asp
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, 'easeInOutExpo', function(){
        window.location.hash = hash;
      });
    } // End if
  });

  // Pop up
  $('.tm-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: { enabled: true }
  });

  // $('.tm-mywork-carousel').slick({
  //   dots: true,
  //   prevArrow: false,
  //   nextArrow: false,
  //   infinite: false,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 2
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //           slidesToShow: 1
  //       }
  //     }
  //   ]
  // });

  $('#novelty-grid, #essentials-grid').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });

  // Gallery
  // $('.tm-gallery').slick({
  //   dots: true,
  //   infinite: false,
  //   slidesToShow: 5,
  //   slidesToScroll: 2,
  //   responsive: [
  //   {
  //     breakpoint: 1199,
  //     settings: {
  //       slidesToShow: 4,
  //       slidesToScroll: 2
  //     }
  //   },
  //   {
  //     breakpoint: 991,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 2
  //     }
  //   },
  //   {
  //     breakpoint: 767,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 1
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   }
  // ]
  // });
});
