// Smooth Scroll

$(document).ready(function(){
  $(".smooth-scroll").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

// Navigation

$('.tog-nav-holder, .skip-to-nav').on('click', function(e) {
  e.preventDefault();
  var isOpen = $('.tog-nav-holder').hasClass('tog-nav-open')

  $('body').toggleClass('nav-open');
  $('.tog-nav-holder').toggleClass('tog-nav-open');

  if (!isOpen) {
    $('#nav').focus();
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

// Nav hover previews

// var cs1IsHovered = $('.link-cs1').hover();
// var cs1IsFocused = $('.link-cs1').focus();
//
// if (!cs1IsFocused) {

  $('.link-cs1').hover(
    function() {
      $('#cs1-link-img').addClass('link-hovered');
    }, function() {
      $('#cs1-link-img').removeClass('link-hovered');
    }
  );

// };
//
// if (!cs1IsHovered) {

  $('.link-cs1').focus(function () {
    $('#cs1-link-img').addClass('link-hovered');
    $('#cs1-link-img').siblings().addClass('link-no-hover');
  });

  $('.link-cs1').focusout(function () {
    $('#cs1-link-img').removeClass('link-hovered');
    $('#cs1-link-img').siblings().removeClass('link-no-hover');
  });

// };

$('.link-cs2').hover(
  function() {
    $('#cs2-link-img').addClass('link-hovered');
  }, function() {
    $('#cs2-link-img').removeClass('link-hovered');
  }
);

$('.link-cs2').focus(function () {
  $('#cs2-link-img').addClass('link-hovered');
  $('#cs2-link-img').siblings().addClass('link-no-hover');
});

$('.link-cs2').focusout(function () {
  $('#cs2-link-img').removeClass('link-hovered');
  $('#cs2-link-img').siblings().removeClass('link-no-hover');
});

$('.link-cs3').hover(
  function() {
    $('#cs3-link-img').addClass('link-hovered');
  }, function() {
    $('#cs3-link-img').removeClass('link-hovered');
  }
);

$('.link-cs3').focus(function () {
  $('#cs3-link-img').addClass('link-hovered');
  $('#cs3-link-img').siblings().addClass('link-no-hover');
});

$('.link-cs3').focusout(function () {
  $('#cs3-link-img').removeClass('link-hovered');
  $('#cs3-link-img').siblings().removeClass('link-no-hover');
});

$('.link-me').hover(
  function() {
    $('#me-link-img').addClass('link-hovered');
  }, function() {
    $('#me-link-img').removeClass('link-hovered');
  }
);

$('.link-me').focus(function () {
  $('#me-link-img').addClass('link-hovered');
  $('#me-link-img').siblings().addClass('link-no-hover');
});

$('.link-me').focusout(function () {
  $('#me-link-img').removeClass('link-hovered');
  $('#me-link-img').siblings().removeClass('link-no-hover');
});

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
