/* global console, document, $, console, window, flipdown*/
/*disallowMultipleLineBreaks: true*/
/*jslint devel: true, evil: true, plusplus: true */
/*eslint no-console: off */
/*eslint no-unused-vars: off, no-unused-labels: off*/
$(function () {
  "use strict";

  // our clients carousel
  $(".owl-one").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      991: { items: 5, center: true },
      841: { items: 4, center: false },
      600: { items: 3, center: false },
      0: { items: 2, center: false },
    },
  });

  $(
    ".cleint .owl-carousel .owl-item.active:first .item .cleintname:last-child"
  ).addClass("active");

  $(".owl-two").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    center: true,
    dots: false,
  });

  var e = 0;
  $(window).scroll(function () {
    var countr = $("#counter");
    var oTop =
      $(countr).offset().top - window.innerHeight + $(countr).outerHeight();
    if (e == 0 && $(window).scrollTop() >= oTop) {
      $(".count .counter").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 2000,
              easing: "swing",
              step: function (now) {
                $(this).text(Math.ceil(now));
              },
            }
          );
      });
      e = 1;
    }
  });

  var r = 0;
  $(window).scroll(function () {
    var hnd = $(".hnd");
    var hndTop = $(hnd).offset().top - window.innerHeight;
    if (r == 0 && $(window).scrollTop() >= hndTop) {
      $(hnd).addClass("active");
      r = 1;
    }
  });

  var o = 0;
  $(window).scroll(function () {
    var cont_ul = $(".contact ul"),
      ulanim =
        $(cont_ul).offset().top - window.innerHeight + $(cont_ul).outerHeight();
    if (o == 0 && $(window).scrollTop() >= ulanim) {
      $(cont_ul).addClass("active");
      o = 1;
    }
  });

  $(".slider .slideholder").css("z-index", 1);
  $(".slider .slideholder:last-child").css("z-index", 4);

  function swiprit() {
    var slide = $(".slider .slideholder.active"),
      prevslide = $(".slider .slideholder.active").prev();

    if (!$(slide).is(":first-child")) {
      $(".slider .slideholder").removeClass("trans");
      $(".slideout").css("z-index", -1);
      $(slide).siblings().removeClass("slideout");
      $(slide).addClass("slideout").removeClass("active");
      $(prevslide).addClass("active");
      $(".slider .slideholder.active.slideq").removeClass("slideq");
      $(".slider .slideholder.active").css("z-index", 4);
    } else {
      $(".slider .slideholder:first-child").addClass("slideout");
      $(".slider .slideholder")
        .css("z-index", 1)
        .removeClass("active", "slideout");
      $(".slider .slideholder:last-child").addClass("active").css("z-index", 4);
    }
  }

  function iflstchild(child, firstchild) {
    if ($(child).is(":last-child")) {
      $(".slider .slideholder").removeClass("trans");
      $(firstchild).addClass("slideq");
    }
  }
  var firstslide = $(".slider .slideholder").eq(0);
  function swiplft() {
    var slide = $(".slider .slideholder.active");

    if (!$(slide).is(":last-child")) {
      var nextslide = $(".slider .slideholder.active").next();
      $(slide).siblings().removeClass("slideout");
      iflstchild(nextslide, firstslide);
      $(slide).addClass("trans").removeClass("active");
      $(nextslide).next().removeClass("trans").addClass("slideq");
      $(nextslide).addClass("active").removeClass("slideq");
      $(".slider .slideholder.active").css("z-index", 4);
    } else {
      $(".slider .slideholder").css("z-index", 1).removeClass("trans");
      $(slide).addClass("trans").removeClass("active");
      $(slide).css("z-index", 1);
      $(firstslide).addClass("active");
      $(firstslide).removeClass("slideout");
      $(firstslide).removeClass("slideq");
      $(firstslide).next().addClass("slideq");
      $(".slider .slideholder.active").css("z-index", "4");
    }
  }

  var touchstartX = 0,
    touchendX = 0;

  var gesuredZone = document.getElementById("slider");

  gesuredZone.addEventListener(
    "touchstart",
    function (e) {
      touchstartX = e.changedTouches[0].screenX;
    },
    false
  );

  gesuredZone.addEventListener(
    "touchend",
    function (e) {
      touchendX = e.changedTouches[0].screenX;
      handleGesure();
    },
    false
  );

  function handleGesure() {
    if (touchendX < touchstartX) {
      swiplft();
    }
    if (touchendX > touchstartX) {
      swiprit();
    }
  }

  /* stack */

  $(".porto ul li").click(function () {
    var option = $(this).attr("data-option");
    $(".porto").attr("class", "porto disnone" + " " + option);

    $(this).addClass("active").siblings().removeClass("active");
  });

  $(".loading").delay(1000).fadeOut(1000);

  $(window).on("scroll", function () {
    if ($(this).scrollTop() >= 500) {
      $(".scrolltop2").addClass("active");
    } else {
      $(".scrolltop2").removeClass("active");
    }
  });
}); // the end
