
var sideHeader = document.querySelector('.side-header');
// console.log(sideHeader);

var gnbNav = document.querySelector('.gnb-nav');
var gnbNavList = document.querySelectorAll('.gnb-nav > li');
// console.log(gnbNav);

// for(var i=0; i<gnbNavList.length; i++) {
	// console.log(gnbNav.length);

	// gnbNavList[i].onclick = (function(num){
	// 	return function(){
	// 		gnbNav.style.textAlign = "left";
	// 		//gnbNav.style.left = "-40px";
	// 		// console.log(num);

	// 		//메뉴 클릭시, depth메뉴의 display값 block & none
	// 		$('ul.depth_menu:not(ul.depth_menu[num])').removeClass('displayOn').addClass('displayOff');
	// 		$('ul.depth_menu').eq(num).addClass('displayOn').removeClass('displayOff');
	// 	}
	// })(i);
/*
	$(gnbNav).on("click", function(){
		$(this).css("left","100px");
	});*/

//코드 리펙토링!! ㅠㅠ
	$(gnbNavList).on("click focus",function(){

			$(gnbNavList).addClass('moveLeft');

			
			$(".depth_menu").not($(this).find(".depth_menu")).removeClass('displayOn').addClass('displayOff');
			$(this).find(".depth_menu").addClass('displayOn').removeClass('displayOff');
	}); 

	$(gnbNavList).find("li a").on("click", function(){
		console.log("hello");
		console.log(gnbNavList);
		$(gnbNavList).removeClass("moveLeft");
		$(".active-gnb-main").remove();
		$(this).parent().parent().removeClass("moveLeft").parent().removeClass("displayOn");
		$(side_menu).removeClass("side-menu-on");
		// $(active_gnb_main).unbind('scroll');
		// $(active_gnb_main).unbind('touchmove');
		// $(active_gnb_main).unbind('mousewheel');

	})
		
	// })(i);
// }




