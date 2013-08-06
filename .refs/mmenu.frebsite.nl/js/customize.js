

//	Questions
$(function() {

	//	Colors	
	function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
	function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
	function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
	function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}

	var $i = $('input[name="bg_color"]'),
		$p = $('#color_preview'),
		$d = $('#bg_color_dark');

	$i.on(
		'keyup blur',
		function( e )
		{
			$i.removeClass( 'invalid' );
			$p.css( 'background-color', '#' + $i.val() );
		}
	).on(
		'blur',
		function( e )
		{
			var v = $i.val();
			if ( v.length == 0 )
			{
				return;
			}
			v = '#' + v;

			if ( v.length == 4 )
			{
				v = '#' + v[ 1 ] + v[ 1 ] + v[ 2 ] + v[ 2 ] + v[ 3 ] + v[ 3 ];
			}

			var reg = /^#([0-9a-f]{6})$/i;
			if ( !reg.test( v ) )
			{
				$i.addClass( 'invalid' );
				return;
			}

			var R = hexToR( v ),
				G = hexToG( v ),
				B = hexToB( v );
			
			if ( ( R + G + B ) / 3 > 150 )
			{
				$d.prop( 'checked', false );
			}
			else
			{
				$d.prop( 'checked', true );
			}
		}
	);
});

$(function() {
	$('input, select, textarea', '#questions')
		.on(
			'change blur',
			function()
			{
				getCustomizedCode();
			}
		);
});

$(function() {
	$('nav#menu')
		.mmenu({
			slidingSubmenus: false,
			searchfield: true,
			counters: true
		})
		.on(
			'open.mm',
			function()
			{
				setCustomizedCode();
			}
		);
});

$(function() {
	getCustomizedCode();
});


//	Get the code
var $_code = $(),
	$_style = $(),
	$_link = $(),
	__link = '';


var style, code, dark = true;

