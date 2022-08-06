// <!-- <--------------- JS MY SONG MENU -------------->

// <!-- <--------------- JS HAMBURGER MENU -------------->

var MenuItems = document.getElementById("MenuItems");
var hamburger = document.getElementById("hamburger");
MenuItems.style.maxHeight = "0px";

hamburger.onclick = function () {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
};
