const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click", () => {
    trailerContainerEl.classList.remove("active");
});

// currentTime özelliği, ses/video oynatmanın geçerli konumunu (saniye cinsinden) ayarlar veya döndürür.

// Pause() yöntemi, o anda oynatılmakta olan ses veya videoyu durdurur (duraklatır).

closeIconEl.addEventListener("click", () => {
    trailerContainerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
});