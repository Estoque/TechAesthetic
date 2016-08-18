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

/*function sideMenu() {
	this.navLi = $(".side-menu li").children('ul').hide().end();
	
	this.navLi.hover(function() {
		//마우스 오버
			$(this).find('> ul').stop(true, true).slideDown(500);
		}, function() {
		// 마우스 아웃	
			$(this).find('> ul').stop(true, true).hide();
		});
}*/

$(document).ready(function() {
	 //메뉴실행
	 MainMenu();
	 /*sideMenu();*/
	 
	 // 메뉴숨김
$(function() {
    var menu_ul = $('.side-menu > li > ul'),
        menu_a  = $('.side-menu > li > a');
    menu_ul.hide();
    menu_a.click(function(e) {
        e.preventDefault();
        if(!$(this).hasClass('active')) {
            menu_a.removeClass('active');
            menu_ul.filter(':visible').slideUp('normal');
            $(this).addClass('active').next().stop(true,true).slideDown('normal');
        } else {
            $(this).removeClass('active');
            $(this).next().stop(true,true).slideUp('normal');
        }
    });
});

$(function() {
    var smenu_ul = $('.side-menu ul li ul'),
        smenu_a  = $('.side-menu ul li a');
    smenu_ul.hide();
    smenu_a.click(function(e) {
        e.preventDefault();
        if(!$(this).hasClass('active')) {
            smenu_a.removeClass('active');
            smenu_ul.filter(':visible').slideUp('normal');
            $(this).addClass('active').next().stop(true,true).slideDown('normal');
        } else {
            $(this).removeClass('active');
            $(this).next().stop(true,true).slideUp('normal');
        }
    });
});

$('[rel=tooltip]').tooltip() 

$('[rel=popover]').popover() 

$(".collapse").collapse()


/****************************************
 * Floating Navigation jQuery feature
 ****************************************/
$(function() {
         
    // get initial top offset of navigation 
    var floating_navigation_offset_top = $('#navi').offset().top;
             
    // define the floating navigation function
    var floating_navigation = function(){
                // current vertical position from the top
        var scroll_top = $(window).scrollTop(); 
         
        // if scrolled more than the navigation, change its 
                // position to fixed to float to top, otherwise change 
                // it back to relative
        if (scroll_top > floating_navigation_offset_top) { 
            $('#navi').css({ 'position': 'fixed', 'top':0});
        } else {
            $('#navi').css({ 'position': 'relative' }); 
        }   
    };
     
    // run function on load
    floating_navigation();
     
    // run function every time you scroll
    $(window).scroll(function() {
         floating_navigation();
    });
 
});
	 

	 //div#sideButton

	//
		//상단 메뉴 확장버튼 숨기기

	//

	
 
});





