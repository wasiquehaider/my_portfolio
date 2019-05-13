// SPLIT SCREEN
// document.addEventListener("DOMContentLoaded", function() {
//   let wrapper = document.getElementById("wrapper");
//   let topLayer = wrapper.querySelector(".top");
//   let handle = wrapper.querySelector(".handle");
//   let skew = 0;
//   let delta = 0;

//   if (wrapper.className.indexOf("skewed") != -1) {
//     skew = 1000;
//   }

//   wrapper.addEventListener("mousemove", function(e) {
//     delta = (e.clientX - window.innerWidth / 2) * 0.5;

//     handle.style.left = e.clientX + delta + "px";

//     topLayer.style.width = e.clientX + skew + delta + "px";
//   });
// });

//Menu Toggle

// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}

// SKILL SET

$(document).ready(function() {
  $(".html").animate({ width: "90%" }, 2000);
  $(".css").animate({ width: "85%" }, 2000);
  $(".js").animate({ width: "75%" }, 2000);
  $(".react").animate({ width: "70%" }, 2000);
  $(".node").animate({ width: "50%" }, 2000);
  $(".jquery").animate({ width: "70%" }, 2000);
  $(".android").animate({ width: "65%" }, 2000);
});

// SCROLL TO TOP

$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {
    // If page is scrolled more than 50px
    $("#return-to-top").fadeIn(200); // Fade in the arrow
  } else {
    $("#return-to-top").fadeOut(200); // Else fade out the arrow
  }
});
$("#return-to-top").click(function() {
  // When arrow is clicked
  $("body,html").animate(
    {
      scrollTop: 0 // Scroll to top of body
    },
    500
  );
});
