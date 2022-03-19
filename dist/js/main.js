// dom select selements 

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');


const navItems = document.querySelectorAll(".nav-item");
console.log("navitens ", navItems)

// set initial of menu 

let showMenu = false;

menuBtn.addEventListener('click',togglemenu)

function togglemenu(){
  if(!showMenu){
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(function(item) {item.classList.add('show')});

    // set menu state
    showMenu = true;
  }else{
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // set menu state
    showMenu = false;
  }
}


