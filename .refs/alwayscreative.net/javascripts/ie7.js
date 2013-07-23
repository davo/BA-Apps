

var scrollBookmark;

var closePortfolioWindow = function($view) {
 
  
  $('#portfolio-window').removeClass('active');
  $('#main').show();
  //$('body').css('overflow', 'auto');
  
  $('body').scrollTo(scrollBookmark).css('height', 'auto');
}

$(window).load(function() {

  var $view = $(window);
  
  $('#portfolio').hide().show();

  $('.project').click(function() {
    //$('body').css('overflow', 'hidden');
    scrollBookmark = $view.scrollTop();
    $('#main').hide();
    $('#portfolio-showcase').flexslider($(this).index()); 
    $('#portfolio-window').addClass('active');
    return false;
  });
  $('.close-window').click(function() {
    closePortfolioWindow($view);
  });
  $('#portfolio-showcase').flexslider({
    animation: 'fade',
    animationSpeed: 0,
    controlNav: false,
    directionNav: false,
    slideshow: false,
    start: function() {
      $('.next-piece').click(function() {
        $('#portfolio-window').animate({scrollTop: 0}, 800, function() {
          $('#portfolio-showcase').flexslider('next');
        });
        return false;
      });
      $('.prev-piece').click(function() {
        $('#portfolio-window').animate({scrollTop: 0}, 800, function() {
          $('#portfolio-showcase').flexslider('prev');
        });
        return false;
      });
    },
    touch: false,
    useCSS: false
  });
  
  $(window).focus();
  
});