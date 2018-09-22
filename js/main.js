jQuery(document).ready(function($){
        //for knob
        $('.skill').knob();
    //for owl carousel 
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        300:{
            items:2
        },
       480:{
            items:3
        },
        768:{
            items:4
        },
        992:{
            items:5
        }
    }
});
    var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.fa-chevron-right').click(function() {
    owl.trigger('next.owl.carousel', [2000]);
})
// Go to the previous item
$('.fa-chevron-left').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [2000]);
});
//    forslick nav
   $('.main-menu').slicknav(); 
    $('.slicknav_parent').click(function(){
        $('.slicknav_parent ul').removeClass('sub_menu')
    });
    new WOW().init();

    var mixer = mixitup('.all-mix-content');
    
});

