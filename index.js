// your code here
$(function () {
  $("#number-chooser").on("submit", function (event) {
    event.preventDefault();
    $(".js-results").empty();
    const countTo = $(event.currentTarget).find("#number-choice").val();
    const results = [];
    for (let i = 1; i <= countTo; i++) {
      if (i % 15 === 0) {
        results.push(
          $("<div class='fizz-buzz-item fizzbuzz'><span>fizzbuzz</span></div>")
        );
      } else if (i % 5 === 0) {
        results.push(
          $("<div class='fizz-buzz-item buzz'><span>buzz</span></div>")
        );
      } else if (i % 3 === 0) {
        results.push(
          $("<div class='fizz-buzz-item fizz'><span>fizz</span></div>")
        );
      } else {
        results.push($(`<div class='fizz-buzz-item'><span>${i}</span></div>`));
      }
    }
    $(".js-results").append(results);
  });
});
