let menu = document.querySelector("#header-mobile")
let openMenu = document.querySelector(".open")
let closeMenu = document.querySelector(".close")

openMenu.addEventListener("click", () => {
  menu.classList.toggle("header-mobile")
})