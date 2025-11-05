const menuBtn = document.querySelector('.menu_btn');
const navMenu = document.querySelector('.nav_menu');

menuBtn.addEventListener('click',()=>{
    navMenu.classList.toggle("active");
});