(window width) - (div width) with responsive

$(function () {
    $(window).on('load resize', function(){
        var widthWindow = $(window).width();
		if($(window).width() >= '992' ){
			 $("classname").width( widthWindow - '365' ); 
		}
        else if($(this).width() < '992' && $(this).width() >= '767'){
			 $("classname").width( widthWindow - '305' );
		}
		else{
			$("classname").width( '100%');
		}
        
    });
}); 

/* Sticky Footer */

var footer_height = 0;
			
$( window ).on("load resize", function() {
	footer_height = $('.footer').innerHeight();
	$('.sticky_footer').css('padding-bottom', footer_height);
});

/* Fixed header */
			
var header_height = 0;		
$(window).on("load resize scroll", function(){	
	header_height = $('.header').innerHeight();			
	if ($(window).scrollTop() >= header_height) {
		$('body').addClass('fixed-header');
	} else {
		$('body').removeClass('fixed-header');
	}
});

/* Responsive menu */
			
$('.icon_menu').click(function() {
	if ($('.responsive_menu').css('display') == 'none' ) {
		$('.responsive_menu').slideDown(800);
	} else {
		$('.responsive_menu').slideUp(800);
	}
}); 



/* Fixed header with smooth effect */

https://codepen.io/soulrider911/pen/dGuEn



$(document).ready(function(){
//click nav menu go to part 
	$('a[href^="#"]').on('click', function(event) {	
	var target = $(this.getAttribute('href'));
		
		if( target.length ) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 1000);
		}
		
	});
//click nav menu go to part-end
	
//click-bottom icon scroll to top menu
	
	$("a[href='#top-scroll']").click(function() {		 
		  $('html, body').animate({scrollTop: $("#top").offset().top }, 2000);
	});
	
//click-bottom icon scroll to top menu-end
	
//fixedHeader
	
		 $(window).scroll(function() {    
			var scroll = $(window).scrollTop();
			if (scroll >= 100) {			
				$(".navbar").addClass("fixedHeader");			
			}
			else{			
				$( ".navbar" ).removeClass( "fixedHeader" )
			}
		}); 
		
//fixedHeader-end
	
//responsive-menu
	$( ".menu" ).click(function() {
	  $( ".nav-list" ).toggleClass( "show" );
	});
//responsive-menu-end
});	