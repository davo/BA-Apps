var active_section = '';
var last_page = '';
var scrolling_active = false;

var form_initialized = false;

var word_clearance = false;
var coup_flag = false;

var init_ready = false;

function hash_swap(target) {
	
	
		var ele_object = $('#'+ target);

		/* Reassign the element's ID attribute to use the new name temporarily */

		ele_object.attr('ID', target + '_hash');

		 /*Adjust the URL hash to use the actual hash */

		window.location.hash = target;

		/* Revert the element's ID back to the original */

		ele_object.attr('ID', target);

}

function page_controller(element) {

	if(scrolling_active == false){
		
		switch(element)
			{
				case 'greetings':
					hash_swap('greetings');
					_gaq.push(['_trackEvent', 'Page View', 'Waypoints', 'greetings'])
				break;
				case 'work':
				  hash_swap('work');
				  _gaq.push(['_trackEvent', 'Page View', 'Waypoints', 'work'])
				  break;
				case 'expertise':
				  hash_swap('expertise');
				  _gaq.push(['_trackEvent', 'Page View', 'Waypoints', 'expertise'])
			
				  break;
				case 'process':
				  hash_swap('process');
				  _gaq.push(['_trackEvent', 'Page View', 'Waypoints', 'process'])
			
				  break;
				case 'agency':
				  hash_swap('agency');
				  _gaq.push(['_trackEvent', 'Page View', 'Waypoints', 'agency'])
				  break;
				case 'contact':
				  hash_swap('contact');
				  _gaq.push(['_trackEvent', 'Page View', 'Waypoints', 'contact'])

				  break;
				default:
				  // default behavior
		
			}
	}
}

function link_controller (link_object){


	if(scrolling_active == false){
		

	/*
	** Assign an active link which looks into page navigation and finds the link which has a # plus the current page ID name.
	*/

	var active_link = $('#page_nav li a[href="#' + link_object + '"]');

	/*
	** Finds any list item with a class of active and removes it so there's a clean navigation slate.
	*/
	var navigation_links = $('#page_nav li');
	navigation_links.removeClass("active");
	/*
	** Add the active state class to the active link found above and because it's a link and we're assigning the class to list items...
	** we need to assign it to the parent of the active link.
	*/
	active_link.parent().addClass("active");

	}
}

function reset_banner_roll_slider(){
	if(!form_initialized){
	  $('#banner_roll').cycle('destroy'); // destroy the plugin and reset it later 
      $('#banner_roll .banner_roll_slide').attr('style', ''); // reset the complete style attribute because the destroy plugin doesnt do that
      $('#banner_roll').attr('style', '');
      $('#banner_roll').find('.banner_roll_slide').css('left', 0); // reset the position because there is a bug with the active slide that gets pulled a little to the left after resetting

      /*$('.banner_roll_slide').show();*/

      /*$('#banner_roll').cycle({
           fx:     'scrollVert',
           timeout: 1000
       });*/
      
    }
}

function populate_additional_slides (array){
	var $bRoll = $('#banner_roll');

	  		for(var i in array){
	  			$bRoll.append('<h2 class="banner_roll_slide">We build <span class="adverb">' + array[i] +  '</span> amazing websites.</h2>');
	  		}
}


function init_banner_roll_slider(){
		

	  // Insert additional static slides into array (2 is required for jQuery Cycle to function properly)
	  var wordArray = ["unbelievably"];

	  // Setup our dynamic word variable
	  var dynamicWord = '';


	  // Use AJAX to pull the word from the PHP script
	  $.ajax({                                      
	      url: 'php/word_fetch.php',                  //the script to call to get data          
	      data: "",                        //you can insert url argumnets here to pass to word_fetch.php
	                                       //for example "word=blah&name=Bob"
	      dataType: 'json',                //data format      
	      success: function(data)          //on recieve of reply
	      {
	        dynamicWord = data;              //get word
	        wordArray.push(dynamicWord);        // adds the dynamic word to the end of the word array
	        populate_additional_slides(wordArray); // add the words in the array to the slides wrapper
	        init_ready = true;
	        init_slides(true); // initialize the slides
	        

	   		
	      },
	      error: function(){
	      	
	      }
    	});
      

    
      
}

function init_slides(boolean) {

	if(boolean==false){
		reset_banner_roll_slider();
	}

	if(boolean == true && init_ready == true){
      	$('#banner_roll').cycle({
            fx:     'scrollVert',
    		timeout: 1000
    		
     	 });
	};
}

