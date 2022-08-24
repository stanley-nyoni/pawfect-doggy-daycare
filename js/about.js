//Menu Toggle
const toggleBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggleBtn.addEventListener('click', function(){
    nav.classList.toggle('active')
})