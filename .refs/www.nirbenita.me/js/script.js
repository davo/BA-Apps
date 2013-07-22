
/* ==========================================================================
   Content Slider
   ========================================================================== */


/**** Variables & Arrays ****/
/* var templify = {
	header:"Templify",
	subHead:"// Identity, User Interface, Front End",
	content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
	actionLink:"#portfolio",
	action:"Read More",
	img:'<img src="images/workTemplify.jpg" alt="Templify" />'
};*/

var $proj1=$('#templify');
var $proj2=$('#logowork');
var $proj3=$('#webbbuilders');
var $proj4=$('#amdocs');

var projects = [$proj1, $proj2, $proj3, $proj4];

var i = 0;

 
/**** Functions ****/
/*
var emptyIt = function (){
	$('.workInfo h2').empty();
	$('.workInfo h3').empty();
	$('.workInfo p').empty();
	$('.workInfo a').empty().removeAttr("href").removeAttr("class");
	$('.slideImage img').remove();
};

var insertIt = function (){
	$('.workInfo h2').append(templify.header);
	$('.workInfo h3').append(templify.subHead);
	$('.workInfo p').append(templify.content);
	$('.workInfo a').addClass("slideLink").attr("href", templify.actionLink).stop().append(templify.action);
	$('.slideImage').append(templify.img);
};
*/
/**** Arrows ****/
/*
var goRight = function () {
    if (i==3) {
		i=0;
	}
	else {
	i++;
	};
	 $(current).removeClass('InToLeft');
    setTimeout(function(){$(current).addClass('OutToLeft');}, 0.1);
    setTimeout(function(){ $(current).addClass('hideThis'); }, 1800);
    setTimeout(function(){$(next).addClass('InToLeft');}, 0.1);
    setTimeout(function(){ $(next).removeClass('hideThis'); }, 1400);

}

var goLeft = function () {
	if (i==0) {
		i=3;
	}
	else {
	i=i-1;
    };

	 $(current).removeClass('InToLeft');
    setTimeout(function(){$(current).addClass('OutToLeft');}, 0.1);
    setTimeout(function(){ $(current).addClass('hideThis'); }, 1800);
    setTimeout(function(){$(previous).addClass('InToLeft');}, 0.1);
    setTimeout(function(){ $(previous).removeClass('hideThis'); }, 1400);
    };

*/

$('.arrow-right').click(function(){ 
    stop();
    var current = projects[i];
    if (i===(projects.length-1)) {
        var current = projects[projects.length-1];
        var next = projects[0];
        i=-1;
    }
    else {
        var next = projects[i+1];
    };

    $(current).removeClass('InToLeft');
    setTimeout(function(){$(current).addClass('OutToLeft');}, 0.1);
    setTimeout(function(){ $(current).addClass('hideThis'); }, 1850);
    setTimeout(function(){$(next).addClass('InToLeft');}, 0.1);
    setTimeout(function(){ $(next).removeClass('hideThis'); }, 1850);
    i++;
    console.log('switch');
});

$('.arrow-left').click(function(){   
    stop();
    var current = projects[i];
    if (i==0) {
        var current = projects[0];
        var previous = projects[projects.length-1];
        i=projects.length;
    }
    else {
    var previous = projects[i-1];
    };
    $(current).removeClass('InToLeft');
    setTimeout(function(){$(current).addClass('OutToLeft');}, 0.1);
    setTimeout(function(){ $(current).addClass('hideThis'); }, 1850);
    setTimeout(function(){$(previous).addClass('InToLeft');}, 0.1);
    setTimeout(function(){ $(previous).removeClass('hideThis'); }, 1850);
    i=i-1;
    console.log('switch');
});

/*
$('.right').click(function(){            
    i++;
     $('#templify').removeClass('InToLeft');
    setTimeout(function(){$('#templify').addClass('OutToLeft');}, 0.1);
    setTimeout(function(){ $('#templify').addClass('hideThis'); }, 1800);
    setTimeout(function(){$('#templify2').addClass('InToLeft');}, 0.1);
    setTimeout(function(){ $('#templify2').removeClass('hideThis'); }, 1400);
});

$('.left').click(function(){            
    i=i-1;
    $('#templify2').removeClass('InToLeft');
    setTimeout(function(){$('#templify2').addClass('OutToLeft');}, 0.1);
    setTimeout(function(){ $('#templify2').addClass('hideThis'); }, 1900);
    setTimeout(function(){$('#templify').addClass('InToLeft');}, 0.1);
    setTimeout(function(){ $('#templify').removeClass('hideThis'); }, 1600);
});
*/
/* ==========================================================================
   Smooth Scroll
   ========================================================================== */

//When you click on an <a> that has a '#'
$('a[href^="#"]').bind('click.smoothscroll',function (e) {
    //prevent from default action to intitiate
    e.preventDefault();
    //'hash' targets the part of the address that comes after the '#'
    var target = this.hash;
        $target = $(target);
    $('html, body').stop().animate({
        //The .offset() method allows us to retrieve the current position of an element relative to the document.

        //Here we are using it to find the position of the target, which we defined earlier as the section of the address that will come after the '#'
        'scrollTop': $target.offset().top
    }, 500, 'swing', function () {
        window.location.hash = target;
    });
});    

/* ==========================================================================
   Waypoints
   ========================================================================== */

$('#home').waypoint(function() {
    $('*').removeClass('active');
    $('#toHome').addClass('active');
}, { offset: -100 });

$('#portfolio').waypoint(function() {
    $('*').removeClass('active');
    $('#toPortfolio').addClass('active');
}, { offset: -50 });

$('#portfolio').waypoint(function() {
    $('*').removeClass('active');
    $('#toPortfolio').addClass('active');
}, { offset: 50 });


$('#about').waypoint(function() {
    $('*').removeClass('active');
    $('#toAbout').addClass('active');
}, { offset: 50 });

/* ==========================================================================
   Social Nav
   ========================================================================== */
$('#socialNav').click(function(){
    $('#socialNav ul li').toggleClass('open');
});