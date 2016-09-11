var $sitelink_btn = $('.sitelink-btn');
var $dropdown_menu = $('.sitelink-dropdown');

var open_close_img = $sitelink_btn.find('img');
console.log(open_close_img);


// 관련사이트 이동 dropdown-box toggle 함수
$sitelink_btn.click(function() {
  $dropdown_menu.toggle();
});

