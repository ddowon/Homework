// gnb 메뉴 js
$(function(){

var sideHeader = document.querySelector('.side-header');

var gnbNav = document.querySelector('.gnb-nav');
var gnbNavList = document.querySelectorAll('.gnb-nav > li');

	// 메뉴 클릭 시 함수 실행
	$(gnbNavList).on("click focus",function(){
		//list를 감싸고 있는 요소에 moveleft 클래스 추가
		$(gnbNavList).addClass('moveLeft');

		// 클릭된 li를 제외한 세부 메뉴들에서 display block 클래스 제거 & display none 클래스 추가 
		$(".depth_menu").not($(this).find(".depth_menu")).removeClass('displayOn').addClass('displayOff');
		// 클릭 된 li 요소의 세부 메뉴에 display block 클래스 추가
		$(this).find(".depth_menu").addClass('displayOn').removeClass('displayOff');
	}); 

	// 세부 메뉴 클릭 시 이벤트 발생 (페이지 이동이 일어나면서 발생)
	$(gnbNavList).find("li a").on("click", function(){
		$(gnbNavList).removeClass("moveLeft");
		$(".active-gnb-main").remove();
		$(this).parent().parent().removeClass("moveLeft").parent().removeClass("displayOn");
		$(side_menu).removeClass("side-menu-on");
	})
});



