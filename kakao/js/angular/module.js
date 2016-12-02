var myApp = angular.module("kakaoApp", ['ngRoute']);

//spa
myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/',{templateUrl:'page/main.html'})
	.when('/vision',{templateUrl:'page/sub/kakao/vision.html'})
	.when('/video',{templateUrl:'page/sub/news/brand_video.html'});
}]);
