//	Set heights
$(function() {
	var $window = $(window),
		$titles = $('h1, h2'),
		$section = $('.section').last(),
		$contact = $('#contact'),
		minH = 800;

	$window.bind(
		'resize.layout',
		function( e )
		{
			var newH = $window.height();
			if ( newH < minH )
			{
				newH = minH;
			}

			$section.css( 'minHeight', newH - 120 );
			$titles.css( 'marginTop', ( newH / 2 ) - 225 );
		}
	).trigger( 'resize.layout' );
});

//	Animate backgroundcolor
$(function() {
	var $window = $(window),
		$html = ( $.browser.webkit ) ? $( 'body' ) : $( 'html' ),
		$page = $('#page'),
		$phone = $('#phone'),
		sections = ['examples', 'contact', 'events', 'options', 'usage', 'home'];

	$window.bind( 
		'scroll.layout',
		function( e )
		{
			var st = $html.scrollTop();

			for ( var a = 0, l = sections.length; a < l; a++ )
			{
				var id = sections[ a ];

				if ( st > $('#' + id).offset().top - 250)
				{
					if ( !$page.hasClass( id ) )
					{
						$page.removeAttr( 'class' );
						$page.addClass( id );
					}
					break;
				}
			}
		}
	).trigger( 'scroll.layout' );
});

//	Scroll through page
$(function() {
	var $html = $('html, body');
	$('a[href^="#"]').bind(
		'click.layout',
		function( e )
		{
			e.preventDefault();
			$html.animate({
				scrollTop: $($(this).attr( 'href' )).offset().top
			}, 500);
		}
	);
});

//	Email link
$(function() {
	$('#email').attr( 'href', 'mailto:info@frebsite.nl' );
});