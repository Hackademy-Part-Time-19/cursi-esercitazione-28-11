function cambiaColore() {
  let paragrafi = document.getElementsByTagName("p");

  for (let i = 0; i < paragrafi.length; i++) {
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    let coloreRandom = "rgb(" + r + "," + g + "," + b + ")";
    paragrafi[i].style.color = coloreRandom;
  }
}

function grassetto() {
  let paragrafi = document.getElementsByTagName("p");
  for (let i = 0; i < paragrafi.length; i++) {
    paragrafi[i].style.fontWeight = "bold";
  }
}

function abracadabra() {
  let paragrafi = document.getElementsByTagName("p");

  for (let i = 0; i < paragrafi.length; i++) {
    if (paragrafi[i].style.display === "none") {
      paragrafi[i].style.display = "block";
    } else {
      paragrafi[i].style.display = "none";
    }
  }
}
