$(document).keypress(function(event){
    $("h1").text(event.key);
});

$("h1").on("mouseover",function(){
    $("h1").css("color","purple");
});

$("button").on("click",function(){
    $("h1").animate({opacity:0.5});
});