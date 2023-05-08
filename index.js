
const btn = document.getElementById ('menu-btn');

btn.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open'); 
    document.body.classList.toggle('stop-scrolling');
     menu.classList.toggle('show-menu');
 }
  
 const menu = document.getElementById('mobile-menu');

