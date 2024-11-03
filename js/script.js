//Set current year
const yearEl = document.querySelector(".current-year");
yearEl.textContent = new Date().getFullYear();

//Mobile nav
const headerEl = document.querySelector(".header");
const navBtn = document.querySelector(".btn-mobile-nab");

navBtn.addEventListener('click', () => {
   headerEl.classList.toggle("mobile-nav-open");
});