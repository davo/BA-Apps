var Modernizr = window.Modernizr;

  // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
  if (Modernizr.touch && !window.location.hash) {
    $(window).load(function () {
      setTimeout(function () {
        // At load, if user hasn't scrolled more than 20px or so...
        if( $(window).scrollTop() < 20 ) {
          window.scrollTo(0, 1);
        }
      }, 0);
    });
  }


// $(function() {
//   var page = $("#page");
//   sections = ['home', 'about', 'join', 'prizes', 'timeline'];
//   for ( var a = 0, l = sections.length; a < l; a++ )
//       {
//         var id = sections[a];
//       }
// }



$(document).ready(function() {

    $(function() {

        $('#join-content').find('.item').hover(function() {
            $(this).find('.bg-join-text').stop().fadeOut(350);
            $(this).find('.static-full').stop().animate({opacity: '1', 'margin-top': '510px'});
            $(this).find('.bkg-sharp').stop().animate({height: '40px'});
            $(this).find('h5, p').stop().animate({'padding-top': '0px'});
            },
            function() {
            $(this).find('.bg-join-text').stop().fadeIn(350);
            $(this).find('.static-full').stop().animate({opacity: '0', 'margin-top': '490px'});
            $(this).find('.bkg-sharp').stop().animate({height: '0px'});
            $(this).find('h5, p').stop().animate({'padding-top': '50px'});
            }
        );

        // Judges fancy animation for full bio.

        $('.judge').hover(function() {
            $(this).stop().animate({'margin-top': '-60px'});
            $(this).find('.bkg-sharp').stop().animate({height: '2px', top: '435px', transform: 'rotate(' + 0 + 'deg)'});
            $(this).find('.name, .bio').stop().animate({color: '#00d197'});
            $(this).find('.full-bio').stop().animate({opacity: '1'});
        },
        function() {
            $(this).stop().animate({'margin-top': '0px'});
            $(this).find('.bkg-sharp').stop().animate({height: '65px',top: '360px',transform: 'rotate(' + -3 + 'deg)'});
            $(this).find('.name, .bio').stop().animate({color: '#371c6d'});
            $(this).find('.full-bio').stop().animate({opacity: '0'});
        });

        // Judges fancy animation for full bio, poorly binded for multitouch devices.

        // $('.judge').live('touchstart', function(e){
        //     e.preventDefault();
        //     $(this).stop().animate({'margin-top': '-60px'});
        //     $(this).find('.bkg-sharp').stop().animate({height: '2px', top: '420px', transform: 'rotate(' + 0 + 'deg)'});
        //     $(this).find('.name, .bio').stop().animate({color: '#00d197'});
        //     $(this).find('.full-bio').stop().animate({opacity: '1'});
            
        // });


        // $('.judge').live('touchend', function(e){
        //     e.preventDefault();
        //     $(this).stop().animate({'margin-top': '0px'});
        //     $(this).find('.bkg-sharp').stop().animate({height: '55px',top: '360px',transform: 'rotate(' + -5 + 'deg)'});
        //     $(this).find('.name, .bio').stop().animate({color: '#371c6d'});
        //     $(this).find('.full-bio').stop().animate({opacity: '0'});

        // });
    });

      $.scrollIt({
        easing: 'elasout', 
        scrollTime: 700,
        activeClass: 'active'
      });

      // var s = skrollr.init({
      //   edgeStrategy: 'set',
      //   forceHeight: false
      // });

      $("#about-content, #join-content, #timeline-content, #judges-content").owlCarousel({
       
            navigation : false,
            autoPlay: false,

            goToFirst: true,
       
            slideSpeed : 500,
            paginationSpeed : 400,
       
            items : 1, 
            itemsDesktop : false,
            itemsDesktopSmall : false,
            itemsTablet : false,
            itemsMobile : false,
            responsive: true

       
        });
    

    $(window).keydown(function(e) {

            var slideOne = $("#about-content").data('owlCarousel');

            var activeSlide = "join";



            if(e.keyCode==39 && activeSlide == "about"){
                slideOne.next();
            } else if (e.keyCode==37 && activeSlide == "about") {
                slideOne.prev();
            }

            var slideTwo = $("#join-content").data('owlCarousel');


            if(e.keyCode==39 && activeSlide == "join"){
                slideTwo.next();
            } else if (e.keyCode==37 && activeSlide == "join") {
                slideTwo.prev();
            }

            var slideThree = $("#timeline-content").data('owlCarousel');


            if(e.keyCode==39){
                slideThree.next();
            } else if (e.keyCode==37) {
                slideThree.prev();
            }


            var slideFour = $("#judges-content").data('owlCarousel');


            if(e.keyCode==39){
                slideFour.next();
            } else if (e.keyCode==37) {
                slideFour.prev();
            }

    });


});    