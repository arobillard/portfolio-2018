---
---

$('.nav-main a').attr('tabindex', '-1');
$('.nav-footer-wrap').addClass('hidden');
$('.tog-nav-holder').addClass('nav-at-top');

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
    $('a:not(.tog-nav-holder), [tabindex="0"]').attr('tabindex', '-1');
    $('.nav-main a').attr('tabindex', '0');
    $('.tog-nav-holder').attr('aria-label', 'Press link to close navigation or hit the escape key.')
  }else {
    $('a:not(.tog-nav-holder), [tabindex="-1"]').attr('tabindex', '0');
    $('.nav-main a').attr('tabindex', '-1');
    $('.tog-nav-holder').attr('aria-label', 'Press to open navigation.')
  }

});

$('.nav-main a.link-me').on('click', function() {
  $('body').removeClass('nav-open');
  $('.tog-nav-holder').removeClass('tog-nav-open');
});

window.addEventListener('keydown', function(e) {
  if (e.keyCode == 27) {
    $('body').removeClass('nav-open');
    $('.tog-nav-holder').removeClass('tog-nav-open');
    $('a:not(.tog-nav-holder), [tabindex="-1"]').attr('tabindex', '0');
    $('.nav-main a').attr('tabindex', '-1');
    $('.tog-nav-holder').attr('aria-label', 'Press to open navigation.')
  }
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

{% for navHovers in site.data.case-studies %}

  $('.link-{{navHovers.csLink}}').hover(
    function() {
      $('#{{navHovers.csLink}}-link-img').addClass('link-hovered');
    }, function() {
      $('#{{navHovers.csLink}}-link-img').removeClass('link-hovered');
    }
  );

  $('.link-{{navHovers.csLink}}').focus(function () {
    $('#{{navHovers.csLink}}-link-img').addClass('link-hovered');
    $('#{{navHovers.csLink}}-link-img').siblings().addClass('link-no-hover');
  });

  $('.link-{{navHovers.csLink}}').focusout(function () {
    $('#{{navHovers.csLink}}-link-img').removeClass('link-hovered');
    $('#{{navHovers.csLink}}-link-img').siblings().removeClass('link-no-hover');
  });

{% endfor %}

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

$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.wordmark').addClass('wordmark-scrolled')
      }
      if ($(this).scrollTop() < 100) {
        $('.wordmark').removeClass('wordmark-scrolled')
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
