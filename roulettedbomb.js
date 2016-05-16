
var snd = new Audio("Explosion+1.wav"); // buffers automatically when created


var random = Math.floor(Math.random()*9);

var counter = 9;

function checkPosition(id){
  if (random===id) {
    document.getElementById("youwin").innerHTML ="You lose!";
    document.getElementById(id).innerHTML = '<img src="http://img3.wikia.nocookie.net/__cb20130805183122/clubpenguin/images/d/d0/Explode.png"/>';
    counter = 0;
    snd.play()
  }else {
    counter = counter-1;
    document.getElementById(id).innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Chicken_sombrero.gif"/>';
    if (counter===1) {
      document.getElementById("youwin").innerHTML ="You win!";
    }
  }
  document.getElementById("counter").innerHTML = counter;
}
