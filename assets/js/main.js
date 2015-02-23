$(function() {
  // DEFINE GLOBAL VARIABLES

  // DEFINE FUNCTIONS
  function adjustHeaderHeight(){
    var windowHeight = $(window).height();
    $('.header-area').height(windowHeight);
  }

  // ON PAGE LOAD
  adjustHeaderHeight();

  // EVENT LISTENERS
  $( window ).resize(function(){
    adjustHeaderHeight();
  });
});
