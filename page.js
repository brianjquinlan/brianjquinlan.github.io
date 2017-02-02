        
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

    
    //close navbar after a selection
    $('.navbar-nav a').click(function(){
	$('.collapse').collapse('hide');
    });

    
    //smaller icons for phones 
    if (document.documentElement.clientWidth < 500) {
        var phone = document.getElementById('phone');
    	phone.src = 'media/icons/phone-sm.png';

	var email = document.getElementById('email');
	email.src = 'media/icons/email-sm.png';

	var github = document.getElementById('github');
	github.src = 'media/icons/github-sm.png';
    }
