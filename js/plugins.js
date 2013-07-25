// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

$('#ascensor').ascensor({
    ascensorName:'ascensor',
    childType: 'section',
    ascensorFloorName: ['buenos-aires-apps','como-participar','criterio-de-evaluacion'],
    time: 500,
    direction: "y",
    keyNavigation: true,
    overflow:"hidden",
    easing: "easeInOutQuint",
    queued: false
  })

/*function handleHammer(ev) {
    console.log(ev);
    // disable browser scrolling
    //ev.gesture.preventDefault();

    switch(ev.type) {

        case 'swipeup':
            this.next();
            ev.gesture.stopDetect();
            break;

        case 'swipedown':
            this.prev();
            ev.gesture.stopDetect();
            break;
        
    }
}
$('#ascensor').hammer().on("swipeup swipedown", handleHammer);*/