$( document ).ready(function() {

  $(window).scroll(function(){
    $('#info1').animate({ opacity:'1'}, 1500);
    $('#info2').animate({ opacity:"1"},2500);
    $('#info3').animate({ opacity:"1"},3000);
    $(".fas").animate({opacity:'1'},1500);
    $(".far").animate({opacity:'1'},1500)
    $('#section2').animate({opacity: '1'},3500 );
    $("#img-profile").animate({left:10, opacity:"1"}, 1500);
    $("#card-box").animate({left:10, opacity:'1'},1500)
  
  });

    
var weatherButton=  $("<a>").text('GitHub  ').addClass("btn btn-success hide");
    weatherButton.attr('href', 'https://github.com/tommyboone/Weather_Dashboard')

var weatherPage = $("<a>").text("Website").addClass("btn btn-success hide");
    weatherPage.attr('href', "https://tommyboone.github.io/Weather_Dashboard/")    

var plannerButton = $("<a>").text('GitHub ').addClass("btn btn-success hide");
    plannerButton.attr('href', 'https://github.com/tommyboone/Day_Planner');

var plannerPage = $("<a>").text("Website").addClass("btn btn-success hide");
    plannerPage.attr('href', "https://tommyboone.github.io/Day_Planner")


  $('#weatherDash').mouseenter(function(){
    $(weatherButton).removeClass('hide');
    $(weatherPage).removeClass('hide');
    // $(".weatherCol").append("Weather Dashboard ");
    $(".weatherCol").append(weatherButton, " ");
    $(".weatherCol").append(weatherPage);

  })
  $('#weatherDash').mouseleave(function(){
    $(weatherButton).addClass('hide');
    $(weatherPage).addClass('hide');
  })

  // $("#dayPlanner").mouseenter(function(){
  //   $(plannerButton).removeClass('hide');
  //   $(plannerPage).removeClass('hide');
  //   $('.plannerCol').append(plannerButton, ' ');
  //   $('.plannercol').append(plannerPage);
  // }



  
});
  
