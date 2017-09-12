/*
			Custom JS from LL
Theme:		Packwise Limitless
Purpose: 	Contains custom JS for Frontend-actions, which were not includet in the theme or needed to be replaced.
*/



$(document).ready(function(){
	//alle onLoad-Frontend-Ereignisse
	console.log('document.ready');
})

$(document).scroll(function(){
	//alle scroll-Ereignisse
	console.log('document.scroll');


	//	Navbar fix on Scrolling
	
	//! fixable navbar-id = navbar-second
	var headbar = $('#navbar-first');
	var navbar = $('#navbar-second');
	var navbar_offset = $(headbar).height();
	var scrollH = $(window).scrollTop();
		
	if (navbar_offset <= scrollH) {
		console.log('navbar = fixed');
		//navbax fixieren
		navbar.addClass('navbar-fixed-top');
		
		headbar.addClass('navbar-fixed-top');
	}else{
		console.log('navbar = relative');
		//navbax Fixierung lösen
		navbar.removeClass('navbar-fixed-top');
		headbar.removeClass('navbar-fixed-top');
	}
	
})

/*Todo:
- Smoothscroll


*/