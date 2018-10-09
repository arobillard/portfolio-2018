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

$('.nav-main a.link-me').on('click', function() {
  $('body').removeClass('nav-open');
  $('.tog-nav-holder').removeClass('tog-nav-open');
});

// Nav hover previews

$('.link-home').hover(
  function() {
    $('#home-link-img').addClass('link-hovered');
  }, function() {
    $('#home-link-img').removeClass('link-hovered');
  }
);
$('.link-home').focus(function () {
  $('#home-link-img').addClass('link-hovered');
  $('#home-link-img').siblings().addClass('link-no-hover');
});

$('.link-home').focusout(function () {
  $('#home-link-img').removeClass('link-hovered');
  $('#home-link-img').siblings().removeClass('link-no-hover');
});

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


(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {

      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);

// $(window).scroll(function(event) {
//
//   $('#section-2').each(function(i, el) {
//     // var el = $(el);
//     if ($('#section-2').visible(true)) {
//       $('#section-2').addClass("bg-dg");
//     } else {
//       $('#section-2').removeClass("bg-dg");
//     }
//   });
//
// });

$(window).scroll(function(event) {

  $('.case-study-preview-img, .me-img, .main-preview-img, .tt-final-preview-img').each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("case-study-preview-img-in");
    } else {
      el.removeClass("case-study-preview-img-in");
    }
  });

});

$(window).scroll(function(event) {

  $('.preview-holder').each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("preview-holder-in");
    } else {
      el.removeClass("preview-holder-in");
    }
  });

});
