var gnb_open_btn = $('.open-menu-btn');
var side_menu = $('.side-menu');
var side_menu_onbtn = $('.side-menu-on');
var gnb_close_btn = $('.close-menu-btn');


var active_gnb_main = document.createElement("div");
active_gnb_main.setAttribute("class","active-gnb-main");


$(gnb_open_btn).click(function(){
	$(window).scrollTop(0);
	$(side_menu).addClass("side-menu-on");
	$(active_gnb_main).insertAfter(side_menu);
	$(active_gnb_main).on('mousewheel', function(e){
		e.preventDefault(); 
	});

});


$(gnb_close_btn).click(function(){
	$(side_menu).removeClass("side-menu-on");
	$(active_gnb_main).unbind('mousewheel');
});
