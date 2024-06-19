$(function() {
    //let $win = $(window);
    //let $winWidth = $win.innerWidth;
    let $menuMobileBtn = $(".menu-mobile-btn");
    let $headerMobileWrap = $(".header-mobile-wrap");

    //윈도우 사이즈가 변경될 경우
    $(window).on("resize", function() {
        mobileHeaderEvent();
    });

    //윈도우 사이즈 1024 이상되면 모바일메뉴 닫힘 //
    function mobileHeaderEvent() {
        if($(window).innerWidth() > 1024) {
            $headerMobileWrap.removeClass("open");
            $menuMobileBtn.removeClass("close");
        }
    }

    // 모바일용 햄버거메뉴 작동 //
    $menuMobileBtn.on("click", function() {
        $(this).toggleClass("close")
        $headerMobileWrap.toggleClass("open")
    });

    // depth1 더보기 버튼//
    $(".depth1 a img").on("click", function() {

        if(!$(this).parent().hasClass("active")){
            $(this).attr("alt", "닫기");
            $(this).attr("src", "../images/ico_more_open.png");
            $(this).parent().addClass("active");
            $(this).parents().siblings(".depth2").slideDown();
        }else{
            $(this).attr("src", "../images/ico_more.png");
            $(this).attr("alt", "열기");
            $(this).parent().removeClass("active");
            $(this).parents().siblings(".depth2").slideUp();
        }
    });
});