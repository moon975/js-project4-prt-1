const bgImageEl = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  bgImageEl.style.opacity = 1 - window.pageYOffset / 900;
  bgImageEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";

}

// pageXOffset : Yatay kaydırma çubuğunun mevcut soldan kaydırma değerini verir.
// pageYOffset : Dikey kaydırma çubuğunun mevcut üstten kaydırma değerini verir.



