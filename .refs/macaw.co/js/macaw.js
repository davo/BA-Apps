(function() {
  var $email = $('#email');
  var $response = $('#response');

  $('#signup').submit(function() {
    // update user interface
    $response.html('Sending…').addClass('is-sending');
    
    // Prepare query string and send AJAX request
    $.ajax({
      url: 'inc/store-address.php',
      data: 'ajax=true&email=' + escape($email.val()),
      success: function(msg) {
        switch(msg) {
          case '-1':
            $email.addClass('is-invalid');
            $response.html('Polly want a valid email address.').css('margin-top', '18px');
            break;
          case '1':
            $email.addClass('is-successful');
            $response.html('Thanks! We\'ll keep you informed.').css('margin-top', '18px');
            break;
          default:
            $email.addClass('is-invalid');
            if(/update\syour\sprofile/.test(msg)) {
              $response.css({
                'line-height': '1.38',
                'margin-top': 0
              });
            } else {
              $response.css('margin-top', '18px');
            }
            $response.html(msg).addClass('is-invalid');
            break;
        }
      }
    });

    return false;
  });
})();