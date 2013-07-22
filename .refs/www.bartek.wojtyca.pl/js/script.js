rozpoczeto = 0;
dzialanie = 0;
scrolling = 0;
scrolltime = false;


/* ************** */
/* funckje ogólne */
/* ************** */

// jQuery doTimeout: Like setTimeout, but better! - v1.0 - 3/3/2010
(function($){var a={},c="doTimeout",d=Array.prototype.slice;$[c]=function(){return b.apply(window,[0].concat(d.call(arguments)))};$.fn[c]=function(){var f=d.call(arguments),e=b.apply(this,[c+f[0]].concat(f));return typeof f[0]==="number"||typeof f[1]==="number"?this:e};function b(l){var m=this,h,k={},g=l?$.fn:$,n=arguments,i=4,f=n[1],j=n[2],p=n[3];if(typeof f!=="string"){i--;f=l=0;j=n[1];p=n[2]}if(l){h=m.eq(0);h.data(l,k=h.data(l)||{})}else{if(f){k=a[f]||(a[f]={})}}k.id&&clearTimeout(k.id);delete k.id;function e(){if(l){h.removeData(l)}else{if(f){delete a[f]}}}function o(){k.id=setTimeout(function(){k.fn()},j)}if(p){k.fn=function(q){if(typeof p==="string"){p=g[p]}p.apply(m,d.call(n,i))===true&&!q?o():e()};o()}else{if(k.fn){j===undefined?e():k.fn(j===false);return true}else{e()}}}})(jQuery);

// cross-browser rotate // obrót - do loadera
function rotateElement(element,angle) {
	var rotate = 'rotate('+angle+'deg)';	
	if(element.css('MozTransform')!=undefined) element.css('MozTransform',rotate);		
	else if(element.css('WebkitTransform')!=undefined) element.css('WebkitTransform',rotate);
	else if(element.css("filter")!=undefined) {
		var cos = Math.cos(Math.PI * 2 / 360 * angle);
		var sin = Math.sin(Math.PI * 2 / 360 * angle);		
		element.css("filter","progid:DXImageTransform.Microsoft.Matrix(M11="+cos+",M12=-"+sin+",M21="+sin+",M22="+cos+",SizingMethod='auto expand',FilterType='nearest neighbor')");
		element.css("left",-Math.floor((element.width()-200)/2));
		element.css("top",-Math.floor((element.height()-200)/2));
	}
}

// funkcja do obrotu na stronie
function rotate(loader, rotateLeft, rotateRight, obrot, counter) {			
	if(obrot<=50) rotateElement(rotateLeft,obrot*3.6);
	else if(obrot<=100) {
		rotateElement(rotateLeft,180);				
		rotateElement(rotateRight,(obrot-50)*3.6);
	}	
	if(counter !== undefined) {
		var countNum = counter.html();
		if(countNum<=obrot) counter.text(Math.round(obrot));
	}
	if(obrot>=100) return true
	else return false
}

// Quick Each
jQuery.fn.quickEach = (function(){    
    var jq = jQuery([1]);    
    return function(c) { 
        var i = -1, el, len = this.length;        
        try {           
            while (++i < len && (el = jq[0] = this[i]) && c.call(jq, i, el)
            	!== false
            );            
        } catch(e){ 
            delete jq[0];
            throw e; 
        } 
        delete jq[0]; 
        return this;    
    };    
}());

