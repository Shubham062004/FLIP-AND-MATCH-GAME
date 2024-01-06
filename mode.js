// CODER THEME PAGE
const coderPlay = document.getElementById('coder');

coderPlay.onclick = () =>{
    location.href = "./coderGame.html";
}

// ZOMBIE THEME PAGE
const zombiePlay = document.getElementById('zombie');

zombiePlay.onclick = () =>{
    location.href = "./zombieGame.html";
}

// GAME THEME PAGE
const gamePlay = document.getElementById('game');

gamePlay.onclick = () =>{
    location.href = "./gameGame.html";
}

// NATURE THEME PAGE
const naturePlay = document.getElementById('nature');

naturePlay.onclick = () =>{
    location.href = "./natureGame.html";
}

// audio
const bgmAudio = new Audio('./assests/modes-bgm.mp3')
bgmAudio.play()
