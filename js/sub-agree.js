$(function() {

    /*전체 동의시*/
    $(".all-agree").on("click", function () {

        if(!$(this).parent().hasClass("active")) {  //전체 동의 버튼에 active 클래스가 없을 때
          
            $(this).parent().addClass("active"); // 부모에게 active 클래스를 준다
            $(".agree").prop("checked",true); // 모든 agree 체크박스에 체크한다.
            $(".terms-accordion").find(".js-txt").slideUp();
            $(".btn-box .blue-btn").text("다음단계"); /*일단은 텍스트만 변경되게 해놓음*/

        } else { //전체 동의 버튼에 active 클래스가 있을 때
            
            $(this).parent().removeClass("active"); // 부모의 active 클래스를 뺀다.
            $(".agree").prop("checked",false); // 모든 agree 체크박스 체크를 푼다.
            $(".terms-accordion").find(".js-txt").slideDown();
            $(".btn-box .blue-btn").text("로그인"); /*일단은 텍스트만 변경되게 해놓음*/
        }

        /* $(".btn-box").find(".blue-btn").prop('href', 변경할 값); <-a태그 변경 */ 
        // $(".btn-box").find(".blue-btn").text("다음단계"); /*일단은 텍스트만 변경되게 해놓음*/
    });

    /*개별 동의시*/
    $(".check-box").find(".agree").on("click", function() {

        let selected_length = $(".agree:checkbox:checked").length; /*체크된 체크박스 개수 */
        let checkbox_length = $(".agree:checkbox").length; /*체크박스 개수 */

        // console.log("체크된 개수" + selected_length, "체크박스 전체 개수" + checkbox_length);


        if($(this).is(':checked')){
            $(this).parent().parent().parent().find(".js-txt").slideUp();
        }else{
            $(this).parent().parent().parent().find(".js-txt").slideDown();
        }

        if(selected_length == checkbox_length) {
            $(".all-agree").prop("checked", true); /* 전체동의 박스 체크 */
            $(".all-agree-box").addClass("active"); /* 전체동의 li 액티브 on */
            $(".btn-box .blue-btn").text("다음단계"); /*일단은 텍스트만 변경되게 해놓음*/

        }else{
            $(".all-agree").prop("checked", false); 
            $(".all-agree-box").removeClass("active");/* 전체동의 li 액티브 off */
            $(".btn-box .blue-btn").text("로그인"); /*일단은 텍스트만 변경되게 해놓음*/
        }
    });

});