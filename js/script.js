// Инициализируем Slick slider
$(document).ready(function(){
    $('.portfolio-slider').slick({
        arrows:true,
        dots:true,
        slidesToShow:2,
        speed:1000,
        autoplay:true,
        autoplaySpeed:2000,
        waitForAnimate:false,
        responsive:[
            {
                breakpoint: 951,
                settings: {
                    slidesToShow:1,
                }
            }
        ]
    });
});

// Инициализация Animate
var wow = new WOW;
wow.init();
