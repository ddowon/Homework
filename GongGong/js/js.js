

/*====== header-banner-imgSlide ======*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("imgSlide");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length} ;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}


setInterval(showSlides,2000);

function imgStop(){
    clearInterval(showSlides);
}

/*====== header-banner-imgSlide ======*/


/*====== header-banner-toggle-btn =====*/
//$(document).ready(function(){
// $("#header-toggle-btn").click(function(){
//        $("#header-banner").slideToggle();
//    });
//    });
/*====== header-banner-toggle-btn =====*/




/*============ 미디어쿼리 start ==============*/
//
//function sidenavOpen() {
//    document.getElementById("sideNav").style.width = "250px";    /*보이게*/
//     document.getElementById("main").style.marginLeft = "250px";  /* 메뉴 열었을때 본문이 옆으로 밀리는 효과*/
//    document.body.style.backgroundColor="rgba(0,0,0,0.2)";  //본문영역 음영처리
//}
//
//function closeNav() {
//    document.getElementById("mySidenav").style.width = "0";   /* 안보이게*/
//     document.getElementById("main").style.marginLeft ="0"; //메인영역 다시 왼쪽으로~
//    document.body.style.backgroundColor="white";   //원래대로 흰색으로
//}
/*============ 미디어쿼리 end ==============*/