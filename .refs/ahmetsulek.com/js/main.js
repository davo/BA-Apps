if (typeof console == "undefined") {
    this.console = {log: function() {}};
}

//Cache for window operations
var $header = $("header");
$(function(){
	//Cache
	var $about_fixed = $(".about .design, .about .development");

	//DOM READY
	$(".loading").fadeOut();
	$(".slogan.web").show().animate({'opacity':'1','margin-top':($(window).height()-80)/2+'px'},1000);
	
	//Optimize favicon to retina
	if(window.devicePixelRatio>1)
	{
		$("#favicon").attr("href",$("#favicon").attr("href").replace("favicon","favicon32"));	
	}

	setTimeout('animate_home()', 3000);	
		
	//$(".arrow, .what").delay(2000).fadeIn(1000,function(){});
	
	//OK ALIGN THE CONTENT
	align_content();
	
	//ASCENSOR
	$('#ascensor').ascensor({
		ascensorName: 'ascensor',
		childType : 'section',
		keyNavigation: false,
		overflow:"hidden",
		ascensorFloorName: ['Home','About','Work','Connect'],
		queued: false,
		queuedDirection: 'y',
		easing: 'easeInOutQuint',
		loop: false,
		time: 1000,
		direction: 'chocolate',
		ascensorMap:[[1,1],[2,1],[3,1],[4,1]]
	});
	
	$("#menu_button").click(function(){
		$header.toggleClass("mobile_menu");
		$("#logo").removeClass("minimized");
		if(!$header.hasClass("mobile_menu"))
		{
			$(".about,.work article").scroll();
		}
	});
	
	$("header .menu a").click(function(){
		if($header.hasClass("mobile_menu"))
		{
			window.setTimeout('$header.removeClass("mobile_menu");', 500);	
			window.setTimeout('$(".work article").scrollTop(0);', 500);	
		}
		toogleAboutFixed();
	});
	
	function toogleAboutFixed()
	{
		if(window.location.href.indexOf('About') > -1)
			$about_fixed.delay(700).fadeIn();
		else
			$about_fixed.fadeOut();
	}
	toogleAboutFixed();
	
	$(".idea2life, .what").click(function(){
		$(".ascensorLink1").click();
	});
		
		
	$(".about").scroll(function(){
		if($(".about").scrollTop() > 0)
			$("#logo").addClass("minimized");
		else
			$("#logo").removeClass("minimized");
	});
	
	$(".work article").scroll(function(){
		if($(".work article").scrollTop() > 0)
			$("#logo").addClass("minimized");
		else
			$("#logo").removeClass("minimized");
	});
	
	$(".contact article").scroll(function(){
		if($(".contact article").scrollTop() > 0)
			$("#logo").addClass("minimized");
		else
			$("#logo").removeClass("minimized");
	});
	//EOF DOM READY
});

function animate_home()
{
	$(".what").fadeIn().textillate({ in: { effect: 'fadeInDown', sync: true } });
	
	$(".arrow").fadeIn(1000);

	setTimeout('$(".idea2life").addClass("red");', 2000);
	setTimeout('$(".arrow").textillate({ in: { effect: "tada", sync: true } });', 2000);
}

//SMART RESIZING
var resizeTimer = null;
$(window).resize(function(){
    if (resizeTimer) {
        clearTimeout(resizeTimer);   // clear any previous pending timer
    }
    resizeTimer = setTimeout(align_content, 500);   // set new timer
});


var causeRepaintsOn = $("h1, h2, h3, p");
//RESIZE FUNCTION
function align_content()
{
	//Align content
	causeRepaintsOn.css("z-index", 1);
	$(".slogan.web").animate({'margin-top':($(window).height()-80)/2+'px'},1000);
}

function alarma(text)
{
	alert(text);
}

$.extend($.expr[':'],{
    inView: function(a) {
        var st = (document.documentElement.scrollTop || document.body.scrollTop),
            ot = $(a).offset().top,
            wh = (window.innerHeight && window.innerHeight < $(window).height()) ? window.innerHeight : $(window).height();
        return ot > st && ($(a).height() + ot) < (st + wh);
    }
});