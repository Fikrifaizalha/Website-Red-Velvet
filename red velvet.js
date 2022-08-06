// <!-- <--------------- JS MY SONG MENU -------------->

var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

icon.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    icon.src = "musik/pause.png";
  } else {
    mySong.pause();
    icon.src = "musik/play.png";
  }
};

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
