function start(){

document.getElementById("music").play()

showPage("languages")

createLanguages()

}

function showPage(id){

document.querySelectorAll("section")
.forEach(s=>s.style.display="none")

document.getElementById(id).style.display="flex"

}

/* birthday languages */

const languages=[

"Happy Birthday 🎂",
"Janamdin Mubarak 🎉",
"Feliz Cumpleaños 🎈",
"Bon Anniversaire 💐",
"Alles Gute zum Geburtstag 🎁",
"Buon Compleanno ❤️",
"Otanjoubi Omedetou 🎀",
"Saeng-il Chukha Hamnida 🎊"

]

function createLanguages(){

const container=document.getElementById("languageContainer")

languages.forEach(text=>{

let div=document.createElement("div")

div.className="lang"

div.innerText=text

div.style.left=Math.random()*80+"vw"

container.appendChild(div)

})

}

/* reasons */

const reasons=[

"Your smile fixes my worst days",
"Your laugh is my favorite sound",
"You make ordinary moments magical",
"You understand me without words",
"You make life more colorful",
"You inspire me to be better",
"Talking to you feels like home",
"You make the future exciting",
"You bring warmth wherever you go",
"Because you are Shruti ❤️"

]

reasons.forEach(text=>{

let div=document.createElement("div")

div.className="reason"

div.innerText=text

div.style.left=Math.random()*70+"vw"

document.getElementById("reasons").appendChild(div)

})

/* image viewer */

function openImage(src){

document.getElementById("viewer").style.display="flex"

document.getElementById("viewerImg").src=src

}

function closeViewer(){

document.getElementById("viewer").style.display="none"

}

/* envelope */

function openLetter(){

document.querySelector(".envelope").style.display="none"

document.getElementById("letterText").style.display="block"

}

/* proposal */

function moveNo(){

const btn=document.getElementById("noBtn")

btn.style.top=Math.random()*200+"px"

btn.style.left=Math.random()*200+"px"

}

function yes(){

document.getElementById("noBtn").style.display="none"

document.getElementById("result").innerText=
"You just made me the happiest person ❤️"

}
