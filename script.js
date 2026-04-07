// Mobile Menu

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
nav.classList.toggle("active");
});


// Dark Mode

const darkMode = document.getElementById("darkModeToggle");

darkMode.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
darkMode.textContent="☀️";
}
else{
darkMode.textContent="🌙";
}

});


// Typing Animation

const typingText = document.querySelector(".typing");

const words = [
"Java Full Stack Developer",
"Frontend Developer",
"Java Developer",
"Web Developer"
];

let wordIndex = 0;
let letterIndex = 0;

function type() {

if(letterIndex < words[wordIndex].length){

typingText.textContent += words[wordIndex].charAt(letterIndex);

letterIndex++;

setTimeout(type,100);

}

else{

setTimeout(erase,1500);

}

}

function erase(){

if(letterIndex > 0){

typingText.textContent = words[wordIndex].substring(0,letterIndex-1);

letterIndex--;

setTimeout(erase,50);

}

else{

wordIndex++;

if(wordIndex >= words.length){
wordIndex = 0;
}

setTimeout(type,500);

}

}

document.addEventListener("DOMContentLoaded",function(){

if(words.length){
setTimeout(type,1000);
}

});