// Side Navigation JS Code
let menuBtn = document.querySelector(".menu-btn");
let cencelBtn = document.querySelector(".cencel-btn");
let navBar = document.querySelector(".navbar");
let body = document.querySelector("body");

 menuBtn.onclick = function(){
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    navBar.classList.add("active");
//   body.style.overflow = "hidden";
 }
 cencelBtn.onclick = function(){
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    navBar.classList.remove("active");
   //   body.style.overflow = "auto";
  
 } 
// Sticky Navigation Menu JS Code

let val;
let nav = document.querySelector("nav");
window.onscroll = function() {
   if(document.documentElement.scrollTop > 20 ){
      nav.classList.add("sticky");
   }
   else{
      nav.classList.remove("sticky");
   }
}

// Sid Navigation Menu Closed When Navigation Links Clicked
let navLinks = document.querySelectorAll(".menu li a");
for(var i=0;i<navLinks.length;i++)
{
   navLinks[i].addEventListener("click" , ()=>{
      menuBtn.style.opacity = "1";
      menuBtn.style.pointerEvents = "auto";
      navBar.classList.remove("active");
      body.style.overflow = "auto";
   });
}