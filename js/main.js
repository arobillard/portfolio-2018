$('.tog-nav-holder, .skip-to-nav').on('click', function(e) {
  e.preventDefault();
  var isOpen = $('.tog-nav-holder').hasClass('tog-nav-open')

  $('body').toggleClass('nav-open');
  $('.tog-nav-holder').toggleClass('tog-nav-open');

  if (!isOpen) {
    $('.nav-main li:first-child a').focus();
    $('a:not(.tog-nav-holder)').attr('tabindex', '-1');
    $('.nav-main a').attr('tabindex', '0');
  }else {
    $('a:not(.tog-nav-holder)').attr('tabindex', '0');
    $('.nav-main a').attr('tabindex', '-1');
  }

});

$('.nav-main a').on('click', function() {
  $('body').removeClass('nav-open');
  $('.tog-nav-holder').removeClass('tog-nav-open');
});

// var targetImage = $(this).attr('id');
//
// $('.nav-main a').on('hover', function() {
//   $(targetImage).toggleClass('link-hovered');
// )};
//
// $('#case-study-1').on('mouseover' function() {
//   $('#case-study-1-img').addClass('link-hovered');
// )};

$('.link-cs1').hover(
  function() {
    $('#cs1-link-img').addClass('link-hovered');
  }, function() {
    $('#cs1-link-img').removeClass('link-hovered');
  }
);

$('.link-cs2').hover(
  function() {
    $('#cs2-link-img').addClass('link-hovered');
  }, function() {
    $('#cs2-link-img').removeClass('link-hovered');
  }
);

$('.link-cs3').hover(
  function() {
    $('#cs3-link-img').addClass('link-hovered');
  }, function() {
    $('#cs3-link-img').removeClass('link-hovered');
  }
);

$('.link-me').hover(
  function() {
    $('#me-link-img').addClass('link-hovered');
  }, function() {
    $('#me-link-img').removeClass('link-hovered');
  }
);

// Scroll Top Nav Change

$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 350) {
        $('.tog-nav-holder').removeClass('nav-at-top')
      }
      if ($(this).scrollTop() < 350) {
        $('.tog-nav-holder').addClass('nav-at-top')
      }
   });
});
