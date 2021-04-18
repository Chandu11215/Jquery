// $("h1").text("welcome");

// $("button").html("<em>Hey</em>");

// console.log($("img").attr("src"));

// $("a").attr("href", "https://www.yahoo.com");

// $("button").click(function() {
// $("h1").css("color", "purple");
// });


// $(document).keypress(function(event) {
// $("h1").text(event.key);
// });

$("button").on("click", function() {
$("h1").slideUp().slideDown().animate({opacity: 0.5});
});