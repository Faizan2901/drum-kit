
a=document.querySelectorAll(".drum");
for(var i=0;i<a.length;i++)
{
    a[i].addEventListener("click",handleClick);
}
document.addEventListener("keypress",function(event){
   makeSound(event.key);
   addAnimation(event.key);
});
function handleClick()
{
   var button=this.innerHTML;
   makeSound(button);
   addAnimation(button);
}

function makeSound(key){

  switch (key) {
    case "w":
        var tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
   case "a":
        var tom1=new Audio("sounds/crash.mp3");
        tom1.play();
        break;
  case "s":
      var tom1=new Audio("sounds/tom-3.mp3");
      tom1.play();
      break;
  case "d":
      var tom1=new Audio("sounds/snare.mp3");
      tom1.play();
      break;
  case "j":
      var tom1=new Audio("sounds/tom-2.mp3");
      tom1.play();
      break;
  case "k":
      var tom1=new Audio("sounds/kick-bass.mp3");
      tom1.play();
      break;
  case "l":
      var tom1=new Audio("sounds/tom-4.mp3");
      tom1.play();
      break;
    default:
      console.log(key);

}
}

function addAnimation(currentKey)
{
  var activeButton= document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
