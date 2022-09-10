let menu = document.querySelector("#header-mobile")
let openMenu = document.querySelector(".open")
let closeMenu = document.querySelector(".close")
// let btnHeader = document.querySelector(".btn-header")

openMenu.addEventListener("click", () => {
  menu.classList.toggle("header-mobile")
  document.querySelector(".btn-header").style.display = "block"
})