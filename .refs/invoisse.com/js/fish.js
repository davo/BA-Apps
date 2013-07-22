$(function(){
	
	var win = $(window);
	var docHeight 	= $(document).height();	

	var navHeight = 100;
	
	
	
	// INITIALIZE
	
	bgHeight();
	
	
	// RESIZE
	win.resize(function(){ 
	
		bgHeight();
	
	});
	
	
	
	
		
	win.scroll(function(){
	
		winTop = win.scrollTop();
		
		
		if (winTop <= 0 && winTop <= navHeight+100) {
			$('body').removeClass('middle bottom');
			$('body').addClass('top');
		}
		
		/*
		else if (winTop >= navHeight+100 && winTop <= navHeight+150) {
			$('body').removeClass();
			$('body').addClass('topMiddle');
		}
		*/
		
		else if (winTop >= navHeight+200 && winTop <= navHeight+250) {
			$('body').removeClass('top bottom');
			$('body').addClass('middle');
		}
		/*
		else if (winTop >= navHeight+300 && winTop <= navHeight+380) {
			$('body').removeClass();
			$('body').addClass('bottomMiddle');
		}
		*/
		
		else if (winTop >= navHeight+380) {
			$('body').removeClass('top middle');
			$('body').addClass('bottom');
		}
		

		
	});
	
	
	
    win.scroll(function () {
    
    	if ($('body').hasClass('bumped') && win.height() + win.scrollTop() >= $(document).height()) {}
    	
    	else if ($('body').hasClass('bumped') && win.height() + win.scrollTop() -20 <= $(document).height()) {
    		$('body').removeClass('bumped');
    	}
    
        else if (win.height() + win.scrollTop() >= $(document).height()) {
        	$('body').addClass('bumped');
        }
        
        
    });
	
	

	

	
	$('input.email').focus();

	
	$('input.email').on('keyup', function(){
	
		var text		= $(this).val();
	
		if (validateEmail(text) === false) {
		
			$(this).parents('.field').removeClass('valid');
		
		}
		
		else {
		
			$(this).parents('.field').addClass('valid');
		
		}	
	});
	
	
	
	/*
	$('input.email').on('focus', function(){
		$(this).parents('.field').addClass('focused');
	});
		
	$('input.email').on('blur', function(){
		$(this).parents('.field').removeClass('focused');
	});
	
	*/


	
	// Submit Email
	$('.newEmail').on('submit', function(e){
	
		var url 		= "http://invoisse.com/beta/submit.php";
		var postData 	= $(this).serialize();
		var text		= $(this).find('input').val();
	
		e.preventDefault();
	
		if( /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ) {
			
			if (validateEmail(text) === false) {
			
				$(this).parents('.field').addClass('invalid');
				$(this).parents('.field').on('webkitAnimationEnd', function(){
				
					$(this).removeClass('invalid');
				
				});
				
				return false;
			}
			
			else {
				
				$(this).unbind('submit').submit();
			}
			
			return false;
 			
		}	
		
		

		

		
		if (validateEmail(text) === false) {
		
			$(this).parents('.field').addClass('invalid');
			$(this).parents('.field').on('webkitAnimationEnd', function(){
			
				$(this).removeClass('invalid');
			
			});
			
			return false;
		}

		// TO SERVER
		$.post(url, postData)
			.done(function(id) {
			
				$('body').addClass('done');
			
			})
			.fail(function(transport) {
				alert('fail');
			});
			
		// empty fields
		// $(this).find('.email').val('');
		return false;
	});
	


	// FUNCTIONS
	
	
	
	function validateEmail(email) {
		var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}
	
	
	
	function bgHeight() {
	
		$('.bg').css('height', docHeight);
	
	};




});