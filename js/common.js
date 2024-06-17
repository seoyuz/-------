$(function() {
    $(".menu-mobile-btn").on("click", function() {
        $(this).toggleClass("close")
        $(".header-mobile-wrap").toggleClass("open")

        /* if($(this).hasClass("open")) {
            $(".header-mobile").removeClass("open")
        } else {
            $(".header-mobile").addClass("open")
        } */
    });

    $(".depth1 a img").on("click", function() {

        //$(this).attr("src", "../images/ico_more_open.png")
        //$(this).parents().siblings(".depth2").slideToggle();

        if(!$(this).parent().hasClass("active")){
            $(this).attr("alt", "닫기");
            $(this).attr("src", "../images/ico_more_open.png");
            $(this).parent().addClass("active");
            $(this).parents().siblings(".depth2").slideDown();
            /* $(this).attr("src", "../images/ico_more.png") */
        }else{
            $(this).attr("src", "../images/ico_more.png");
            $(this).attr("alt", "열기");
            $(this).parent().removeClass("active");
            $(this).parents().siblings(".depth2").slideUp();
            /* $(this).attr("src", "../images/ico_more_open.png") */
        }

        /*$(this).parents().siblings(".depth2").slideUp();*/
        /*$(this).attr("src", "../images/ico_more.png")*/
    });
});