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


    
var weatherButton=  $("<a>").text('GitHub  ').addClass("btn btn-success hide ");
    weatherButton.attr('href', 'https://github.com/tommyboone/Weather_Dashboard')

var weatherPage = $("<a>").text("Website").addClass("btn btn-success hide ");
    weatherPage.attr('href', "https://tommyboone.github.io/Weather_Dashboard/")    

var plannerButton = $("<a>").text('GitHub ').addClass("btn btn-success hide");
    plannerButton.attr('href', 'https://github.com/tommyboone/Day_Planner');

var plannerPage = $("<a>").text("Website").addClass("btn btn-success hide");
    plannerPage.attr('href', "https://tommyboone.github.io/Day_Planner")

var travelButton =  $("<a>").text('GitHub  ').addClass("btn btn-success hide travelButton");
    travelButton.attr('href', 'https://github.com/stevekindt/Project-1');

var travelPage = $("<a>").text("Website").addClass("btn btn-success hide travelPage");
    travelPage.attr('href', "https://stevekindt.github.io/Project-1/")    

var weatherSpan = $("<span>").text("Weather Dashboard ").addClass('hide');
var plannerSpan = $("<span>").text("Day Planner ").addClass('hide');
var travelSpan = $("<span>").text("Travel Master ").addClass('hide travelSpan');




  $('#weatherDash').mouseenter(function(){
    $('#weatherDash').css('opacity', '0.1');
    $(weatherButton).removeClass('hide');
    $(weatherPage).removeClass('hide');
    $(weatherSpan).removeClass('hide');
    var weatherContainer = $("<div>").append(weatherSpan, weatherButton, " ", weatherPage).addClass('weatherContainer');
    $(".weatherContainer").remove();
    $(".weatherCol").append(weatherContainer);
 


  });
  $('.weatherCol').mouseleave(function(){
    $('#weatherDash').css('opacity', '1');
    weatherButton.addClass('hide');
    weatherPage.addClass('hide');
    weatherSpan.addClass('hide');
  }); 
  
  $("#dayPlanner").mouseenter(function(){
    $("#dayPlanner").css('opacity', '0.2')
    $(plannerButton).removeClass('hide');
    $(plannerPage).removeClass('hide');
    $(plannerSpan).removeClass('hide');
    var plannerContainer = $("<div>").append(plannerSpan, plannerButton, " ", plannerPage).addClass('plannerContainer');
    $('.plannerCol').append(plannerContainer);

    
  });

  $('.plannerCol').mouseleave(function(){
    $('#dayPlanner').css('opacity', '1');
    plannerButton.addClass('hide');
    plannerPage.addClass('hide');
    plannerSpan.addClass('hide');
  }); 

  $("#travelMaster").mouseenter(function(){
    $("#travelMaster").css('opacity', '0.1');
    $(".travelButton").removeClass('hide');
    $(".travelPage").removeClass('hide');
    $(".travelSpan").removeClass('hide');
    var travelContainer = $("<div>").append(travelSpan, travelButton, " ", travelPage).addClass('travelContainer');
    $(".travelCol").append(travelContainer);

    
  });

  $('.travelCol').mouseleave(function(){
    $('#travelMaster').css('opacity', '1');
    $(".travelButton").addClass('hide');
    $(".travelPage").addClass('hide');
    $(".travelSpan").addClass('hide');
  }); 

 
  $('.carousel-inner').animate({opacity:'1'}, 1500);


 




  
});

  
