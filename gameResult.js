const playAgain = document.getElementById('play-again')
const score = document.getElementById('score')
const win = document.getElementById('win')
const phrase = document.getElementById('phrases')
const lostAudio = new Audio('./assets/lost.mp3')
const winAudio = new Audio('./assets/win.mp3')

playAgain.onclick = () => {
    location.href = 'game.html'
    sessionStorage.removeItem('score')
}

var losePhrases = [
    "Better luck next time",
    "So Sad :(",
    "Oooh! Close",
    "Don't feel sad",
]

var winPhrases = [
    "Amazing!!",
    "Well played!",
    "Eureka!!!",
    "Bull's Eye!!",
]
var matchedCard = sessionStorage.getItem('score')
score.innerHTML = 'Your Score - ' + matchedCard + '%'

if(matchedCard == 100){
    winAudio.play()
    winAudio.volume = 0.4
    win.innerText = 'You Won!'
    phrase.innerText = winPhrases[Math.floor(Math.random() * 4)]
}
else{
    lostAudio.play()
    lostAudio.volume = 0.4
    win.innerText = 'You lost!'
    phrase.innerText = losePhrases[Math.floor(Math.random() * 4)]
}

document.getElementById('username').innerHTML = JSON.parse(localStorage.getItem('username'))