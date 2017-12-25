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
        // Only show current output
        $("#output").html('');
        // [1][i] Title
        // [2][i] Description
        // [3][i] Link
        for (var i = 0; i < data[1].length; i++) {
          $("#output").prepend("<a href= " + data[3][i] + "><li>" + data[1][i] + "<p>" + data[2][i] + "</p></li></a>");
        }
        // CLEAR SEARCH BOX AFTER SEARCH
        $("#searchInput").val('');
      },
      error: function(errorMessage) {
        alert("Error");
      }
    }); // End AJAX
  } // End getResults function
}); // End document ready function
