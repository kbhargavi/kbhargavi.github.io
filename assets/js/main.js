$(function() {
  // DEFINE GLOBAL VARIABLES

  // DEFINE FUNCTIONS
  function adjustHeaderHeight(){
    var windowHeight = $(window).height();
    $('.header-area').height(windowHeight);
  }

  function verticalAlignProjectInfo(){
    $('.project').each( function(index, element){
      var $element = $(element);
      var $inner = $element.find('.inner');
      $inner.css({
        paddingTop: ($element.height() - $inner.height()) * 0.5
      });
    });
  }

  // ON PAGE LOAD
  adjustHeaderHeight();
  verticalAlignProjectInfo();

  // EVENT LISTENERS
  $( window ).resize(function(){
    adjustHeaderHeight();
  });
});
