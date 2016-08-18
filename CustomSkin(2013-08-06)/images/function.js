// JavaScript Document

function MainMenu() {
	this.navLi = $("ul#nav li").children('ul').hide().end();
	
	this.navLi.hover(function() {
		//마우스 오버
			$(this).find('> ul').stop(true, true).slideDown(200);
		}, function() {
		// 마우스 아웃	
			$(this).find('> ul').stop(true, true).hide();
		});
}

$(document).ready(function() {
	 //메뉴실행
	 MainMenu();
	 
	 // 메뉴숨김
	 $("#expandButton").hide();
	 $("div#sidemenu").hide();
	 

	 //div#sideButton
	 $(".toggleButton").click(function() {

		 	$("div#sidemenu").toggle("slide", { direction: "right" } , "fast");
			
	

			
			$(".toggleButton").toggle();
		 });
	//
		//상단 메뉴 확장버튼 숨기기
	$("#upperExpand").hide();
	$("div#upperbar").hide();
	
	$(".toggleUpper").click(function() {
      	$("div#upperbar").slideToggle("fast");
		$(".toggleUpper").toggle();
    })
	//
	$("#slideDown").hide();
	
	$(".sliders").click(function() {
        $("div#slideshow").slideToggle("fast");
		$(".sliders").toggle();
    });	 
});

$(function() {
   $( "#dialog" ).dialog();
});