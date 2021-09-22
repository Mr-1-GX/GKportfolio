
$('.center').slick({
  dots: true,
  arrows: false,
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 6000,
  speed: 1000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});




      