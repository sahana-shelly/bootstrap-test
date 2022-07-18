$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout: 5000,
    // stagePadding:50,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})