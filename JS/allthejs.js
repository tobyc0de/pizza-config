// DARKMODE
let lightmode = "light";
console.log(lightmode);

function makeItDark() {
  document.body.style.background =
    "linear-gradient(0.4turn, darkred, darkblue)";
  lightmode = "dark";
  console.log(lightmode);
  document.getElementById("darkbutton").style.display = "none";
  document.getElementById("lightbutton").style.display = "flex";
}

function makeItLight() {
  document.body.style.background =
    "linear-gradient(0.4turn, rgb(196, 0, 141), #70d6ff)";
  lightmode = "light";
  console.log(lightmode);
  document.getElementById("lightbutton").style.display = "none";
  document.getElementById("darkbutton").style.display = "flex";
}

// PIZZA CONFIGURATOR
function addCheese() {
  document.getElementById("texttopping").innerHTML += "🧀";
}

function addPeppers() {
  document.getElementById("texttopping").innerHTML += "🌶️";
}

function addBroc() {
  document.getElementById("texttopping").innerHTML += "🥦";
}

function addGarlic() {
  document.getElementById("texttopping").innerHTML += "🧄";
}

function addPineapple() {
  document.getElementById("texttopping").innerHTML += "💩";
}

function confirmBanana() {
  confirm("Just ... no.");
}

function resetToppings() {
  document.getElementById("texttopping").innerHTML = "";
}

// COOKIE BAR

document
  .getElementById("cookiebutton")
  .addEventListener("click", hideCookieBar);

function hideCookieBar() {
  document.getElementById("cookiemonster").style.visibility = "hidden";
}

function makeItDark() {
  document.body.style.background =
    "linear-gradient(0.4turn, darkred, darkblue)";
  lightmode = "dark";
  console.log(lightmode);
  document.getElementById("darkbutton").style.display = "none";
  document.getElementById("lightbutton").style.display = "flex";
}

function makeItLight() {
  document.body.style.background =
    "linear-gradient(0.4turn, rgb(196, 0, 141), #70d6ff)";
  lightmode = "light";
  console.log(lightmode);
  document.getElementById("lightbutton").style.display = "none";
  document.getElementById("darkbutton").style.display = "flex";
}
