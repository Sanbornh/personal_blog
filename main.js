$( document ).ready(function() {

  function fill(elem, color) {
    $(elem).addClass('fill').addClass(color);
    $(elem).removeClass('empty');
  }

  function empty(elem) {
    $(elem).addClass('empty');
    $(elem).removeClass('fill');  
  }

  $('#blog-btn').hoverIntent(function() {
    fill(this, 'fill-blue');
  }, function() {
    empty(this);
  });

  $('#about-btn').hoverIntent(function(){
    fill(this, 'fill-red');
  }, function() {
    empty(this);
  });

  $('#projects-btn').hoverIntent(function(){
    fill(this, 'fill-green');
  }, function() {
      empty(this);
  });

})