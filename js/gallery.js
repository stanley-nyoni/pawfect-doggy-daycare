const images = document.querySelectorAll('.single-img img');
const closeBtn = document.querySelector('.displayed-img-container i');
const displayedImg = document.querySelector('.displayed-img img');
const displayedImgcontainer = document.querySelector('.displayed-img-container');

images.forEach(image => {
    image.addEventListener('click', function(){
        displayedImgcontainer.classList.add('active');
        displayedImg.src = image.src; 
    })

    closeBtn.addEventListener('click', function(){
        displayedImgcontainer.classList.remove('active');
        displayedImg.src = " ";
    })
    
});
//Menu Toggle
const toggleBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggleBtn.addEventListener('click', function(){
    nav.classList.toggle('active')
})