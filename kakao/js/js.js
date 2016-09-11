// (function(global,$){
// 	'use strict';
// 	var wrapper_origin_pos;
// 	function init(){
// 		var $sidemenu_wrapper = $('.side-menu');
// 		console.log($sidemenu_wrapper);
// 		 wrapper_origin_pos = $sidemenu_wrapper.css('left');
// 		var $toggle_btn = $('.toggle-menu-btn');

// 		console.log($toggle_btn);

// 		$toggle_btn.on('click', toggleOffCanvasMenu);
// 		}

// 	function toggleOffCanvasMenu(){
// 		// console.log('toggle menu');

// 		// this는 이벤트가 연결된 버튼 문서 객체이다.
// 		// this가 참조하는 버튼 객체를 jquery 객체화 시키는 방법은
// 		// jquery 팩토리 함수 내부에 this 참조 변수를 전달하여 jquery 객체를 생성한다
// 		// 생성된 jquery 객체는 jqeury.프로토타입 객체가 가진 능력을 맘껏 사용가능하다 
// 		var $this = $(this);  //이와같은 행위는 성능을 저하시킴!

// 		$sidemenu_wrapper.animate({
// 			'left':global.parseInt($sidemenu_wrapper.css('left')) == 0 ? wrapper_origin_pos : 0
// 		});
// 		$this.toggleClass('open-menu');
// 	}
// 	$(init);

// })(this, this.jQuery);