/*? no js js needed from me */

// Toggle kelas active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika Hamburger menu di klik
document.querySelector("#hamb-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klil diluar sidebar
const menu = document.querySelector('#hamb-menu')

document.addEventListener('click', function(e){
  if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
})
