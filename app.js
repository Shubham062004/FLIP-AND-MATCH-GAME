// Move to intro page
const startBtn = document.getElementById('button');

startBtn.onclick = () =>{
    location.href = "introduction.html";
}

const bgmAudio = new Audio('./assests/index-instr-bgm.mp3')
bgmAudio.play()