function init_banner_form(){

	if (!form_initialized){
		var form_HTML = '<div id="banner_roll_wrap_fields" class="row">\
							<input type="text" id="banner_word" name="banner_word" placeholder="ENTER YOUR WORD HERE..." maxlength=15 class="small-6 columns"  pattern=".{4,15}" title="4 to 15 characters">\
							<div id="banner_submit" class="small-6 columns"><a class="button">ADD</a></div>\
						</div>';

		$('#banner_roll').fadeOut('fast', function(){
			$('#banner_msg').fadeTo('fast', 0.3);

			$('#banner_roll_wrap')
			.append(form_HTML)
			.hide()
			.fadeIn('fast', function(){

				$(this).find(':input:first').focus();
				process_banner_form();

				// $('#banner_msg').fadeOut('fast', function(){
				// 	$(this).find('span').text('Step 1 of 2: Hello! What\'s your name?');

				// 	$(this).fadeIn('fast');

				// })



			});
			form_initialized = true;
		});
		
	}
}

function randomString() {
            var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
            var string_length = Math.floor((Math.random() * 10) + 5);
            var randomstring = '';
            for (var i = 0; i < string_length; i++) {
                var rnum = Math.floor(Math.random() * chars.length);
                randomstring += chars.substring(rnum, rnum + 1);
            }
            return (randomstring);
        }

function process_banner_form (){

	$('#banner_submit a').click(function(event){
		event.preventDefault();

		// Trigger flag to prevent this from processing twice
		if(!coup_flag){
			coup_flag = true;
			form_initialized = false;

			// Track the word click event in Google Analytics
			_gaq.push(['_trackEvent', 'Promos', 'Fill in the blank', 'Word Submission']);

			// Fire off the email with the word to be approved 

			var word_input = $('#banner_word').val();
			
			// Generate & store coupon code client-side
			var coup_code = randomString();

	    	$.post("php/word_submission.php", {word: word_input, code: coup_code});

			/* Unnecessary: 
			//Check the length of the word input to provide clearance or not
			var min_word_len = 4;
			var max_word_len = 15;
			var word_input = $('#banner_word');

			if (word_input.length > min_word_len && word_input.length < max_word_len)*/

			
			// Move the page down to the Contact section for the coupon code message
			$.scrollTo( '#contact', 1000, {easing:'swing', onAfter:
				function(){
					// After the scrolling is finished, remove the input field/button
					$('#banner_roll_wrap_fields').fadeOut().remove();

					// ...and reinstate the word roll
					
					$('#banner_roll').show();
					// ... fade the message to full opacity
					$('#banner_msg').fadeTo('fast', 1);
					$('#banner_msg span').text('Thank you! Your word has been submitted.')
				}
			} );

			// Display the coupon code message
			var coup_message = '<p id="coupon_message">Congratulations! Save 15%<sup>*</sup> on your next web project using this coupon code: <span>' + coup_code + '</span></p>';

			$('#contact_form').before(coup_message).hide().fadeIn('slow');

			// Display the disclaimer footnote

			var coup_disclaimer = '<p id="coup_disclaimer"><sup>*</sup>Limited time offer valid for new clients.</p>';

			$('#contact_submit').after(coup_disclaimer).hide().fadeIn('slow');


			// Insert hidden fields to store the word
			var hidden_word = '<input type="hidden" name="word" value="' + word_input + '">';

			// ...and the coupon code

			var hidden_coup_code = '<input type="hidden" name="coupcode" value="' + coup_code + '">';

			// Append both to the contact form, just in case they contact us -- we'll this info as well as the rest

			$('#contact_form').append(hidden_word).append(hidden_coup_code);

		} // end of coup flag check



		
	})
	
}





