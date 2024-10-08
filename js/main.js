$(function(){
  // Detect window scroll and update navbar
  const checkScroll = (e) => {
    if($(document).scrollTop() > 120) {
      $('.tm-navbar').addClass("scroll");
    } else {
      $('.tm-navbar').removeClass("scroll");
    }
  }

  $(window).scroll(checkScroll);
  checkScroll();

  // Close mobile menu after click
  $('#tmNav a').on('click', function(){
    $('.navbar-collapse').removeClass('show');
  });

  // Add smooth scrolling to all links
  $('a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      let hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, 'easeInOutExpo', function(){
        window.location.hash = hash;
      });
    }
  });

  $('.tm-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: { enabled: true }
  });

  $('#novelty-grid, #essentials-grid').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });
});

function sendMail(e) {
  const body = `Nom: ${e.name.value}\nEmail: ${e.email.value}\n\n${e.message.value}`;
  window.open(`mailto:letournemain@gmail.com?subject=Contact&body=${body}`);
}
