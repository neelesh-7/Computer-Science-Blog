const responsive = {
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}

$(document).ready(function() {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    //Toggle Menu
    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    })

    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        dots: false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive:responsive
    });

    //Button To Scroll Up
    $('.move-up span').click(function(){
        $('html, body').animate({
            scrollTop: 0
        },  10);
    })

    //Allow AOS
    AOS.init();


});