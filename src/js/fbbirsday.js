"use strict" 
function anchoreDropdown() {
  document.getElementById("dropdownlist").classList.toggle("show");
};
  
function questDropdown() {
  document.getElementById("quest-dropdownlist").classList.toggle("show");
};
  
function animationDropdown() {
  document.getElementById("animation-dropdownlist").classList.toggle("show");
};

 
(function(){
  @@include('popup.js')
}());

