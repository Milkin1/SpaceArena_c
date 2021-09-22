"use strict"
const body = document.querySelector("body");
const html = document.querySelector("html");
const header = document.querySelector(".header");
const navBtn = document.querySelector(".nav__btn");

window.onload = function () {
  pagescroll();
};




function anchoreDropdown() {
  document.getElementById("dropdownlist").classList.toggle("show");
}

// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function (event) {
  if (!event.target.matches('.dropdown__link')) {
    var dropdowns = document.getElementsByClassName("content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function questDropdown() {
  document.getElementById("quest-dropdownlist").classList.toggle("show");
}

// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function (event) {
  if (!event.target.matches('.quest-dropdown__link')) {
    var dropdowns = document.getElementsByClassName("quest-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}