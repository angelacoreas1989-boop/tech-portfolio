const text = "Building my future in tech...";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 80);
  }
}

window.onload = typeEffect;
