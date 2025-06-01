const images = ["1.png", "3.png", "4.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

const myImage = (document.body.style.backgroundImage = `url(${bgImage.src})`);
const repeat = (document.body.style.backgroundRepeat = "no-repeat");
const position = (document.body.style.backgroundPosition = "center");
const size = (document.body.style.backgroundSize = "cover");
