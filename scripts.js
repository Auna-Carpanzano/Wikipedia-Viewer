$(document).ready(function() {
  $("#search").click(function() {
    $("#input").animate({
      paddingTop: '0'
    }, getResults);
  });

}); // End document ready function
