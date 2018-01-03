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