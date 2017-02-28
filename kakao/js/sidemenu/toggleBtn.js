var gnb_open_btn = $('.open-menu-btn');
var side_menu = $('.side-menu');
var side_menu_onbtn = $('.side-menu-on');

var gnb_close_btn = $('.close-menu-btn');


var active_gnb_main = document.createElement("div");
active_gnb_main.setAttribute("class","active-gnb-main");


$(gnb_open_btn).click(function(){
	$(side_menu).addClass("side-menu-on");
	$(active_gnb_main).insertAfter(side_menu);
	$(active_gnb_main).on('scroll touchmove mousewheel', function(e){
		e.preventDefault(); 
	});

});


$(gnb_close_btn).click(function(){
	$(side_menu).removeClass("side-menu-on");
	$(active_gnb_main).remove();
	$(active_gnb_main).unbind('scroll');
	$(active_gnb_main).unbind('touchmove');
	$(active_gnb_main).unbind('mousewheel');
});



/*
var gnb_closeBtn_wrap = document.createElement("div");
var gnb_closeBtn = document.createElement("button");

gnb_closeBtn.setAttribute("class","gnb_closeBtn fa fa-times fa-3x");
console.log(gnb_closeBtn);


var gnb_menu = document.querySelector(".side-menu"); 
console.log(gnb_menu);
// gnb_closeBtn.insertBefore(gnb_menu, gnb_closeBtn);*/
