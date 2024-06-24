const itemUrl = "https://www.klimaprofi.hu/fisher-uv-protect-200-legtisztito";

const strong = document.getElementsByTagName('strong');
for (let i = 0; i < strong.length; i++) {
  strong[i].style.color = "orange"
}

const param = document.getElementsByClassName('param');
for (let i = 0; i < param.length; i++) {
  param[i].style.fontSize = "1.2rem"
}

const fogyasztas = document.getElementById('fogyasztas');

fogyasztas.addEventListener("mouseover", showTooltip);
fogyasztas.addEventListener("mouseout", hideTooltip);
function showTooltip() {
  const tooltip = document.querySelector(".tooltip");
  tooltip.style.display = "block";
}
function hideTooltip() {
  const tooltip = document.querySelector(".tooltip");
  tooltip.style.display = "none";
}

function getCurrentURL () {
  return window.location.href
}
const myUrl = getCurrentURL()

if (window.location.href === itemUrl) {
  const price = document.getElementById('product-page-price');
  let newP = document.createElement('p');
  newP.innerText = 'Kupon akció';
  price.appendChild(newP);
}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

