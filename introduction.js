// move to user info page
const continueBtn = document.getElementById('btn');

continueBtn.onclick = () =>{
    location.href = "./user-info.html";
}

const bgmAudio = new Audio('./assests/index-instr-bgm.mp3')
bgmAudio.play()