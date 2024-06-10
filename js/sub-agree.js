$(function() {

    /*전체 동의시*/
    $(".all-agree").on("click", function () {
        /*전체동의 클릭시 액티브 -> 약관박스 슬라이드 업*/
        $(this).toggleClass("active");
        $(".terms-accordion").find(".txt,.agree-box").slideToggle();

         /*전체동의 li css추가 */
        $(this).parent().toggleClass("active");

        /*$(".btn-box").find(".blue-btn").prop('href', 변경할 값); <-a태그 변경*/ 
        $(".btn-box").find(".blue-btn").text("다음단계"); /*일단은 텍스트만 변경되게 해놓음*/

    });

    /*개별 동의시*/
    $(".agree-box").find(input).on("click", function (){
        $(this).parent().parent().sibling(".txt").slideUp();
    });

});