function shuffleCarousel() {

	var ghostkitCarousel = document.querySelector('.ghostkit-carousel');

	if (ghostkitCarousel !== null) {

		if (ghostkitCarousel.classList.contains('is-style-order-random')) {

			var elems = document.querySelectorAll('.is-style-order-random > .ghostkit-carousel-items > .ghostkit-carousel-slide');
		
			var allElems = (function(){
				var ret = [], l = elems.length;
				while (l--) { ret[ret.length] = elems[l]; }
				return ret;
			})();
		
			var shuffled = (function(){
				var l = allElems.length, ret = [];
				while (l--) {
					var random = Math.floor(Math.random() * allElems.length),
						randEl = allElems[random].cloneNode(true);
					allElems.splice(random, 1);
					ret[ret.length] = randEl;
				}
				return ret; 
			})(), l = elems.length;
		
			while (l--) {
				elems[l].parentNode.insertBefore(shuffled[l], elems[l].nextSibling);
				elems[l].parentNode.removeChild(elems[l]);
			}
		}

	}
 
}
