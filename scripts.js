$(document).ready(function() {
  $("#search").click(function() {
    $("#input").animate({
      paddingTop: '0'
    }, getResults);
  });

  function getResults() {
    var searchInput = $("#searchInput").val();
    var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchInput + "&callback=?";
    $.ajax({
      type: "GET",
      url: api,
      dataType: "json",
      success: function(data) {
      },
    }); // End AJAX
  } // End getResults function
}); // End document ready function
