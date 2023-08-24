
$(document).ready(function(){
    $('.slickSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        prevArrow: `<button type='button' class="slick-prev"><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class="slick-next"><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
            }]
    });
    
  });