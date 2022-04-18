var rButton = 0;


// moves the logoContainer from -300px to 0px
// pauses, then goes back to -300px
function moveLogo() {
  var logo1 = document.getElementById("logoContainer");
  var pos = -300;
  var pos2 = 0;
  var pause = 0;
  var counter = 0;

  id = setInterval(frame, 1);
  function frame() {
    if (counter < 300) {
      pos = pos + 4;
      counter = counter + 4;
      logo1.style.top = pos + "px";
    }
    if (counter >= 300 && pause < 100) {
      pause++;
    }
    if (counter >= 300 && pause >= 50) {
      pos2 = pos2 + 4;
      counter = counter + 4;
      logo1.style.top = "-" + pos2 + "px";
    }
    if (counter == 600) {
      clearInterval(id);
      moveCar();
    }
  }
}

//moves the car into the frame and rotates the wheels
//then slows down the movement and rotation
function moveCar() {
  var car1 = document.getElementById("carContainer");
  var spin1 = document.getElementById("wheel1");
  var spin2 = document.getElementById("wheel2");
  var pos = -700;
  var deg = 0;

  id = setInterval(frame, 1);
  function frame() {
    if (pos == 20) {
      clearInterval(id);
      moveText();
    }
    if (pos >= -100 && pos < 20) {
      pos = pos + 2;
      deg = deg + 12;
      car1.style.left = pos + "px";
      spin1.style.rotate = deg + "deg";
      spin2.style.rotate = deg + "deg";
    }

    if (pos < -100) {
      pos = pos + 5;
      deg = deg + 25;
      car1.style.left = pos + "px";
      spin1.style.rotate = deg + "deg";
      spin2.style.rotate = deg + "deg";
    }
  }
}

function moveText() {
  var txt1 = document.getElementById("text1");
  var pos = 700;
  var opa = 0;
  var counter = 0;
  id = setInterval(frame, 1);
  function frame() {
    if (pos > 600) {
      pos = pos - 10;
      opa = opa + 10;
      txt1.style.left = pos + "px";
      txt1.style.opacity = "0." + opa;
    }
    if (pos == 600 && counter == 0) {
      counter++;
      txt1.style.opacity = "1";
    }
    if (pos == 600 && counter < 100) {
      counter++;
    }
    if (pos == 600 && counter == 100) {
      clearInterval(id);
      moveText2();
    } 
  }
}

function moveText2() {
  var txt2 = document.getElementById("text2");
  var pos = 700;
  var opa = 0;
  var counter = 0;
  id = setInterval(frame, 1);

  function frame() {
    if (pos > 600) {
      pos = pos - 10;
      opa = opa + 10;
      txt2.style.left = pos + "px";
      txt2.style.opacity = "0." + opa;
    }
    if (pos == 600 && counter == 0) {
      counter++;
      txt2.style.opacity = "1";
    }
    if (pos == 600 && counter < 100) {
      counter++;
    }
    if (pos == 600 && counter == 100) {
      clearInterval(id);
      moveButton();
    } 
  }
}

function moveButton() {
  var btn = document.getElementById("button");

  var pos = 700;
  var opa = 0;
  var counter = 0;
  id = setInterval(frame, 1);

  function frame() {
    if (opa > 99 && counter == 0) {
      counter++;
      btn.style.opacity = "1";
    }
    if (opa > 99 && counter < 50) {
      counter++;
    }
    if (opa > 99 && counter == 50) {
      clearInterval(id);
      shakeButton();
    } else if (opa < 99) {
      pos = pos - 10;
      opa = opa + 10;
      btn.style.left = pos + "px";
      btn.style.opacity = "0." + opa;
    }
  }
}



function shakeButton() {
  var btn = document.getElementById("button");

  var pos = 600;
  var counter = 0;

  id = setInterval(frame, 1);

  function frame() {
    if (counter == 500) {
      clearInterval(id);
      fadeOut();
    }
    if (counter < 500) {
      counter = counter + 5;
    }
    if (counter == 10 || counter == 50 || counter == 90) {
      btn.style.left = 595 + "px";
    }

    if (
      counter == 20 ||
      counter == 40 ||
      counter == 60 ||
      counter == 80 ||
      counter == 100
    ) {
      btn.style.left = 600 + "px";
    }

    if (counter == 30 || counter == 70) {
      btn.style.left = 605 + "px";
    }
  }
}

function fadeOut() {
  var bnr = document.getElementById("darkContainer");
  var txt = document.getElementById("studenttext");
  var txt2 = document.getElementById("studentid");
  var counter = 0;
  bnr.style.top = 0 + "px";
  rButton = 1;
  id = setInterval(frame, 1);
  function frame() {
    if (counter < 10) {
      counter++;
      bnr.style.opacity = "0.0" + counter;
      txt.style.opacity = "0.0" + counter;
      txt2.style.opacity = "0.0" + counter;
    }
    if (counter >= 10 && counter < 90) {
      counter++;
      bnr.style.opacity = "0." + counter;
      txt.style.opacity = "0." + counter;
      txt2.style.opacity = "0." + counter;
    }
    if (counter == 90) {
      bnr.style.opacity = "0.90";
      txt.style.opacity = "0.90";
      txt2.style.opacity = "0.90";
      clearInterval(id);
      
    }
  }
}

function replay() {
var rButton = 0;

  var car1 = document.getElementById("carContainer");
  var dark = document.getElementById("darkContainer");

  var txt1 = document.getElementById("text1");
  var txt2 = document.getElementById("text2");
  var btn = document.getElementById("button");

  car1.style.left = -700 + "px";
  txt1.style.left = 950 + "px";
  txt2.style.left = 950 + "px";
  btn.style.left = 950 + "px";

  dark.style.top = -350 + "px";

  moveLogo();
}

function openLink(){
  if (rButton == 1){
    replay();
  
  }
  if (rButton == 0){
    window.open("http://www.volkswagen.co.nz", "_blank");
    
  }

}
  
 
  

