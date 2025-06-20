const hamburgerIcon = document.querySelector(".hamburger-menu-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const crossIcon = document.querySelector(".cross-icon");
const showMoreMenu = document.querySelector("#show-more-menu");
const showProductMenu = document.querySelector("#show-product-menu");

hamburgerIcon.addEventListener("click", function () {
  console.log(hamburgerMenu.style.transform);
  hamburgerMenu.classList.add("show-hamburger-menu");
});

crossIcon.addEventListener("click", function () {
  hamburgerMenu.classList.remove("show-hamburger-menu");
});

showMoreMenu.addEventListener("mouseenter", function (e) {
  const ul = e.target.childNodes[5];
  ul.style.animation = "showUp 0.35s 1";
  ul.style.display = "block";
});

showMoreMenu.addEventListener("mouseleave", function (e) {
  const ul = e.target.childNodes[5];
  ul.style.display = "none";
});

showProductMenu.addEventListener("mouseenter", function (e) {
  const div = e.target.childNodes[5];
  div.style.animation = "showUp 0.35s 1";
  div.style.display = "flex";
});

showProductMenu.addEventListener("mouseleave", function (e) {
  const div = e.target.childNodes[5];
  div.style.display = "none";
});

// Initialize Lottie animation
document.addEventListener("DOMContentLoaded", function () {
  lottie.loadAnimation({
    container: document.getElementById("lottie"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "animation/animation.json", // Path to your Lottie JSON file
  });
});
