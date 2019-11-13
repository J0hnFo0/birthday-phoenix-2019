/* Giftbox */

window.onload = function () {
  var merrywrap = document.getElementById("merrywrap");
  var box = merrywrap.getElementsByClassName("giftbox")[0];
  var step = 1;
  var stepMinutes = [2000, 2000, 4000, 4000];
  function init() {
    box.addEventListener("click", openBox, false);
  }
  function stepClass(step) {
    merrywrap.className = 'merrywrap';
    merrywrap.className = 'merrywrap step-' + step;
  }
  function openBox() {
    if (step === 1) {
      box.removeEventListener("click", openBox, false);
    }
    stepClass(step);
    if (step === 3) {
    }
    if (step === 4) {
      return;
    }
    setTimeout(openBox, stepMinutes[step - 1]);
    step++;
  }

  init();

}

// Phoenix 

// Canvas drawn
// https://codepen.io/Vaddo/pen/niGJw

// disappearing
// https://codepen.io/cgorton/pen/BYKLQd

// falling numbers
// https://codepen.io/ThibaultJanBeyer/pen/JKYPZZ