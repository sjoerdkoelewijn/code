// Scrolling detect direction.
function scrollingDetect() {

	let scrollPos = 0;

	// Add scroll event
	window.addEventListener("scroll", function() {
	
		const body = document.body;

	  	if ((body.getBoundingClientRect()).top < scrollPos) {
			body.classList.add( 'scrolling-down' );
			body.classList.remove( 'scrolling-up' );
	  	}	else {
			body.classList.remove( 'scrolling-down' );
			body.classList.add( 'scrolling-up' );
	  	}
			
		//saves the new state	
		scrollPos = (document.body.getBoundingClientRect()).top;

	});

}
