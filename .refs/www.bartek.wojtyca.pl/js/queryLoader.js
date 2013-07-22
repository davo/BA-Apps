var QueryLoader = {
	/*
	 * QueryLoader		Preload your site before displaying it!
	 * Author:			Gaya Kessler
	 * Date:			23-09-09
	 * URL:				http://www.gayadesign.com
	 * Version:			1.0
	 * 
	 * A simple jQuery powered preloader to load every image on the page and in the CSS
	 * before displaying the page to the user.
	 */
	
	overlay: "",
	loadBar: "",
	preloader: "",
	items: new Array(),
	doneStatus: 0,
	doneNow: 0,
	selectorPreload: "body",
	ieLoadFixTime: 2000,
	ieTimeout: "",
		
	init: function() {
		if (navigator.userAgent.match(/MSIE (\d+(?:\.\d+)+(?:b\d*)?)/) == "MSIE 6.0,6.0") {
			//break if IE6			
			return false;
		}
		if (QueryLoader.selectorPreload == "body") {
			QueryLoader.spawnLoader();
			QueryLoader.getImages(QueryLoader.selectorPreload);
			QueryLoader.createPreloading();
		} else {
			$(document).ready(function() {
				QueryLoader.spawnLoader();
				QueryLoader.getImages(QueryLoader.selectorPreload);
				QueryLoader.createPreloading();
			});
		}
		
		//help IE drown if it is trying to die :)
		QueryLoader.ieTimeout = setTimeout("QueryLoader.ieLoadFix()", QueryLoader.ieLoadFixTime);
	},
		
	ieLoadFix: function() {
		if(jQuery.browser.msie){
			while ((100 / QueryLoader.doneStatus) * QueryLoader.doneNow < 100) {
				QueryLoader.imgCallback();
			}
		}
	},
	
	imgCallback: function() {
		QueryLoader.doneNow ++;
		QueryLoader.animateLoader();
	},
	
	getImages: function(selector) {
		var everything = $(selector).find("*:not(script)").each(function() {
			var url = "";
			
			if ($(this).css("background-image") != "none") {
				var url = $(this).css("background-image");
			} else if (typeof($(this).attr("src")) != "undefined" /*&& $(this).attr("tagName").toLowerCase() == "img"*/) {
				var url = $(this).attr("src");
			}
			
			url = url.replace("url(\"", "");
			url = url.replace("url(", "");
			url = url.replace("\")", "");
			url = url.replace(")", "");
			
			if (url.length > 0) {
				QueryLoader.items.push(url);
			}
		});
	},
	
	createPreloading: function() {
		QueryLoader.preloader = $("<div></div>").appendTo(QueryLoader.selectorPreload);
		$(QueryLoader.preloader).css({
			height: 	"0px",
			width:		"0px",
			overflow:	"hidden"
		});
		
		var length = QueryLoader.items.length; 
		QueryLoader.doneStatus = length;
		
		for (var i = 0; i < length; i++) {
			var imgLoad = $("<img></img>");
			$(imgLoad).attr("src", QueryLoader.items[i]);
			$(imgLoad).unbind("load");
			$(imgLoad).bind("load", function() {
				QueryLoader.imgCallback();
			});
			$(imgLoad).appendTo($(QueryLoader.preloader));
		}
	},

	spawnLoader: function() {
		var height = $(window).height();
		var width = $(window).width();
		var position = "fixed";
			
		var left = $(QueryLoader.selectorPreload).offset()['left'];
		var top = $(QueryLoader.selectorPreload).offset()['top'];
		
		QueryLoader.overlay = $("<div></div>").appendTo($(QueryLoader.selectorPreload));
		$(QueryLoader.overlay).addClass("QOverlay");
		
		QueryLoader.loadBar = $('<div class="QLoader"></div>').appendTo($(QueryLoader.overlay));
		$("#loader").appendTo($(QueryLoader.overlay));
		
		$(QueryLoader.loadBar).css({
			position: "relative",
			top: "0",
			width: "0"
		});
	},
	
	animateLoader: function() {
		var perc = (100 / QueryLoader.doneStatus) * QueryLoader.doneNow;
		var szerokoscOkna = $('.QOverlay').width();
		
		var okrag = $('#loader .circle');
		var lewaStrona = okrag.find('.rotate.left');
		var prawaStrona = okrag.find('.rotate.right');			
		var counter = $('#loader .display');		
				
		zakonczone = 0;	
		if(zakonczone == 0) {
			if(QueryLoader.selectorPreload == 'body' ) {
				$('#loader .c').css('background-color','rgba(28, 25, 24, '+perc/100+')')
			}
			if(rotate(okrag, lewaStrona, prawaStrona, perc, counter)) {	
				QueryLoader.doneLoad();
				zakonczone == 1
			}
		}
		
	},
	
	doneLoad: function() {
		clearTimeout(QueryLoader.ieTimeout);
		if(QueryLoader.selectorPreload == 'body' ) {
			$('body, html').scrollTop(0);
			$('#welcome').addClass('hide');
			$('#loader').find('.d').addClass('small');
			sprawdzenieRozmiaru('resize');
			$('#loader').doTimeout(250, function() {
				$(this).addClass('animation').find('.circle').animate({opacity: 0}, 500, function() {
					$('.QOverlay').css('background-color','#1C1918').fadeOut(500, function() {
						rozpoczecie();
						$(QueryLoader.preloader).remove();
						$(this).remove();
					})
				})
			})
		} else {
			if($(QueryLoader.selectorPreload).find('.QOverlay').length>1) $(QueryLoader.selectorPreload).find('.QOverlay:first').remove();
			$('#loader').animate({opacity: 0}, 500, function() {
				$('.QOverlay').fadeOut(750, function() {
					pozycjaBoxa();
					$(QueryLoader.preloader).remove();
					dzialanie = 0;
				})
			})
		}
	}
}