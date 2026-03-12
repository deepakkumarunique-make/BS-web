const music=document.getElementById("bgMusic")

function startJourney(){

music.play()

document.getElementById("intro").style.display="none"

document.getElementById("special").style.display="flex"

createHearts()

}

function nextSection(id){

document.querySelectorAll("section").forEach(s=>s.style.display="none")

document.getElementById(id).style.display="flex"

}

const reasons=[
"Your smile fixes my worst days",
"Your laugh is my favorite sound",
"You make ordinary moments magical",
"Talking to you feels like home",
"Your kindness is beautiful",
"You inspire me to be better",
"You make life more colorful",
"You understand me without words",
"You bring warmth everywhere",
"You make the future exciting",
"You are stronger than you think",
"You turn small moments into memories",
"Your happiness matters to me",
"You make silence comfortable",
"You make every day brighter",
"Your eyes tell beautiful stories",
"You make me smile randomly",
"You are incredibly special",
"You make life meaningful",
"Because you are Shruti ❤️"
]

function createHearts(){

const area=document.getElementById("heartArea")

for(let i=0;i<20;i++){

let heart=document.createElement("div")

heart.innerHTML="❤️"

heart.className="heart"

heart.style.left=Math.random()*100+"vw"

heart.style.top=Math.random()*80+"vh"

heart.onclick=()=>{

let r=Math.floor(Math.random()*reasons.length)

document.getElementById("reasonBox").innerText=reasons[r]

}

area.appendChild(heart)

}

}

const wishes=[
"May your dreams grow bigger this year",
"May happiness always follow you",
"May life surprise you with beautiful moments",
"May your smile never fade",
"May your heart stay peaceful",
"May your future be full of joy"
]

function generateWish(){

let r=Math.floor(Math.random()*wishes.length)

document.getElementById("wishText").innerText=wishes[r]

}

function openLetter(){

document.querySelector(".envelope").style.display="none"

document.getElementById("letterContent").style.display="block"

}

function moveNo(){

const btn=document.getElementById("noBtn")

btn.style.top=Math.random()*200+"px"

btn.style.left=Math.random()*200+"px"

}

function yesAnswer(){

document.getElementById("finalMessage").innerText="You just made my world the happiest ❤️"

}