$(document).scroll(function(){
	
	

	/*
	** If the scrollbar is at zero or equal/less than the height of the first element, we're on the "greetings" page
	** so we can set the hash to the first unique page
	*/

	var nav_bar = $('#main_nav');
	var nav_bar_expanded = nav_bar.find('.top-bar.expanded');
	var work_nav = $('#work_nav');

	

	var scroll_y = $(window).scrollTop();

	if(scroll_y == 0){
		if(nav_bar_expanded.length==0){
			nav_bar.removeClass("bg-1");
		}
		/*work_nav.slideUp('slow');*/
	} else {
		nav_bar.addClass("bg-1");
		/*work_nav.slideDown('slow');*/
	}

	
	var flexslider = $('.flexslider');
	var flexslider_position = flexslider.offset().top;

	var win = $(window);
     
    var viewport = {
        top : win.scrollTop(),
 
    };


    viewport.bottom = viewport.top + win.height();

    var flexslider_bottom = flexslider.height() + flexslider_position;





	if (scroll_y >= (flexslider_position - (flexslider.height()/2)) && viewport.bottom <= flexslider_bottom){
		$('#work_nav').css({position: 'fixed', bottom: 0});
		$.waypoints('refresh');
	} else if (viewport.bottom >= flexslider_bottom || scroll_y <= (flexslider_position - 62)){
		$('#work_nav').css('position', 'absolute');
		$.waypoints('refresh');
	}


});



