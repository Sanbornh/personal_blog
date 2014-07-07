$( document ).ready(function() {

  function fill(elem, color) {
    $(elem).addClass('fill').addClass(color);
    $(elem).removeClass('empty');
  }

  function empty(elem) {
    $(elem).addClass('empty');
    $(elem).removeClass('fill');  
  }

  $('li').hoverIntent(function() {
    fill(this, 'fill-' + $(this).data('color'));
  }, function() {
    empty(this);
  });  

})