const hamburger = document.querySelector(".hamburger");
const navLists = document.querySelector(".nav-lists");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active"); 
  navLists.classList.toggle("active"); 
});
