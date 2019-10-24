$(function () {

  // scroll to top
  $(window).scroll(function () {
    var windowScroll = $(window).scrollTop();

    if (windowScroll >= 600) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut(100);
    }
  });

  $(".scroll-top").click(function () {
    $("html, body").animate({
        scrollTop: 0
      },
      600
    );
  });



  $("#convertToForm").click(function () {
    $(".instadiet-analysis .front").css({
      "z-index": 0,
      "transform": "rotateY(180deg)"
    });
    $(".instadiet-analysis .back").css("transform", "rotateY(0)");

  });


  // burgor button change shape to x button
  $(".the-button").on("click", function () {
    $("html,body").toggleClass("overlay");
    $(this).toggleClass("transformed");
    $(".navbar-collapse").toggleClass("show");
  });

  $("body").on("click", function (e) {
    var $currEl = $(e.currentTarget);
    if (!$currEl.is(".navbar") && !$currEl.closest(".navbar").length) {
      $("html,body").removeClass("overlay");
      $(".navbar-collapse").removeClass("show");
      $(".the-button").removeClass("transformed");
    }
  });
  $(".navbar").on("click", function (e) {
    e.stopPropagation();
  });


  // switch between the meals
  var zIndexVAlue = 0;
  $('.diet-slider .diet').on('click', function () {
    $(this).animate({
      left: '30%',
      'marginTop': '50px'
    }, 400, function () {
      zIndexVAlue--;
      $(this).css('z-index', zIndexVAlue);
    }).animate({
      left: 0,
      'marginTop': 0
    }, 400);
  });

});