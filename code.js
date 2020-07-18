const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const container = document.querySelector(".container");
menu.addEventListener("click", onClick);

function onClick(e) {
  menu.classList.toggle("change");
  nav.classList.toggle("show");
  console.log(nav);
}

function menuShow() {
  nav.className = "show";
}
