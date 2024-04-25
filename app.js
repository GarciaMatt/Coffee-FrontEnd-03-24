$(document).ready(function(){

    //change nav color when scolling
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            $(".nav").css("background", "#fff");
            $(".nav").css("box-shadow","rgba(0, 0, 0, 0.1) 0px 4px 12px");
        }
        else {
            $(".nav").css("background", "transparent");
            $(".nav").css("box-shadow", "none");
        }
    })


    //heart
    $(".heart").on("click", function(){
        $(this).toggleClass("is-active");
    });

    //filter
    var mixer = mixitup('.product-list', {
        selectors: {
            target: '.product-card'
        },
        animation: {
            duration: 300
        }
    })
})