$(document).ready(function(){
	/* Promo Fill in the Blank */

	var banner_roll = null;

	init_banner_roll_slider();

	

	$('#banner').click(function(){

		
		if(!coup_flag){
			init_banner_form();
		}
		
		return false;

	})

	$('#banner_msg').click(function(){

		if(!coup_flag){
			
			init_banner_form();
		}

		return false;
	})


	/* end of Promo */	

	$.localScroll({
				queue:true,
				duration:500,
				hash:true,
				offset: -60,
				easing: 'swing',
				onBefore:function( e, anchor, $target ){
					
					scrolling_active = true;

					$.waypoints('refresh');

				},
				onAfter:function( anchor, settings ){
					scrolling_active = false;
					// $.waypoints('refresh');
					link_controller($(anchor).attr('ID'));
					$.waypoints('refresh');
					
				}
			});
	
	var window_hash = window.location.hash;
	var win_hash = window_hash.substring(1);

	var site_nav = $("#page_nav");
	var site_nav_height = site_nav.outerHeight();


	$('.flexslider').flexslider({
		animation: "slide",
		easing: "swing",
    	controlsContainer: "#work",
    	animationLoop: true,
		manualControls: "#work_nav #slides_ctrls li a",
		directionNav: true,
		start: function(){
			/*Reloads the waypoints given the Flexslider is a little flakey in the element height department. This cleans it up!*/
			$.waypoints('refresh');

			$.localScroll.hash({
				queue:true,
				duration:500,
				offset: -60,
				onBefore:function( e, anchor, $target ){
					////scrolling_active = true;

				},
				onAfter:function( anchor, settings ){
					////scrolling_active = false;
				}
			});
			
		},
		before: function(){
			//$('.slide_details').hide();
		},
		useCSS: false
	});

	
	

	/* 
		Waypoints Plugin Scrolling Detections
	*/

  	var nav_bar = $('#main_nav');

	var sections = $('.page:not(:last)');

	

	sections.waypoint({
		handler: function(direction) {

		    /*
		    ** Assign the active selection to the current page in view.
		    */

			active_section = $(this);
			

			/*
			** "up" is detected by the plugin and here, we're reassigning the active section to the previous waypoint...
			** so the active section is for the previous page.
			*/

			if (direction === "up") {

				active_section = active_section.prev();
	
			}


			/*
			** Assign a variable to the current section/page ID.
			*/
			var waypoint_page_ID = active_section.attr('ID');
			
			
			
			var nav_bar = $('#main_nav');

			var scroll_y = $(window).scrollTop();

			if(scroll_y == 0){
				nav_bar.removeClass("bg-1");
			} else {
				nav_bar.addClass("bg-1");
			}

		  	link_controller(waypoint_page_ID);
		  	page_controller(waypoint_page_ID);
		  		


	    },
	   	offset: 61 //site_nav_height
	});

	/* Contact Scrolling Detection */

	$('#contact').waypoint({
		handler: function(direction){
			last_page = $(this);
			
			if (direction === "up") last_page = last_page.prev();

			last_page_ID = last_page.attr('ID');
			
		    link_controller(last_page_ID);
		    page_controller(last_page_ID);

	    	
		}
		, offset: '80%'

	});

	/* Flexslider Scrolling Detection */

	/*$('.flexslider').waypoint({
		handler: function(direction){
			
			$('#work_nav').css({
				position: 'relative'
			})

			console.log('hit');
			
		}
		,  offset: function() {
    		return -$(this).outerHeight();
 		 }

	});
*/


	
	$('.scroll-nav').click(function(event){
		event.preventDefault();



		$('#work_nav').css('position', 'absolute');

		////scrolling_active = false;
		$.waypoints('refresh');

		var nav_bar = $('#main_nav');
		var top_bar = $('.top-bar');
		if(top_bar.hasClass('expanded')){
			// Resize menu to standard size
			top_bar.removeClass('expanded');
			$.waypoints('refresh');
		}

		var nav_link_hash = $(this).attr('href');
		var nav_link = nav_link_hash.substring(1);
		_gaq.push(['_trackEvent', 'Page View', 'Navigation', nav_link])
		

		
	});

	$('.slide img').click(function(){
		$(this).parent().find($('.slide_details').fadeIn('fast'));
	})

	$('#social_fb').click(function(){
		_gaq.push(['_trackEvent', 'External', 'Navigation', 'Facebook']);
	})

	$('#social_twitter').click(function(){
		_gaq.push(['_trackEvent', 'External', 'Navigation', 'Twitter']);
	})

	
	// PHASE I
	$('.phase').eq(0).hover(
	  function () {
	    $(this).nextAll().stop().fadeTo('fast', 0.5);
	    $('#process #process_diagram').css('backgroundPosition', 'center -90px');
	  },
	  function () {
	    $(this).nextAll().stop().fadeTo('fast', 1);
	    $('#process #process_diagram').css('backgroundPosition', 'top center');
	  }
	);

	// PHASE II
	$('.phase').eq(1).hover(
	  function () {
	    $(this).nextAll().stop().fadeTo('fast', 0.5);
	    $('#process #process_diagram').css('backgroundPosition', 'center -180px');
	  },
	  function () {
	    $(this).nextAll().stop().fadeTo('fast', 1);
	    $('#process #process_diagram').css('backgroundPosition', 'top center');
	  }
	);

	// PHASE III
	$('.phase').eq(2).hover(
	  function () {    
	    $('#process #process_diagram').css('backgroundPosition', 'bottom center');
	  },
	  function () {
	    $('#process #process_diagram').css('backgroundPosition', 'top center');
	  }
	);

	/*$('.toggle-topbar').click(function(event){
		event.preventDefault();
		$('#main_nav').addClass('bg-1');
	});*/


	$('.toggle-topbar').click(function(event){
		event.preventDefault();
		var nav_bar = $('#main_nav');
		nav_bar.addClass("bg-1");
		$.scrollTo( '#greetings', 400, {easing:'swing'} );
	})


	/*
	  Contact Form
	*/
	
	var messageDelay = 3800;  // How long to display status messages (in milliseconds)

	// Init the form once the document is ready
	$( init );
		 
		 
		// Initialize the form
		 
		function init() {
		 
		  // Make submitForm() the form’s submit handler.
		  $('#contact_form').submit( submitForm );
		 		  		 
		}

	  // Submit the form via Ajax
 
		function submitForm() {
		  var contactForm = $(this);
		 
		  // Are all the fields filled in?
		 
		  if ( !$('#contact_name').val() || !$('#contact_email').val() || !$('#contact_message').val() ) {
		 
		    // No; display a warning message and return to the form
		    $('#contact_message_incomplete').fadeIn().delay(messageDelay).fadeOut();
		 
		  } else {
		 
		    // Yes; submit the form to the PHP script via Ajax
		 
		    $('#contact_message_sending').fadeIn();
		 
		    $.ajax( {
		      url: contactForm.attr( 'action' ) + "?ajax=true",
		      type: contactForm.attr( 'method' ),
		      data: contactForm.serialize(),
		      success: submitFinished
		    } );
		  }
		 
		  // Prevent the default form submission occurring
		  return false;
		}

		// Handle the Ajax response
 
		function submitFinished( response ) {
		  response = $.trim( response );
		  $('#contact_message_sending').fadeOut();
		 
		  if ( response == "success" ) {
		 
		    // Form submitted successfully:
		 
		    $('#contact_message_success').fadeIn().delay(messageDelay).fadeOut();
		    $('#contact_name').val( "" );
		    $('#contact_email').val( "" );
		    $('#contact_message').val( "" );
		    $('#contact_phone').val( "" );
		    $('#contact_company').val( "" );
		 
		 
		  } else {
		 
		    // Form submission failed: Display the failure message,
		    $('#contact_message_failure').fadeIn().delay(messageDelay).fadeOut();
		  }
		}


		$("#contact_form").validate();




		

});

$(window).resize(function(){

	if(init_ready == true){
		init_slides(false);
	}

});