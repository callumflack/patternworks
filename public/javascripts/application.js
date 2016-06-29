$(document).ready(function() {

	// Toggle modal component
	// --------------------------------------------------------------------------

	// $('[data-toggle="modal"]').on('click', function(e) {
	//
	//     e.preventDefault();
	//
	//     $(".Modal").addClass('is-displayed');
	// });
	//
	// $('[data-dismiss="modal"]').on('click', function(e) {
	//
	//     e.preventDefault();
	//
	//     var modalClose = $(this),
	//         modalWindow = modalClose.parents(".Modal"),
	//         modalVideo = modalWindow.find("video");
	//
	//     $(".Modal").removeClass('is-displayed');
	//     // modalVideo.get(0).pause();
	// });


	// Animate input label on :focus
	// @url: http://codepen.io/oknoblich/pen/wFGIH
	// --------------------------------------------------------------------------

	$('input, textarea').each(function() {
		$(this).on('focus', function() {
			$(this).parent('.Form-group').addClass('is-active');
		});
		$(this).on('blur', function() {
			if ($(this).val().length == 0) {
				$(this).parent('.Form-group').removeClass('is-active');
			}
		});
		if ($(this).val() != '') {
			$(this).parent('.Form-group').addClass('is-active');
		}
	});

	$("label").click(function() {
		var labelID = $(this).attr("for");
		$("#" + labelID).focus()
	})


	// Navbar Scroll Event
	// See: http://codepen.io/Craig-Watson/pen/zGbNRL
	// --------------------------------------------------------------------------

	$(document).ready( function() {

		var lastScrollTop = 0;
		var navToggle     = $(".NavToggle");
		var navTransition = "NavToggle--transition";

		$(window).scroll(function(event) {
			var st = $(this).scrollTop();

			if (st > 250 && st > lastScrollTop){
				navToggle.addClass(navTransition);
			} else {
				navToggle.removeClass(navTransition);
			}

			lastScrollTop = st;

		});

	});


	// owl carousel config
	// @reqs: owl.carousel.min.js
	// @reqs: owl.carousel.css
	// @url: http://www.owlcarousel.owlgraphic.com/docs/started-installation.html
	// --------------------------------------------------------------------------

	$(document).ready( function() {

		var owl = $('.owl-carousel');

		owl.owlCarousel({
			animateOut: 'fadeOut',
			autoplay: true,
			autoplayTimeout: 5000,
			// autoWidth:true,
			items: 1,
			loop: true,
			smartSpeed: 1000
		});

	});




});
