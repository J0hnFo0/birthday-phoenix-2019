/* Giftbox */

window.onload = function () {
  var merrywrap = document.getElementById("merrywrap");
  var box = merrywrap.getElementsByClassName("giftbox")[0];
  var okayButton = document.getElementById("okay-button");
  var step = 1;
  var stepMinutes = [
    2000,
    2000,
    4000,
    14000,
    2000];
  function init() {
    box.addEventListener("click", openBox, false);
    okayButton.addEventListener("click", startPhonixStory, false);
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
    }
    if (step === 5) {
      return
    }
    setTimeout(openBox, stepMinutes[step - 1]);
    step++;
  }

  init();

  setTimeout(typewriter, 12000)


}
/* Typewriter Effect */

// set up text to print, each item in array is new line
var aText = new Array(
  "Hallo Cemile, ich bin dein Freund.",
  "Möchtest du eine Geschichte hören?"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

const intro = new Array(
  "Hallo Cemile, ich bin dein Freund.",
  "Möchtest du eine Geschichte hören?"
);

function typewriter() {
  sContents = ' ';
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("typewriter");

  while (iRow < iIndex) {
    sContents += aText[iRow++] + '<br />';
  }
  destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}

var storyText = new Array(
  "Es war einmal ein Phönix.",
  "Der Phönix war stolz und stark und schön.",
  "Und als der Phönix sich aus der Asche erhob,",
  "wollte er fliegen.",
  "Doch es gab ein Problem....."
)

function startPhonixStory() {
  clearScreen()

  document.querySelector("body").innerHTML = phoenixStory;
  document.querySelector(".speaker").style.opacity = 1;
  document.querySelector(".speaker").style.transform = "translateX(-400px)";
  aText = storyText;
  typewriter();

  this.setTimeout(startPhoenixFlight, 1000); //12000
}

var phoenixStory = '    <div class="speaker">' +
  '      <img src="./images/speaker/bc2b8bcd7a1e98f.png" alt="speaker"/>' +
  '</div>' +
  '<div class="speaker-box">' +
  '<div id="typewriter"></div>' +
  '</div>'

function startPhoenixFlight() {
  clearScreen()

  document.querySelector("body").innerHTML = flyOfThePhoenix;
  /*   document.quer("typewriter").style.position = "absolute";
    document.getElementById("typewriter").style.left = "550px";
    document.getElementById("typewriter").style.top = "150px";
    atext = "!JHSDHKHJKHJKHKJH" */
  typewriter();
  this.setTimeout(makePhoenixDisapear, 1000)
}

var flyOfThePhoenix = '<div>' +
  '<img src="../images/phoenix/kisspng-phoenix-drawing-clip-art-phoenix-png-hd-5aa1fc542a9728.2890655215205653321745.png" class="phoenix fall--1">' +
  '    <div class="objects">' +
  '      <div class="object circle"></div>' +
  '      <div class="object square"></div>' +
  '      <div class="object diamond"></div>' +
  '      <div class="object circle"></div>' +
  '      <div class="object square"></div>' +
  '      <div class="object diamond"></div>' +
  '      <div class="object circle"></div>' +
  '      <div class="object square"></div>' +
  '      <div class="object diamond"></div>' +
  '      <div class="object circle"></div>' +
  '      <div class="object square"></div>' +
  '      <div class="object diamond"></div>' +
  '      <div class="object circle"></div>' +
  '      <div class="object square"></div>' +
  '      <div class="object diamond"></div>' +
  '    </div>' +
  '    <div class="full-water">' +
  '      <div class="water">' +
  '        <div class="splash splash--1"></div>' +
  '        <div class="splash splash--2"></div>' +
  '        <div class="splash splash--3"></div>' +
  '        <div class="splash splash--4"></div>' +
  '        <div class="splash splash--5"></div>' +
  '        <div class="splash splash--6"></div>' +
  '        <div class="splash splash--7"></div>' +
  '        <div class="splash splash--8"></div>' +
  '        <div class="splash splash--9"></div>' +
  '        <svg class="wobble" viewBox="0 0 841.9 73.5"><path id="trampoline" fill="#ED1C24" d="M851,79.5H-8V13.4c0,0,243,0,430,0s429,0,429,0V79.5z"></path><animate xlink href="#trampoline" attributeName="d" begin="5.2s" dur="1s" fill="freeze" keyTimes="0; 0.2; 0.5; 1" values="M851,79.5H-8V13.4c0,0,243,0,430,0s429,0,429,0V79.5z; M851,79.5H-8V13.4c0,0,243,10,430,10s429-10,429-10V79.5z; M851,79.5H-8V13.4c0,0,243-4,430-4s429,4,429,4V79.5z; M851,79.5H-8V13.4c0,0,243,0,430,0s429,0,429,0V79.5z;"></animate></svg></div>' +
  '    </div>' +
  '<div class="speaker-box">' +
  '<div id="typewriter"></div>' +
  '</div>' +
  '  </div>';

function makePhoenixDisapear() {
  clearScreen()

  document.querySelector("body").innerHTML = phoenixDisappear;
  this.setTimeout(askForHelp, 5000);
}

const phoenixDisappear = '<div class="ph-disappear">' +
  '<img src="../images/phoenix/kisspng-phoenix-drawing-clip-art-phoenix-png-hd-5aa1fc542a9728.2890655215205653321745.png" />' +
  '</div>'

function askForHelp() {
  clearScreen()

  document.querySelector("body").innerHTML = askHelp;
  document.querySelector("body").innerHTML = phoenixStory;
  document.querySelector(".speaker").style.opacity = 1;
  document.querySelector(".speaker").style.transform = "translateX(-400px)";
  typewriter()

  setTimeout(
    document.querySelector("body").innerHTML = helpButton, 5000
  )
}  

const askHelp = '    <div class="speaker">' +
'      <img src="./images/speaker/bc2b8bcd7a1e98f.png" alt="speaker"/>' +
'</div>' +
'<div class="speaker-box">' +
'<div id="typewriter"></div>' +
'</div>'

const helpButton = '<button id="okay-button" onClick="fireworks()">Ja,ich helfe dem Phönix!</button>';


function fireworks() {
  console.log("fireworks")
}
function clearScreen() {
  var e = document.querySelector("body");
  console.log("clearscreen")
  //e.firstElementChild can be used. 
  var child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}





// Phoenix 

// Canvas drawn
// https://codepen.io/Vaddo/pen/niGJw

// disappearing
// https://codepen.io/cgorton/pen/BYKLQd

// falling numbers
// https://codepen.io/ThibaultJanBeyer/pen/JKYPZZ