// nasłuchiwanie scrolla 
(function(c){var a=["DOMMouseScroll","mousewheel"];c.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var d=a.length;d;){this.addEventListener(a[--d],b,false)}}else{this.onmousewheel=b}},teardown:function(){if(this.removeEventListener){for(var d=a.length;d;){this.removeEventListener(a[--d],b,false)}}else{this.onmousewheel=null}}};c.fn.extend({mousewheel:function(d){return d?this.bind("mousewheel",d):this.trigger("mousewheel")},unmousewheel:function(d){return this.unbind("mousewheel",d)}});function b(i){var g=i||window.event,f=[].slice.call(arguments,1),j=0,h=true,e=0,d=0;i=c.event.fix(g);i.type="mousewheel";if(i.wheelDelta){j=i.wheelDelta/120}if(i.detail){j=-i.detail/3}d=j;if(g.axis!==undefined&&g.axis===g.HORIZONTAL_AXIS){d=0;e=-1*j}if(g.wheelDeltaY!==undefined){d=g.wheelDeltaY/120}if(g.wheelDeltaX!==undefined){e=-1*g.wheelDeltaX/120}f.unshift(i,j,e,d);return c.event.handle.apply(this,f)}})(jQuery);
jQuery(function($) {
    $(document).bind('mousewheel', function(event, delta, deltaX, deltaY) {
    	if(rozpoczeto == 1) {
    		if($('#details').is('.open')) {
    			var pozycja = $('#details').position();
    			$('body, html').stop(true, false).animate({scrollTop: pozycja.top},750);    			
					 if(deltaY == '1') zmianaBoxa('prev');	
			 	else if(deltaY == '-1') zmianaBoxa('next');
				if(scrolling == 1) {
					$("body, html").stop(true, false);
					scrolling = 0;
				}				
				return false;
    		} else {    			 
				if(scrolling == 1) {
					$("body, html").stop(true, false);
					scrolling = 0;
				}
				//	 if(deltaY == '1') changeSection('prev');	
			 	//else if(deltaY == '-1') changeSection('next');
    		}
		} else return false;
    });
});

