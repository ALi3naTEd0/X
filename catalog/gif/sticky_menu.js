//Sticky menu
var sticky_element = ".menu"; // CSS ID or CLASS name of the element to stick
var sticky_element_clean = sticky_element.substring(1, sticky_element.length);
$(function() {
	createSticky($(sticky_element));
});
function createSticky(sticky) {
	$('<div id="' + sticky_element_clean + '_phantom"></div>').insertBefore(sticky_element); // Phantom prevents jump
	if (typeof sticky !== "undefined") {
		var pos = sticky.offset().top,
			win = $(window);

		win.on("scroll", function() {
			if (win.scrollTop() >= pos) {
				var phantomHeight = $(sticky_element).outerHeight();
				sticky.addClass("fixed");
				$('#' + sticky_element_clean + '_phantom').height(phantomHeight).show();

				// Fix for anchor links position
				var anchorOffset = '-' + phantomHeight + 'px';
				$('.anchor').css({'visibility': 'hidden','display': 'block','position': 'relative','top': anchorOffset,});
			} else {
				sticky.removeClass("fixed");
				$('#' + sticky_element_clean + '_phantom').hide();
			}
		});
	}
}