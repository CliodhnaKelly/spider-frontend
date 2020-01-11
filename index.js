$(document).ready(function() {
  $("#search_button").click(function(e) {
    console.log(e)
    e.preventDefault();
    $.ajax({
      type: "GET",
      // data: 'json',
      url: 'https://localhost:8080/search?keyword=quiz',
      success: function(result) {
        console.log(result)
        $( ".city-name" ).text(result.name);
        $(".weather-main").text(
          result.weather &&
          result.weather[0] &&
          result.weather[0].main
        )
        $(".description").text(
          result.weather &&
          result.weather[0] &&
          result.weather[0].description
        )
      },
      error: function(result) {
        console.log('error', result)
        $(".error").text(result.error)
      }
    });
  });
});