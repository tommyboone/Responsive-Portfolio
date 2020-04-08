$(document).ready(function () {
  $(window).scroll(function () {
    $("#info1").animate({ opacity: "1" }, 1500);
    $("#info2").animate({ opacity: "1" }, 2500);
    $("#info3").animate({ opacity: "1" }, 3000);
    $(".fas").animate({ opacity: "1" }, 1500);
    $(".far").animate({ opacity: "1" }, 1500);
    $("#section2").animate({ opacity: "1" }, 3500);
    $("#img-profile").animate({ left: 10, opacity: "1" }, 1500);
    $("#card-box").animate({ left: 10, opacity: "1" }, 1500);
  });

  var weatherButton = $("<a>")
    .text("GitHub  ")
    .addClass("btn btn-success hide ");
  weatherButton.attr("href", "https://github.com/tommyboone/Weather_Dashboard");

  var weatherPage = $("<a>").text("Website").addClass("btn btn-success hide ");
  weatherPage.attr("href", "https://tommyboone.github.io/Weather_Dashboard/");

  var plannerButton = $("<a>").text("GitHub ").addClass("btn btn-success hide");
  plannerButton.attr("href", "https://github.com/tommyboone/Day_Planner");

  var plannerPage = $("<a>").text("Website").addClass("btn btn-success hide");
  plannerPage.attr("href", "https://tommyboone.github.io/Day_Planner");

  var travelButton = $("<a>")
    .text("GitHub  ")
    .addClass("btn btn-success hide travelButton");
  travelButton.attr("href", "https://github.com/stevekindt/Project-1");

  var travelPage = $("<a>")
    .text("Website")
    .addClass("btn btn-success hide travelPage");
  travelPage.attr("href", "https://stevekindt.github.io/Project-1/");

  var weatherSpan = $("<span>").text("Weather Dashboard ").addClass("hide");
  var plannerSpan = $("<span>").text("Day Planner ").addClass("hide");
  var travelSpan = $("<span>")
    .text("Travel Master ")
    .addClass("hide travelSpan");
  var quizSpan = $("<span>").text("Quiz Game ").addClass("quizSpan");
  var teamSpan = $("<span>")
    .text("Team Profile Generator ")
    .addClass("teamSpan");
var devSpan= $("<span>").text("Developer Generator ").addClass("devSpan");


  var quizButton = $("<a>").text("GitHub ").addClass("btn btn-success hide");
  quizButton.attr("href", "https://https://github.com/kelly-bazella/Project-2");

  var quizPage = $("<a>").text("Website").addClass("btn btn-success hide");
  quizPage.attr("href", "https://gold-team-quiz.herokuapp.com/");

  var teamButton = $("<a>").text("GitHub ").addClass("btn btn-success hide");
  teamButton.attr(
    "href",
    "https://github.com/tommyboone/Template_Engine-Employee_Summary"
  );

  var devButton = $("<a>").text('GitHub ').addClass('btn btn-success hide');
    devButton.attr("href", "https://github.com/tommyboone/Developer-Profile-Generator");


  $("#quizPic").mouseenter(function () {
    $("#quizPic").css("opacity", "0.1");
    $(quizButton).removeClass("hide");
    $(quizPage).removeClass("hide");
    $(quizSpan).removeClass("hide");
    var quizContainer = $("<div>")
      .append(quizSpan, quizButton, " ", quizPage)
      .addClass("quizContainer");
    $(".quizContainer").remove();
    $(".quizCol").append(quizContainer);
  });

  $(".quizCol").mouseleave(function () {
    $("#quizPic").css("opacity", "1");
    quizButton.addClass("hide");
    quizPage.addClass("hide");
    quizSpan.addClass("hide");
  });

  $("#teamProfile").mouseenter(function () {
    $("#teamProfile").css("opacity", "0.1");
    $(teamButton).removeClass("hide");
    $(teamSpan).removeClass("hide");
    var teamContainer = $("<div>")
      .append(teamSpan, teamButton)
      .addClass("teamContainer");
    $(".teamContainer").remove();
    $(".teamCol").append(teamContainer);
  });

  $(".teamCol").mouseleave(function () {
    $("#teamProfile").css("opacity", "1");
    teamButton.addClass("hide");
    teamSpan.addClass("hide");
  });

  $("#devProfile").mouseenter(function(){
    $("#devProfile").css('opacity', '0.1');
    $(devButton).removeClass('hide');
    $(devSpan).removeClass('hide');
    var devContainer = $("<div>").append(devSpan, devButton).addClass('devContainer');
    $('.devContainer').remove();
    $('.devCol').append(devContainer);
  });

  $('.devCol').mouseleave(function(){
    $('#devProfile').css('opacity', '1');
    devButton.addClass('hide');
    devSpan.addClass('hide');
  })

  $("#weatherDash").mouseenter(function () {
    $("#weatherDash").css("opacity", "0.1");
    $(weatherButton).removeClass("hide");
    $(weatherPage).removeClass("hide");
    $(weatherSpan).removeClass("hide");
    var weatherContainer = $("<div>")
      .append(weatherSpan, weatherButton, " ", weatherPage)
      .addClass("weatherContainer");
    $(".weatherContainer").remove();
    $(".weatherCol").append(weatherContainer);
  });
  $(".weatherCol").mouseleave(function () {
    $("#weatherDash").css("opacity", "1");
    weatherButton.addClass("hide");
    weatherPage.addClass("hide");
    weatherSpan.addClass("hide");
  });

  $("#dayPlanner").mouseenter(function () {
    $("#dayPlanner").css("opacity", "0.2");
    $(plannerButton).removeClass("hide");
    $(plannerPage).removeClass("hide");
    $(plannerSpan).removeClass("hide");
    var plannerContainer = $("<div>")
      .append(plannerSpan, plannerButton, " ", plannerPage)
      .addClass("plannerContainer");
    $(".plannerContainer").remove();
    $(".plannerCol").append(plannerContainer);
  });

  $(".plannerCol").mouseleave(function () {
    $("#dayPlanner").css("opacity", "1");
    plannerButton.addClass("hide");
    plannerPage.addClass("hide");
    plannerSpan.addClass("hide");
  });

  $("#travelMaster").mouseenter(function () {
    $("#travelMaster").css("opacity", "0.1");
    $(".travelButton").removeClass("hide");
    $(".travelPage").removeClass("hide");
    $(".travelSpan").removeClass("hide");
    var travelContainer = $("<div>")
      .append(travelSpan, travelButton, " ", travelPage)
      .addClass("travelContainer");
    $(".travelCol").append(travelContainer);
  });

  $(".travelCol").mouseleave(function () {
    $("#travelMaster").css("opacity", "1");
    $(".travelButton").addClass("hide");
    $(".travelPage").addClass("hide");
    $(".travelSpan").addClass("hide");
  });

  $(".carousel-inner").animate({ opacity: "1" }, 1500);
});