var getCustomizedCode = function()
{

	style = '',
	code = '',
	dark = true;

	if ( $_code.length == 0 )
	{
		$_code  = $('#code');
		$_style = $('#custom-style');
		$_link  = $('link[href*="mmenu-theme-light.css"]');
		__link  = $_link.attr( 'href' );
	}

	//	Colors
	if ( $('#do_color').is( ':checked' ) )
	{
		dark = $('input[name="bg_color_dark"]').is( ':checked' );

		var $bg_color = $('input[name="bg_color"]');
		if ( !$bg_color.hasClass( 'invalid' ) && $bg_color.val().length > 0 )
		{
			style += '' + '\n';
			style += '/* Colors */' + '\n';
			style += '.mm-menu {' + '\n';
			style += '    background-color: #' + $bg_color.val() + ';' + '\n';
			style += '}' + '\n';
		}
	}

	//	Borders
	if ( $('#do_border').is( ':checked' ) )
	{

		if ( $('#border_type_single').is( ':checked' ) )
		{
			style += '' + '\n';
			style += '/* Borders */' + '\n';
			style += '.mm-menu li,' + '\n';
			style += '.mm-menu div.mm-search {' + '\n';
			style += '    border-bottom: none;' + '\n';
			style += '}' + '\n';

			style += '.mm-menu a.mm-subopen {' + '\n';
			style += '    border-left: none;' + '\n';
			style += '}' + '\n';
		}
		if ( $('#border_type_none').is( ':checked' ) )
		{
			style += '' + '\n';
			style += '/* Borders */' + '\n';
			style += '.mm-menu li,' + '\n';
			style += '.mm-menu li:after,' + '\n';
			style += '.mm-menu div.mm-search {' + '\n';
			style += '    border-bottom: none;' + '\n';
			style += '}' + '\n';

			style += '.mm-menu a.mm-subopen,' + '\n';
			style += '.mm-menu a.mm-subopen:before {' + '\n';
			style += '    border-left: none;' + '\n';
			style += '}' + '\n';
		}
	}

	//	Sizes
	if ( $('#do_sizes').is( ':checked' ) )
	{
		var v = $('select[name="sizes_value"]').val();
		if ( v != '' )
		{
			v = parseInt( v );
			style += '' + '\n';
			style += '/* Sizes */' + '\n';
	
			style += '.mm-menu li > a,' + '\n';
			style += '.mm-menu li > span {' + '\n';
			style += '    line-height: ' + v + 'px;' + '\n';
			style += '}' + '\n';
	
			style += '.mm-menu a.mm-subopen {' + '\n';
			style += '    width: ' + v + 'px;' + '\n';
			style += '    height: ' + v + 'px;' + '\n';
			style += '}' + '\n';
	
			style += '.mm-menu a.mm-subopen + a,' + '\n';
			style += '.mm-menu a.mm-subopen + span {' + '\n';
			style += '    padding-right: ' + ( v + 5 ) + 'px; /* += 5 */' + '\n';
			style += '}' + '\n';
	
			var pad = Math.round( v / 30 ) * 10;
	
			style += '.mm-menu.mm-vertical ul ul {' + '\n';
			style += '    padding: ' + pad + 'px 0 ' + pad + 'px ' + pad + 'px;' + '\n';
			style += '}' + '\n';
	
			style += '.mm-menu.mm-vertical li.mm-opened.mm-selected > a.mm-subopen + a,' + '\n';
			style += '.mm-menu.mm-vertical li.mm-opened.mm-selected > a.mm-subopen + span {' + '\n';
			style += '    margin-right: ' + v + 'px;' + '\n';
			style += '}' + '\n';
	
			style += '.mm-menu.mm-vertical li.mm-opened.mm-selected > em.mm-counter + a.mm-subopen + a,' + '\n';
			style += '.mm-menu.mm-vertical li.mm-opened.mm-selected > em.mm-counter + a.mm-subopen + span {' + '\n';
			style += '    margin-right: ' + ( v + 40 ) + 'px; /* += 40 */' + '\n';
			style += '}' + '\n';
	
			style += '.mm-menu li.mm-label {' + '\n';
			style += '    line-height: ' + ( ( v / 2 ) + 5 ) + 'px; /* /= 2 + 5 */' + '\n';
	//		style += '    font-size: 12px;' + '\n';
			style += '}' + '\n';
	
			style += '.mm-menu em.mm-counter {' + '\n';
			style += '    right: ' + v + 'px;' + '\n';
			style += '    top: ' + ( ( v - 20 ) / 2 ) + 'px; /* centered */' + '\n';
			style += '}' + '\n';

			style += '.mm-menu em.mm-counter + a.mm-subopen + a,' + '\n';
			style += '.mm-menu em.mm-counter + a.mm-subopen + span {' + '\n';
			style += '    padding-right: ' + ( v + 45 ) + 'px; /* += 45 */' + '\n';
			style += '}' + '\n';

			style += '.mm-menu em.mm-counter + a.mm-fullsubopen + a,' + '\n';
			style += '.mm-menu em.mm-counter + a.mm-fullsubopen + span {' + '\n';
			style += '    padding-right: ' + ( v + 40 ) + 'px; /* += 40 */' + '\n';
			style += '}' + '\n';
	
			style += '.mm-menu a.mm-subopen:after {' + '\n';
			style += '    right: ' + ( ( v / 2 ) - 4 ) + 'px;' + '\n';
			style += '}' + '\n';
		}
		
		var v = $('select[name="font_size"]').val();
		if ( v != '' )
		{
			style += '.mm-menu * {' + '\n';
			style += '    font-size: ' + v + 'px;' + '\n';
			style += '}' + '\n';
		}

	}

	//	Visible part of the pages
	if ( $('#do_page').is( ':checked' ) )
	{
		var v = $('select[name="page_value"]').val();
		if ( v != '' )
		{
			v = parseInt( v );
			var neg = -v;
			style += '' + '\n';
			style += '/* Visible part of the page */' + '\n';
	
			style += 'html.mm-top.mm-opening .mm-page,' + '\n';
			style += 'html.mm-top.mm-opening #mm-blocker {' + '\n';
			style += '    margin-top: ' + neg + 'px;' + '\n';
			style += '}' + '\n';
	
			style += 'html.mm-right.mm-opening .mm-page,' + '\n';
			style += 'html.mm-right.mm-opening #mm-blocker {' + '\n';
			style += '    margin-right: ' + neg + 'px;' + '\n';
			style += '}' + '\n';
		
			style += 'html.mm-bottom.mm-opening .mm-page,' + '\n';
			style += 'html.mm-bottom.mm-opening #mm-blocker {' + '\n';
			style += '    margin-bottom: ' + neg + 'px;' + '\n';
			style += '}' + '\n';
	
			style += 'html.mm-left.mm-opening .mm-page,' + '\n';
			style += 'html.mm-left.mm-opening #mm-blocker {' + '\n';
			style += '    margin-left: ' + neg + 'px;' + '\n';
			style += '}' + '\n';
	
			style += '.mm-menu.mm-top > ul {' + '\n';
			style += '    padding-bottom: ' + ( v + 40 ) + 'px; /* += 40 */' + '\n';
			style += '}' + '\n';
			style += '.mm-menu.mm-right {' + '\n';
			style += '    padding-left: ' + v + 'px;' + '\n';
			style += '}' + '\n';
			style += '.mm-menu.mm-bottom {' + '\n';
			style += '    padding-top: ' + v + 'px;' + '\n';
			style += '}' + '\n';
			style += '.mm-menu.mm-left {' + '\n';
			style += '    padding-right: ' + v + 'px;' + '\n';
			style += '}' + '\n';
		}
	}


	if ( !dark )
	{
		code += $('<div />').append( $_link.clone().attr( 'href', 'path/to/mmenu-theme-light.css' ) ).html() + '\n';
	}

	if ( style.length > 0 )
	{
		code += '<style type="text/css" media="all">' + '\n';
		code += style;
		code += '</style>' + '\n';		
	}

	if ( code.length == 0 )
	{
		code = 'Hold on a minute,\nyou didn\'t make any changes!';
	}

	$_code.text( code );
};


var setCustomizedCode = function()
{
	if ( dark )
	{
		$_link.removeAttr( 'href' );
	}
	else
	{
		$_link.attr( 'href', __link );
	}
	
	$_style.html( style );
};