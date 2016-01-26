(function() {
  var sayHi;

  jQuery(function($) {
    return $('button.action').click(sayHi);
  });

  sayHi = function() {
    var count;
    count = ($(this).data('click-counter')) + 1;
    $(this).data('click-counter', count);
    return $(this).text('Press count: ' + count);
  };

}).call(this);
