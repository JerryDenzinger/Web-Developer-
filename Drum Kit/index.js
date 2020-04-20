// Using a normal Function
// document.querySelector("button").addEventListener("click",handleClick);

// function handleClick(){
//     alert("I got clicked!!");
// };

// Normal Use is but with anonimous Functions  this  would be just for the first button
// document.querySelector("button").addEventListener("click",function(){
//     alert("I got clicked!!");
// });

// NOW To detect all buttons Press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// To Detect Keyboard Press
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});



function makeSound(Key){
    switch (Key) {
        case "w":
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;
        case "a":
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;
        case "s":
          var audio = new Audio("sounds/snare.mp3");
          audio.play();
          break;
        case "d":
          var audio = new Audio("sounds/tom-1.mp3");
          audio.play();
          break;
        case "j":
          var audio = new Audio("sounds/tom-2.mp3");
          audio.play();
          break;
        case "k":
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
          break;
        case "l":
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
        default:
            console.log(Key);
      }
};


function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

};