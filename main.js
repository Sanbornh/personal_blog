$( document ).ready(function() {
  $('#blog-btn').hover(function(){
    $(this).addClass('fill').addClass('fill-blue');
    $(this).removeClass('empty');
  }, 
    function() {
      $(this).addClass('empty');
      $(this).removeClass('fill')
  });

  $('#about-btn').hover(function(){
    $(this).addClass('fill').addClass('fill-red');
    $(this).removeClass('empty');
  }, 
    function() {
      $(this).addClass('empty');
      $(this).removeClass('fill')
  });

  $('#projects-btn').hover(function(){
    $(this).addClass('fill').addClass('fill-green');
    $(this).removeClass('empty');
  }, 
    function() {
      $(this).addClass('empty');
      $(this).removeClass('fill')
  });

})