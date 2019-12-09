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
    12000,
  ];
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
      typewriter();
    }
    if (step === 5) {
      return
    }
    setTimeout(openBox, stepMinutes[step - 1]);
    step++;
  }

  init();



}
/* Typewriter Effect */

// set up text to print, each item in array is new line
var aText = new Array(
  "Hallo Cemile, ich heiße Tiko.",
  "Ich bin dein Freund.",
  "Möchtest du eine Geschichte hören?"
);

var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

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
  } iSpeed = 150;
}

function resetTypewriter() {
  iIndex = 0;
  iArrLength = aText[0].length;

  iTextPos = 0;
  sContents = '';
}

var startStoryText = new Array(
  "Es war einmal ein Phönix.",
  "Der Phönix war stolz und stark und schön,",
  "und erhob sich aus der Asche in die Lüfte.",
  "Doch als er fliegen wollte... gab es ein Problem."
)

const speaker = '<div class="speaker speaker-visible">' +
  '<img src="./images/speaker/bc2b8bcd7a1e98f.png" alt="speaker"/>' +
  '</div>' +
  '<div class="speaker-box">' +
  '<div id="typewriter">' +
  '</div>'

function startPhonixStory() {
  clearScreen()
  document.querySelector("body").innerHTML = speaker;

  aText = startStoryText;
  resetTypewriter()
  typewriter();

  setTimeout(startPhoenixFlight, 13000); //12000
}

var storyWhileFlight = new Array(
  "Der Phönix konnte nicht fliegen",
  "denn er war nicht.......",
  "vollständig."
)

function startPhoenixFlight() {
  clearScreen()
  document.querySelector("body").innerHTML = flyOfThePhoenix;

  aText = storyWhileFlight;
  resetTypewriter()
  typewriter();

  this.setTimeout(makePhoenixDisapear, 10000)
}

var flyOfThePhoenix = '<div>' +
  '<img src="../images/phoenix/kisspng-phoenix-drawing-clip-art-phoenix-png-hd-5aa1fc542a97282890655215205653321745.png" class="phoenix fall--1">' +
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
  '</div>';

const phoenixDisappear = '<div class="ph-disappear">' +
  '<img src="../images/phoenix/kisspng-phoenix-drawing-clip-art-phoenix-png-hd-5aa1fc542a9728.2890655215205653321745.png" />' +
  '</div>'

function makePhoenixDisapear() {
  clearScreen()

  document.querySelector("body").innerHTML = phoenixDisappear;
  setTimeout(callForHelp, 8000);
}

var helpText = new Array(
  "Kannst du dem Phönix helfen?",
)

const helpButton =
  '<button id="help-button" onclick="startFireworks()">' +
  'Jaaa, ich helfe dem Phönix!' +
  '</button>'

function callForHelp() {
  clearScreen()
  document.querySelector("body").innerHTML = speaker;

  aText = helpText;
  resetTypewriter();
  typewriter();

  document.body.innerHTML += '<div class="b-box"></div>'
  document.querySelector(".b-box").innerHTML = helpButton;
  setTimeout(
    document.querySelector("#help-button").style.opacity = "1"
    , 10000
  )
}

const juhu = new Array(
  "Juhuuu, du hilfst dem Phönix!",
  "Dann möchte ich dir auch dabei helfen,",
  "in dem ich dir einen Gutschein...",
  "in Höhe von 50% der Tattookosten schenke!!!",
  "Herzlichen Glückwunsch und alles alles Gute zum Geburtstag!",
  "Ich liebe Dich mein Schatz! :-)"
)

function startFireworks() {
  clearScreen();
  document.querySelector("body").innerHTML = fireworkSpeaker;
  aText = juhu;
  typewriter()
  document.body.innerHTML += '<div class="b-text"></div>'
  document.querySelector(".b-text").innerHTML = icons;
}

const fireworkSpeaker =
  '<div>' +
  speaker +
  '<div class="pyro">' +
  '<div class="before"></div>' +
  '<div class="after"></div>' +
  '</div>' +
  '</div>'

const icons =
  '<div class="icons">' +
  '<div class="row">' +
  '<span>L</span>' +
  '<span>i</span>' +
  '<span>e</span>' +
  '<span>b</span>' +
  '<span>e</span>' +
  '<span>C</span>' +
  '<span>e</span>' +
  '<span>m</span>' +
  '<span>i</span>' +
  '<span>l</span>' +
  '<span>e</span>' +
  '</div>' +
  '<div class="row">' +
  '<span class="letter">a</span>' +
  '<span class="letter">p</span>' +
  '<span class="letter">p</span>' +
  '<span class="letter">H</span>' +
  '<span class="lett<er">y</span>' +
  '<span class="letter">B</span>' +
  '<span class="letter">i</span>' +
  '<span class="letter">r</span>' +
  '<span class="letter">t</span>' +
  '<span class="letter">h</span>' +
  '<span class="letter">d</span>' +
  '<span class="letter">a</span>' +
  '<span class="letter">y</span>' +
  '</div> ' +
  '</div>'

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


