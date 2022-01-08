$(document).ready(function() {
	/*====================== js for sticky and mobile menu ====================== */
	var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
	$(".main_page").css('min-height', min_height + 'px');
	$(window).resize(function() {
		var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
		$(".main_page").css('min-height', min_height + 'px');
	});

	$(window).scroll(function() {
		var navHeight = $('#custom-header').height();
		var sticky = $('#custom-header');
		if ($(window).scrollTop() > 0) {
			sticky.addClass("sticky")
			$('#dashboard-page').css('padding-top', navHeight + "px");
		} else {
			sticky.removeClass("sticky");
			$('#dashboard-page').css('padding-top', 0);
		}
	});
	$('.jb_front_nav_close button').on('click', function() {
		$('.navbar-collapse').collapse('hide');
	});

	var kursorx = new kursor({
		type: 4,
		color: 'rgba(0,0,0,0)',
	})


	/*====================== js for scrollTop ====================== */
	var btn = $('#button');

	$(window).scroll(function() {
		if ($(window).scrollTop() > 500) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});

	btn.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, '500');
	});
	/*====================== js for scrollTop ====================== */


/*====================== filter-slider start ====================== */
	var $owl = $('#filter-slider');

	$owl.children().each(function(index) {
		$(this).attr('data-position', index);
	});


	$('#about_slider').owlCarousel({
        loop: true,
        center: true,
        items: 1,
        animateOut: 'fadeOut',
        autoplay: true,
        dots: false,
        nav: false,
        autoplayTimeout: 4000,
        smartSpeed: 950,
    });


	$('#services_slider').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        animateOut: 'fadeOut',
		autoplay: true,
        dots: false,
        nav: false,
        autoplayTimeout: 4000,
        smartSpeed: 950,
    });

    $('.count').each(function() {

		$(this).prop('counter', 0).animate({
	
		counter: $(this).text()
	
		}, {
	
		duration: 10000,
	
		easing: 'swing',
	
		step: function(now) {
	
			$(this).text(Math.ceil(now));
		}
		});
	});
	

/*====================== filter-slider end ====================== */

/*====================== js for scrollTop ====================== */

	// Add smooth scrolling to all links
	// $(".navbar a").on('click', function(event) {
	// 	var _href = $(this).attr('href');
	// 	// Make sure this.hash has a value before overriding default behavior
	// 	if (_href !== "") {
	// 		// Prevent default anchor click behavior
	// 		event.preventDefault();

	// 		$('html, body').animate({
	// 			scrollTop: $(_href).offset().top
	// 		}, 800, function() {});
	// 	} // End if
	// });

	$(document).on('click', '.filter-btn', function() {
		$('.filter').toggleClass('filter-in');
	});

	AOS.init({
		duration: 1200,
	})

}); /*====================== all js end ====================== */