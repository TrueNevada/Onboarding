$(function() {
  $('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,

    arrows: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.left').click(function(){
    $('.slider').slick('slickPrev');
  })

  $('.right').click(function(){
    $('.slider').slick('slickNext');
  })

  $('.reviews__slider').slick({
    infinite: true,
    arrows: false,
  });

  $('.previous').click(function(){
    $('.reviews__slider').slick('slickPrev');
  })

  $('.next').click(function(){
    $('.reviews__slider').slick('slickNext');
  })
});