// klawiatura
(function(a){function b(b){if(typeof b.data!=="string"){return}var c=b.handler,d=b.data.toLowerCase().split(" ");b.handler=function(b){if(this!==b.target&&(/textarea|select/i.test(b.target.nodeName)||b.target.type==="text")){return}var e=b.type!=="keypress"&&a.hotkeys.specialKeys[b.which],f=String.fromCharCode(b.which).toLowerCase(),g,h="",i={};if(b.altKey&&e!=="alt"){h+="alt+"}if(b.ctrlKey&&e!=="ctrl"){h+="ctrl+"}if(b.metaKey&&!b.ctrlKey&&e!=="meta"){h+="meta+"}if(b.shiftKey&&e!=="shift"){h+="shift+"}if(e){i[h+e]=true}else{i[h+f]=true;i[h+a.hotkeys.shiftNums[f]]=true;if(h==="shift+"){i[a.hotkeys.shiftNums[f]]=true}}for(var j=0,k=d.length;j<k;j++){if(i[d[j]]){return c.apply(this,arguments)}}}}a.hotkeys={version:"0.8",specialKeys:{8:"backspace",9:"tab",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",191:"/",224:"meta"},shiftNums:{"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"}};a.each(["keydown","keyup","keypress"],function(){a.event.special[this]={add:b}})})(jQuery)
jQuery(document).bind('keydown',function (e){ klik(e) });
function klik(e) {
    if(rozpoczeto == 1) {
    	if($('#details').is('.open')) {    		
			if(e.which==39 || e.which==68 || e.which==75 || e.which==78 || e.which==32 || e.which==40 || e.which==83 || e.which == 32) {	
				navInfoActive('a_right');	
				zmianaBoxa('next');
				e.preventDefault();
			} else if(e.which==37 || e.which==65 || e.which==74 || e.which==80 || e.which==38 || e.which==87) {
				navInfoActive('a_left');
				zmianaBoxa('prev');
				e.preventDefault();
			} else if(e.which==27) {
				closeWork();
				e.preventDefault();
			}
    	} else {
			if(e.which==39 || e.which==68 || e.which==75 || e.which==78 || e.which==32) {		
				navInfoActive('a_right');
				if($('#portfolio').is('.active')) slidePortfolio('next');
				if($('#o').is('.active')) slideAbout('next');
				e.preventDefault();
			} else if(e.which==37 || e.which==65 || e.which==74 || e.which==80) {
				navInfoActive('a_left');
				if($('#portfolio').is('.active')) slidePortfolio('prev');
				if($('#o').is('.active')) slideAbout('prev');
				e.preventDefault();
			} else if(e.which==38 || e.which==87) {
				changeSection('prev');
				navInfoActive('a_up');
				e.preventDefault();
			} else if(e.which==40 || e.which==83 || e.which == 32) {
				changeSection('next');
				navInfoActive('a_down');
				e.preventDefault();
			} else if(e.which==13) {
				if($('#portfolio').is('.active')) {
					$('#portfolio').find('li.active a').trigger('click');
				}
			}
		}
	}
}

// podswietlanie "klawiszy"
function navInfoActive(obiekt) {
	$('.navInfo .'+obiekt).addClass('active').doTimeout(500,function() {
		$(this).removeClass('active');
	});
}

// przesuwanie listy portfolio
function slidePortfolio(kierunek, konkret) {
	var aktywna = $('#portfolio li.active');	
	if(konkret == undefined) {
		if(kierunek == 'next') {
			if(aktywna.next().length > 0) var nowa = aktywna.next('li')
			else var nowa = $('#portfolio li:first');
		} 
		else if(kierunek == 'prev') {
			if(aktywna.prev().length > 0) var nowa = aktywna.prev('li')
			else var nowa = $('#portfolio li:last');
		} else { var nowa = aktywna }
	} else {
		var nowa = $('#portfolio li:eq('+konkret+')');
	}
	var pozycja = nowa.index()
	var szerokosc = nowa.width()+20;	
	$('#portfolio').find('li').removeClass('active');
	nowa.addClass('active');
	$('#portfolio').find('ul').stop(true, false).animate({marginLeft: -pozycja*szerokosc}, 500)
}

// przesuwanie listy o mnie
function slideAbout(kierunek, konkret) {
	var aktywna = $('#o').find('.part.active');
	if(konkret == undefined) {
		if(kierunek == 'next') {
			if(aktywna.next('.part').length > 0) var nowa = aktywna.next('.part')
			else var nowa = $('#o').find('.part:first');
		} 
		else if(kierunek == 'prev') {
			if(aktywna.prev('.part').length > 0) var nowa = aktywna.prev('.part')
			else var nowa = $('#o').find('.part:last');
		}
	} else {		
		var nowa = $('#o').find('#'+konkret);
	}
	var pozycja = nowa.index()
	var szerokosc = $(window).width();
	
	var sekcja = new Array('me','skills','experience','education')
	var sekcja = sekcja[pozycja]
	pokazSekcje('o',sekcja);	
	window.location.hash = 'about/'+sekcja;
	
	$('#o').find('.part').removeClass('active');
	nowa.addClass('active');
	$('#o').find('.suwak').stop(true, false).animate({marginLeft: -pozycja*szerokosc}, 750);
}


// zmiana sekcji
function changeSection(kierunek, id) {
	if(dzialanie != 1 || dzialanie == undefined) {
		dzialanie = 1;
		var aktualna = $('section.active');	
		if(aktualna.length < 1) var aktualna = $('section:first')		
		if(kierunek == 'next') {
			var nowa = aktualna.next('section');
			if(nowa.attr('id')=='details' && !$('#details').hasClass('open')) var nowa = nowa.next('section')
		} else if(kierunek == 'prev') {
			var nowa = aktualna.prev('section');
			if(nowa.attr('id')=='details' && !$('#details').hasClass('open')) var nowa = nowa.prev('section')
		}
		// jeśli zmiana na konkretną
		if(kierunek == "special"){			
			var odleglosc = $('#'+id).position();
			$('body, html').stop(true, false).animate({scrollTop: odleglosc.top},750, function() {
				dzialanie = 0;
			});	
		// jeśli proba wyjścia ponad pierwszą
		} else if(aktualna.attr('id') == 'welcome' && kierunek == "prev") {
			dzialanie = 0;
		// jeśli próba zejścia poniżej pierwszej
		} else if(aktualna.attr('id') == 'kontakt' && kierunek == "next") {
			dzialanie = 0;
		// jeśli wejście na widok konkretnej realizacji
		} else if(nowa.attr('id') == 'details') {
			var odleglosc = nowa.position();
			$('body, html').stop(true, false).animate({scrollTop: odleglosc.top},750, function() {
				dzialanie = 0;
			});
		// jeśli zwykła zmiana
		} else {	
			var odleglosc = nowa.position();
			aktualna.removeClass('active');
			nowa.addClass('active');
			$('body, html').stop(true, false).animate({scrollTop: odleglosc.top},750, function() {
				dzialanie = 0;
			});
		}
	}
}

// uruchamianie pokazywacza konkretnej sekcji
function rozpocznijPokaz() {
	var scroll = $(window).scrollTop();
	var okno = $(window).height();
	//var widocznosc = okno+scroll;
	if($('#details').is('.open')) {
		var name = 'work/'+$('#details').find('.level').attr('id');+'';
		window.location.hash = name;
	} else {		
		if(scrolling == 0) {
			$('section').quickEach(function() {
				var pozycja = $(this).position('top');
				var pT = pozycja.top;
				
				
				if(pT-(okno*.5) < scroll && pT+(okno*.5) > scroll) {
					var id = $(this).attr('id');
					var name = $(this).attr('name');
					if(name=='about') {
						var subname = $('#o').find('.part.active').attr('name');
						var name = 'about/'+subname+'';
					}
					if(name=='work') var name = 'works';
					
					$('section').removeClass('active');
					$(this).addClass('active');
					
					pokazSekcje(id);
					window.location.hash = name;
				}		
			})
		}
	}
}

// specjalne animacje pokazywania konkretnych sekcji
function pokazSekcje(id,about) {
	if(rozpoczeto == 1) {
		// pokazywanie portfolio
		if(id == 'portfolio'){
			if($('#'+id).find('.part').is('.hide')) {
				var ilosc = $('#'+id+' li').length;
				$('#'+id).find('.part').removeClass('hide');
				
				$('#'+id).find('li').quickEach(function(i) {
					$(this).doTimeout(i*100+500, function() {
						$('#'+id).find('li:nth-child('+parseInt(i+1)+')').removeClass('hide');
						if(parseInt(i) == ilosc) { $(this).removeClass('hide');	}
					})
				})
			}
		// pokazywanie umiejetnosci
		} else if(id == 'o') {
			if(about==undefined || about == 'me') {				
				if($('#info').is('.hide')) {
					$('#info').removeClass('hide');
					$('#info').find('.tri span').quickEach(function(i){
						$(this).doTimeout(i*25, function() {
							$(this).removeClass('oh');
						});
					});
				}
			} else if(about == 'skills') {
				if($('#umiejetnosci').is('.hide')) {
					$('#umiejetnosci').removeClass('hide');
					$('#wykres').find('.linia').quickEach(function(i) {
						$(this).delay(i*100).animate({width:'94%'}, 750);
					});			
					$('#wykres').find('.slupki li').quickEach(function(i) {
						$(this).doTimeout(i*100+450, function() {
							$(this).css({height: $(this).find('.wartosc').text()}).removeClass('active').removeClass('hidden');
						})
					});
				}
			} else if(about == 'experience') {
				if($('#doswiadczenie').is('.hide')) {
					$('#doswiadczenie').removeClass('hide');
					$('#timeline').find('.time li').quickEach(function(i){
						$(this).find('.sep').delay(i*100).animate({height: '100%'}, 1500, function() {
							$(this).parent().find('.rok').fadeIn(150);
						});
					})
					$('#timeline').find('.freelancer').delay(500).fadeIn(function() {
						$(this).find('.line span').animate({width: '100%'}, 1000);
						$(this).find('li').quickEach(function(i){			
							$(this).find('.kropka').delay(i*100+250).fadeIn(250, function () {
								$(this).parent().find('.linia').animate({height: 100}, 300).parent().find('.nazwa').fadeIn(500);
							});
						});
					})
					$('#timeline').find('.hotmind').delay(750).fadeIn(function() {
						$(this).find('.line span').animate({width: '100%'}, 750);		
						$(this).find('li').quickEach(function(i){			
							$(this).find('.kropka').delay(i*100+250).fadeIn(250, function () {
								$(this).parent().find('.linia').animate({height: 100}, 300).parent().find('.nazwa').fadeIn(500);
							});
						});
					});
				}
			} else if(about == 'education') {
				if($('#wyksztalcenie').is('.hide')) {
					$('#wyksztalcenie').removeClass('hide');
					$('#wyksztalcenie').find('ul li span').quickEach(function(i){
						$(this).css({width: 0, height: 0, top: '-3px'}).delay(i*100).animate({width: 7, height: 7, top: 0},300);
					});
					setInterval(function() {
						var aktualny = parseInt($('#wyksztalcenie .geeks img.active').index())+1
						var ilosc = $('#wyksztalcenie .geeks img').length;
						var nr = Math.floor(Math.random() * ilosc) + 1;
						if(nr == aktualny) nr++
						if(nr > ilosc) nr == 1
						$('#wyksztalcenie .geeks img').removeClass('active');
						$('#wyksztalcenie .geeks img:nth-child('+nr+')').addClass('active');
					}, 1500);
				}
			}
		} else {
			if($('#'+id).find('.part').is('.hide')) {
				$('#'+id).find('.part').removeClass('hide');
			}
		}
	}
}

// zmiana adresu
function checkScroll() {
	odleglosc = $('section.active').position();
	if(scrolling == 0) {
		scrolling = 1
		$('body, html').stop().animate({scrollTop: odleglosc.top},400, function() {
			scrolling = 0
		});
	}
}

// sprawdzanie rozmiaru i polozenia okna oraz poszczegolnych sekcji 
function sprawdzenieRozmiaru(typ) {
	var scroll = $(window).scrollTop();	
	var okno = $(window).height();
	//if(okno < 480) {
	//	var header = '0px';		
	//} else {		
		var header = '63px';
	//}
	
	// kolor topa
	if($('#details').is('.open')) $('header').addClass('works').addClass('small');
	else $('header').removeClass('works')
	
	// rozmiary sekcji
	if(typ=='resize') $('section').not('#details').css({height: okno-parseInt(header), paddingTop: header});
	
	if(rozpoczeto == 1) {
		var aktywna = $('section.active');
		var odleglosc = aktywna.position();
		if(typ=='resize'){
			var szerokosc = $(window).width();
			var index = $('#o').find('.part.active').index();
			$('#o').find('.suwak').css({marginLeft: -index*szerokosc});
			$('body, html').scrollTop(odleglosc.top);
		}
		
		if($('#details').is('.open')) {
			var odleglosc = $('#details').position();
			$('#details').css({height: okno});
			$('body, html').animate({scrollTop: odleglosc.top}, 0);
		} else {
			if(typ=='scroll') {
				rozpocznijPokaz();
				if(scrolltime) clearTimeout(scrolltime);			
				scrolltime = setTimeout(function() {
					checkScroll();
				}, 250);
				if(scroll>105) $('header').addClass('small');
				else $('header').removeAttr('class');
			}
		}
	} else $(window).scrollTop(0)
}

// pokazanie strony z przywitaniem
function rozpoczecie() {			
	var hash = window.location.hash;
	var okno = $(window).height();
	$('#welcome').removeClass('hide').addClass('active').doTimeout(500,function() {
		$('header').removeClass('hide');
		if(hash.length > 0) {
			var hashs = hash.slice(1).split('/');
			$('section').quickEach(function() {
				var nazwa = $(this).attr('name');
				if(nazwa == hashs[0]) {	
					scrolling = 1;
					var odleglosc = $(this).position();
					$(this).addClass('active');
					$('body, html').animate({scrollTop: odleglosc.top}, odleglosc.top/okno*750, function() {
						scrolling = 0;
						if(nazwa == 'about' && hashs[1] != undefined) {
							if(hashs[1] == 'me') { var element = 0; var id = 'info' }
							else if (hashs[1] == 'skills') { var element = 1; var id = 'umiejetnosci'; }
							else if (hashs[1] == 'experience') { var element = 2; var id = 'doswiadczenie'; }
							else if (hashs[1] == 'education') { var element = 3; var id = 'wyksztalcenie'; }
							$('#o').find('.suwak').animate({marginLeft: -element*$(window).width()}, 750, function() {								
								pokazSekcje('o',hashs[1]);
							});
							$('#o').find('.part').removeClass('active');
							$('#'+id).addClass('active');
							window.location.hash = 'about/'+hashs[1];
						}
					});
				}
			})
		}
		rozpoczeto = 1;
		sprawdzenieRozmiaru('resize')
	})
}


// boksy w konkretnej realizacji
function pozycjaBoxa() {
	if($('.QOverlay').css('display')!='block') {
		var wysokosc = $(window).height();
		var szerokosc = $(window).width();
		var active = $('.level .box.a');
		var pozycja = active.position();
		$('.level .boxy').stop(true, false).animate({marginLeft: szerokosc/2-pozycja.left-active.outerWidth()/2}, 750, function() {
			//dzialanie = 0;
		});
	}
}

function zmianaBoxa(kierunek,index) {
	//if(dzialanie == 0 || dzialanie == undefined) {
		//dzialanie = 1
		var active = $('#details').find('.level .box.a');
		if(kierunek == 'next') {
			if(active.next('.box').length > 0) var next = active.next('.box')
			else var next = active		
		} else if(kierunek == 'prev') {
			if(active.prev('.box').length > 0) var next = active.prev('.box')
			else var next = active		
		}		
		if(index !== undefined){
			var next = $('#details').find('.box:nth-child('+parseInt(index+1)+')');
		}
		active.removeClass('a').addClass('u');
		next.removeClass('u').addClass('a');
		pozycjaBoxa();
	//}
}

function zmianaDetali(kierunek) {
	var active = $('#portfolio').find('li.active');	
	if(kierunek == 'next') {
		if(active.next('li').length > 0) var next = active.next('li')
		else var next = $('#portfolio').find('li:first');
	} else if(kierunek == 'prev') {
		if(active.prev('li').length > 0) var next = active.prev('li')
		else var next = $('#portfolio').find('li:last');	
	}
	letsAjax(next.find('a').attr('href'), 'change');
	$('#portfolio').find('li.active').removeClass('active')
	next.addClass('active')
}

// skalowanie widoku konkretnej realizacji
function resize() {	
	if($('#details').is('.open') && $('#details').is('.active')) { 
		var wysokosc = $(window).height();
		var padding = (wysokosc-400)/2;		
		$('.level').css({paddingTop: padding+32, paddingBottom: padding-32});
		pozycjaBoxa();
	}
}

// ladowanie konkretnej realizacji
function letsAjax(link, typ) {
	$.ajax({
		url: link,
        type: 'get',
        dataType: 'html',
		cache: false,
								
		error: function(){
			console.log("Olaboga! Jakiś ajaxowy error... no to się pewnie wsio posypało...");
		},						
		beforeSend: function() {
			pozycja = $('#details').position()
			$('section').removeClass('active');
			$('#details').addClass('change').addClass('open').addClass('active').doTimeout(750, function() {
				$(this).removeClass('change');
				if(typ !== 'no') {
					QueryLoader.items = new Array();
					QueryLoader.doneStatus = 0;
					QueryLoader.doneNow = 0;
					QueryLoader.selectorPreload = ".level";
					QueryLoader.init();
				}
				rozpocznijPokaz();
			});
			sprawdzenieRozmiaru();
			$('body, html').animate({scrollTop: pozycja.top},1000);
		},						
		complete: function(data){},				
		success: function(data) {
			if(typ == 'change') {
				var copy = $('#details').clone();
				$('#details').before('<div id="detailsCopy">'+copy.html()+'</div>')
				$('#detailsCopy').fadeOut(500, function() {
					$(this).remove();
				});
			}
			$('#details').find('.levele').html(data).find('.box:first').removeClass('u').addClass('a');
			if(typ !== 'no') $('#details').find('.level').append('<div class="QOverlay"><div id="loader"><div class="circle"><div class="display"></div><div class="circleOverflow"><div class="rotate right"><div class="bg right"><span></span></div></div></div><div class="circleOverflow"><div class="rotate left"><div class="bg left"><span></span></div></div></div></div></div></div>')
			
			resize();
			pozycjaBoxa();
			scrolling = 0;
		}
	});
}
// zamykanie realizacji
function closeWork() {
	$('#details').addClass('change').removeClass('open').css({height: 0}).doTimeout(750,function() {	
		$(this).removeClass('change').find('.levele .level').remove();
		changeSection('next');
		rozpocznijPokaz();
		sprawdzenieRozmiaru('scroll');
		slidePortfolio();
		dzialanie = 0;
		scrolling = 0;
	});
}

$(window).resize(function() { sprawdzenieRozmiaru('resize'); resize(); });
$(window).scroll(function() { sprawdzenieRozmiaru('scroll'); resize(); });

$(document).on('ajaxComplete', function (event, request, settings) {
	var url = settings.url;
	url = url.substring(0, url.indexOf('?'));
	_gaq.push(['_trackPageview', url]);
});

$(document).ready(function(){
	var hash = window.location.hash;	
	if(hash.length > 0) {
		var hashs = hash.slice(1).split('/');
		if(hashs[0] == 'work') {
			letsAjax(hash.slice(1)+'.html', 'no');
			$('#portfolio').find('li.active').removeClass('active');
			$('#portfolio').find('li').quickEach(function() {
				if($(this).find('a').attr('href').replace('.html', '') == hash.slice(1)) $(this).addClass('active');
			})
		}
	}
	sprawdzenieRozmiaru('resize');
	resize();
	
	$('.part').addClass('hide');
	$('#portfolio').find('li').addClass('hide');
	$('#info').find('.tri span').addClass('oh');
	$('body, html').click(function() { navInfoActive('mice'); })
	
	$('#welcome').find('.part').removeClass('hide').find('.d').click(function(e) { changeSection('next'); e.preventDefault(); });
	
	$('#details').off('click', '.box').on('click','.box', function() {
		zmianaBoxa('s',$(this).index());
		return false;
	})
	
	$('#portfolio').find('a').click(function() {
		var t = $(this);
		if(t.parent().is('.active')) {
			var link = t.attr('href');		
			letsAjax(link);	
		} else {
			var index = t.parent().index();
			slidePortfolio(null, index);
		}
		return false;
	});
	$('#timeline').find('a').click(function() {
		var t = $(this);
		var link = t.attr('href');
		var index = $('#portfolio').find('a[href="'+link+'"]').parent().index();
		var odleglosc = $('#details').position()
		slidePortfolio(null, index);
		scrolling = 1;
		$('body, html').stop().animate({scrollTop: odleglosc.top},750, function() {
			scrolling = 0;
			letsAjax(link);
		});
		return false;
	});
	
	
	$('#portfolio').find('.nav .arrow.next').click(function() { slidePortfolio('next'); })
	$('#portfolio').find('.nav .arrow.prev').click(function() { slidePortfolio('prev');	})
	
	$('#info').find('.triangle .shape span a').hover(function() {
		$(this).parents('.triangle').addClass('hover');		
	}, function() {		
		$(this).parents('.triangle').removeClass('hover');
	})
	$('#info').find('.triangle .text').hover(function() {
		$(this).parents('.triangle').addClass('hover');		
	}, function() {		
		$(this).parents('.triangle').removeClass('hover');
	})
	
	$('header').find('a').click(function() {
		var link = $(this).attr('name');
		if(link == 'welcome' && $('#details').is('.open')) {
			closeWork();
		}
		changeSection('special',link);
		return false;
	});
	$('body').mousedown(function(e){if(e.button==1)return false});
	
	$('#timeline').find('.belt li').prepend('<span class="kropka"></span><span class="linia"></span>');
	
	$('header').addClass('hide');

	$('#info').find('.more .triangle').click(function() {
		var target = $(this).attr('rel');
		slideAbout(null,target);
		return false;
	});
	$('#o').find('.tArrow span').click(function() {
		var target = $(this).attr('rel');
		slideAbout(null,target);
		return false;
	});
});
