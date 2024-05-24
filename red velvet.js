// <!-- <--------------- JS MY SONG MENU -------------->

// <!-- <--------------- JS HAMBURGER MENU -------------->


var MenuItems = document.getElementById("MenuItems");
var hamburger = document.getElementById("hamburger");
MenuItems.style.maxHeight = "0px";

// Fungsi untuk menyembunyikan menu ketika mengklik di luar menu
function hideMenu(event) {
  if (!MenuItems.contains(event.target) && event.target !== hamburger) {
    MenuItems.style.maxHeight = "0px";
  }
}

// Menambahkan event listener ke elemen dokumen
document.addEventListener("click", hideMenu);

// Mengatur event listener untuk tombol hamburger
hamburger.onclick = function () {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
};
hamburger.onclick = toggleMenu;


/////// 2 ////////////


var MenuItems = document.getElementById("MenuItems");
var hamburger = document.getElementById("hamburger");

// Function to show or hide the menu
function toggleMenu() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px"; // Show the menu
  } else {
    MenuItems.style.maxHeight = "0px"; // Hide the menu
  }
}

// Add event listener for hamburger button
hamburger.onclick = function () {
  toggleMenu(); // Call the function to show or hide the menu when the hamburger button is clicked
};

// Add event listener for each menu item
var menuLinks = document.querySelectorAll("#MenuItems a");
menuLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    toggleMenu(); // Call the function to hide the menu when a menu item is clicked
  });
});





window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
