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
    } else {
      pos = pos + 5;
      deg = deg + 25;
      car1.style.left = pos + "px";
      spin1.style.rotate = deg + "deg";
      spin2.style.rotate = deg + "deg";
    }
  }
}

function moveLogo() {
  var logo1 = document.getElementById("logoContainer");
  var pos = -300;
  var pos2 = 0;
  var pause = 0;
  var counter = 0;

  id = setInterval(frame, 1);
  function frame() {
    if (counter < 300) {
      pos++;
      counter++;
      logo1.style.top = pos + "px";
    }
    if (counter >= 300 && pause < 50) {
      pause++;
    }
    if (counter >= 300 && pause >= 50) {
      pos2++;
      counter++;
      logo1.style.top = "-" + pos2 + "px";
    }
    if (counter == 600) {
      moveCar();
    }
  }
}
