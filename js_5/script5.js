const navbarEl = document.querySelector(".navbar");

const bottomContainerEl = document.querySelector(".bottom-container");

// scrollY en üstten scroll u aşağıya indircikte scroll cubuğu ile en üst konumundaki arasındaki mesafe (artıyor). window.scrollY en üst de 0px.

// offsetHeight bir etiketin yüksekliğini veriyor. offsetHeight özelliği elementin, ana elementi içinde kapladığı yüksekliğini verir. navbarEl.offsetHeight = 54 mesela

// offsetTop etiketin en üstten kendisine (etiket) olan uzaklığı. offsetTop özelliği, elementin üstten temel elementine olan uzaklığı verir. 

// console.log(navbarEl.offsetHeight);

// console.log(bottomContainerEl.offsetTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50
  ) {
    navbarEl.classList.add("active");
  } else {
    navbarEl.classList.remove("active");
  }
});