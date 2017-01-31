        
    //changes header background after getting to end of header picture
    //found on stackoverflow
	var headerBottom = $('#header-bg').height() + 240;

    //on scroll
	$(window).on('scroll', function(){
	var stop = Math.round($(window).scrollTop());

	if (stop > headerBottom) {
		$('.nav-style').addClass('after-header');
	} else {
		$('.nav-style').removeClass('after-header');
	}
	});

