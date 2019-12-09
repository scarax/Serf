$(document).ready(function () {
  $('.header__slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    prevArrow: '<button class="arrow arrow--prev" type="button" aria-label="Previous"></button>',
    nextArrow: '<button class="arrow arrow--next" type="button" aria-label="Next"></button>',
    asNavFor: '.slider-nav',
  });
  $('.slider-nav').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
  });
  $('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    prevArrow: '<button class="arrow arrow--prev" type="button" aria-label="Previous"></button>',
    nextArrow: '<button class="arrow arrow--next" type="button" aria-label="Next"></button>',
    asNavFor: '.slider-map',
  });
  $('.slider-map').slick({
    infinite: false,
    slidesToShow: 8,
    slidesToScroll: 8,
    asNavFor: '.surf-slider',
    focusOnSelect: true,
  });
  $('.travel-slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    prevArrow: '<button class="arrow arrow--prev" type="button" aria-label="Previous"></button>',
    nextArrow: '<button class="arrow arrow--next" type="button" aria-label="Next"></button>',
  });
  $('.sleep-slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    prevArrow: '<button class="arrow arrow--prev" type="button" aria-label="Previous"></button>',
    nextArrow: '<button class="arrow arrow--next" type="button" aria-label="Next"></button>',
  });
  $('.shop-slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    prevArrow: '<button class="arrow arrow--prev" type="button" aria-label="Previous"></button>',
    nextArrow: '<button class="arrow arrow--next" type="button" aria-label="Next"></button>',
  });
});

$('<div class="quantity-nav"><button class="quantity-button quantity-button--down" aria-label="-"></button><button class="quantity-button quantity-button--up" aria-label="+"></button></div>').insertAfter('.quantity input');
$('.quantity').each(function () {
  var spinner = $(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-button--up'),
    btnDown = spinner.find('.quantity-button--down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function () {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function () {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });
});