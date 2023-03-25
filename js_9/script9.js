const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const popupContainer = document.querySelector('.popup-container');
const closeIcon = document.querySelector('.close-icon');

btn.addEventListener('click', () => {

  container.classList.add('active1');
  popupContainer.classList.remove('active2');
})

closeIcon.addEventListener('click', () => {

  container.classList.remove('active1');
  popupContainer.classList.add('active2');
})
























// // const containerEl = document.querySelector(".container");

// // const btnEl = document.querySelector(".btn");

// // const popupContainerEl = document.querySelector(".popup-container");

// // const closeIconEl = document.querySelector(".close-icon");

// // btnEl.addEventListener("click", () => {
// //   containerEl.classList.add("active1");
// //   popupContainerEl.classList.remove("active2");
// // });

// // closeIconEl.addEventListener("click", () => {
// //   containerEl.classList.remove("active1");
// //   popupContainerEl.classList.add("active2");
// // });