const menuBtn = document.querySelector('.menu_btn');
const navMenu = document.querySelector('.nav_menu');

menuBtn.addEventListener('click',()=>{
    navMenu.classList.toggle("active");
});

//process
document.addEventListener("DOMContentLoaded", () => {
  
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab_content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-target");

      contents.forEach(c => c.classList.remove("active"));
      tabs.forEach(t => t.classList.remove("active"));   

      tab.classList.add("active");

      const selected = document.getElementById(target);
      selected.classList.add("active");
    });
  });

});
