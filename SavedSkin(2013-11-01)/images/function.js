function MainMenu(){this.navLi=$("ul#nav li").children("ul").hide().end();this.navLi.hover(function(){$(this).find("> ul").stop(true,true).slideDown(200)},function(){$(this).find("> ul").stop(true,true).hide()})}$(document).ready(function(){MainMenu();$(function(){var b=$(".side-menu > li > ul"),a=$(".side-menu > li > a");b.hide();a.click(function(c){c.preventDefault();if(!$(this).hasClass("active")){a.removeClass("active");b.filter(":visible").slideUp("normal");$(this).addClass("active").next().stop(true,true).slideDown("normal")}else{$(this).removeClass("active");$(this).next().stop(true,true).slideUp("normal")}})});$(function(){var b=$(".side-menu > li > ul > li > ul"),a=$(".side-menu > li > ul > li > a");b.hide();a.click(function(c){c.preventDefault();if(!$(this).hasClass("active")){a.removeClass("active");b.filter(":visible").slideUp("normal");$(this).addClass("active").next().stop(true,true).slideDown("normal")}else{$(this).removeClass("active");$(this).next().stop(true,true).slideUp("normal")}})});$(function(){var b=$(".side-menu-ii > li > ul"),a=$(".side-menu-ii > li > a");b.hide();a.click(function(c){c.preventDefault();if(!$(this).hasClass("active")){a.removeClass("active");b.filter(":visible").slideUp("normal");$(this).addClass("active").next().stop(true,true).slideDown("normal")}else{$(this).removeClass("active");$(this).next().stop(true,true).slideUp("normal")}})});$("[rel=tooltip]").tooltip();$("[rel=popover]").popover();$(".collapse").collapse();$(function(){var b=$("#navi").offset().top;var a=function(){var c=$(window).scrollTop();if(c>b){$("#navi").css({position:"fixed",top:0})}else{$("#navi").css({position:"relative"})}};a();$(window).scroll(function(){a()})})});