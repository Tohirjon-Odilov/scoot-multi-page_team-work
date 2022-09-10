let menu = document.querySelector("#header-mobile")
let openMenu = document.querySelector(".open")
let closeMenu = document.querySelector(".close")
let btnHeader = document.querySelector(".header__btn")

openMenu.addEventListener("click", () => {
  menu.classList.toggle("header-mobile")
  openMenu.classList.add("none")
  closeMenu.classList.add("block")
  // openMenu.style.display = 'none';
  // closeMenu.style.display = 'block';

  document.querySelector('.header__btn').style.left = '0px'
})

closeMenu.addEventListener("click", () => {
  menu.classList.toggle("header-mobile")
  openMenu.classList.remove("none")
  closeMenu.classList.remove("block")
  // openMenu.style.display = 'block';
  // closeMenu.style.display = 'none';
  document.querySelector('.header__btn').style.left = '-320px'
})


// onclick = ""

