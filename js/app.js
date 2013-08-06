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