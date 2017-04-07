        
    //changes header background after getting to end of header picture
    //found on stackoverflow
    (function () {
        //var headerBottom= $('#header-bg').height() + 150;
        var headerBottom = document.querySelector('#header-bg').clientHeight;
        
        //on scroll
        $(window).on('scroll', function(){
            var stop = Math.round($(window).scrollTop());
            
            if (stop > headerBottom) {
	            $('.nav-style').addClass('after-header');
            } else {
	            $('.nav-style').removeClass('after-header');
            }
        });
    })();
    
    //close navbar after a selection
    (function () {
        $('.navbar-nav a').click(function(){
            $('.collapse').collapse('hide');
        });
    })();

    //strip text off links for phones
    (function () {
        if (document.documentElement.clientWidth < 500) {
            var phone = document.getElementById('phone-link');
            //phone.src = 'media/icons/phone-sm.png';
    	    phone.innerHTML = '<img id="phone" src="media/icons/phone.png">';

            var email = document.getElementById('email-link');
	        //email.src = 'media/icons/email-sm.png';
	        email.innerHTML = '<img id="email" src="media/icons/email.png">';

	        var github = document.getElementById('github-link');
	        //github.src = 'media/icons/github-sm.png';
	        github.innerHTML = '<img id="github" src="media/icons/github.png">';
        }
    })();
