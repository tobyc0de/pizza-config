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
  document.getElementById("texttopping").textContent += "🧀";
}

function addPeppers() {
  document.getElementById("texttopping").textContent += "🌶️";
}

function addBroc() {
  document.getElementById("texttopping").textContent += "🥦";
}

function addGarlic() {
  document.getElementById("texttopping").textContent += "🧄";
}

function addPineapple() {
  document.getElementById("texttopping").textContent += "💩";
}

function confirmBanana() {
  confirm("Just ... no.");
}

function resetToppings() {
  document.getElementById("texttopping").textContent = "";
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
