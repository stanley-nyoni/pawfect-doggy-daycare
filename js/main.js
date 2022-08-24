//Menu Toggle

const toggleBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggleBtn.addEventListener('click', function(){
    nav.classList.toggle('active')
})

//Intro Text - Auto Updating

let introText = document.querySelector('.intro-text');
const slogans = [
    'We care for your dogs more than ourselves',
    'Giving your dogs the care they deserve',
    'We prioritize dog\'s care',
    'Doggy care services just got even better',
    'Your trusted dog care services',
    'Our enthusiasm for dogs never stops',
    'The doggy care that rocks',
    'The ultimate road to happy dogs'
];

function updateText(){
    let newSlogan = Math.floor(Math.random()*slogans.length);
    introText.innerHTML = slogans[newSlogan];
}

setInterval(updateText, 5000);

//Review Slidder
//Cards
let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');
let card4 = document.getElementById('card4');
let card5 = document.getElementById('card5');
//Buttons

let btn1 = document.getElementById('nav1');
let btn2 = document.getElementById('nav2');
let btn3 = document.getElementById('nav3');
let btn4 = document.getElementById('nav4');
let btn5 = document.getElementById('nav5');


// Card Slidding Function

btn1.addEventListener('click', function(){
    card1.style.right = 0;
    btn1.style.backgroundColor = 'rgb(58, 3, 109)';
    card2.style.right = '-800px'
    btn2.style.backgroundColor = 'white';
    card3.style.right = '-800px';
    btn3.style.backgroundColor = 'white';
    card4.style.right = '-800px';
    btn4.style.backgroundColor = 'white';
    card5.style.right = '-800px';
    btn5.style.backgroundColor = 'white';
});

btn2.addEventListener('click', function(){
    card2.style.right = 0;
    card1.style.right = '400px'
    btn1.style.backgroundColor = 'white';
    btn2.style.backgroundColor = 'rgb(58, 3, 109)';
    card3.style.right = '-800px';
    btn3.style.backgroundColor = 'white';
    card4.style.right = '-800px';
    btn4.style.backgroundColor = 'white';
    card5.style.right = '-800px';
    btn5.style.backgroundColor = 'white';
});

btn3.addEventListener('click', function(){
    card3.style.right = 0;
    btn3.style.backgroundColor = 'rgb(58, 3, 109)'
    card1.style.right = '400px'
    btn1.style.backgroundColor = 'white';
    card2.style.right = '600px'
    btn2.style.backgroundColor = 'white';
    card4.style.right = '-800px';
    btn4.style.backgroundColor = 'white';
    card5.style.right = '-800px';
    btn5.style.backgroundColor = 'white';
    
});
btn4.addEventListener('click', function(){
    card4.style.right = 0;
    btn4.style.backgroundColor = 'rgb(58, 3, 109)'
    card1.style.right = '400px'
    btn1.style.backgroundColor = 'white';
    card2.style.right = '600px'
    btn2.style.backgroundColor = 'white';
    card3.style.right = '800px';
    btn3.style.backgroundColor = 'white';
    card5.style.right = '-800px';
    btn5.style.backgroundColor = 'white';

    
});
btn5.addEventListener('click', function(){
    card5.style.right = 0;
    btn5.style.backgroundColor = 'rgb(58, 3, 109)'
    card1.style.right = '400px'
    btn1.style.backgroundColor = 'white';
    card2.style.right = '600px'
    btn2.style.backgroundColor = 'white';
    card3.style.right = '800px';
    btn3.style.backgroundColor = 'white';
    card4.style.right = '1000px';
    btn4.style.backgroundColor = 'white';

    
});
