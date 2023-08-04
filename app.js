// Functions
const randomIndex = num => Math.floor(Math.random() * num);
const randomMessage = lst => lst[randomIndex(lst.length)];
const concatenateAll = (str1, str2, str3) => `${str1} ${str2}... then, suddenly, ${str3}`;

// DOM Elements
let messageButton = document.getElementById('showMsgBtn');
let asciiButton = document.getElementById('showAsciiBtn');
let message = document.getElementById('msg');   

// Global Variables
const firstSet = ['The red jet', 'The big human', 'The chunky doggo', 'The lazy cat'];
const secondSet = ['flies', 'eats', 'barks', 'relaxed'];
const lastSet = ['it crashed', 'a pig breaks its house', 'Gustavo The Cocodrille comes to eat it', 'it farted'];
const asciiIsCool = "  __  ____  ___ __ __    __ ____     ___ __   __  __   \r\n \/ _\\\/ ___)\/ __(  (  )  (  \/ ___)   \/ __\/  \\ \/  \\(  )  \r\n\/    \\___ ( (__ )( )(    )(\\___ \\  ( (_(  O (  O \/ (_\/\\\r\n\\_\/\\_(____\/\\___(__(__)  (__(____\/   \\___\\__\/ \\__\/\\____\/";

// Event Handlers
function returnMessage() { message.innerHTML = concatenateAll(randomMessage(firstSet), randomMessage(secondSet), randomMessage(lastSet)); }

// Event Listeners
messageButton.addEventListener('click', returnMessage);