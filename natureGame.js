const bgm = new Audio('./assests/bgm.mp3');
const flipAudio = new Audio('./assests/flip.mp3');
bgm.play();
bgm.loop = true;
bgm.volume = 0.4;

const cards = document.querySelectorAll(".card");
const timeTag = document.querySelector(".time b");
const flipsTag = document.querySelector(".flips b");
const refreshBtn = document.querySelector(".details button");

let maxTime = 40;
let timeLeft = maxTime;
let matchedCard = 0;
let flips = 0;
let disableDeck = false;
let isPlaying = false;
let cardOne, cardTwo, timer;

function initTimer() {
  if (timeLeft <= 0) {
    return clearInterval(timer);
  }
  timeLeft--;
  timeTag.innerText = timeLeft;
  if (timeLeft == 0) {
    location.href = "natureResult.html";
  }
}

function flipCard({ target: clickedCard }) {
  flipAudio.play();
  flipAudio.volume = 0.2;
  if (!isPlaying) {
    isPlaying = true;
    timer = setInterval(initTimer, 1000);
  }
  if (clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
    flips++;
    flipsTag.innerText = flips;
    clickedCard.classList.add("flip");
    if (!cardOne) {
      return (cardOne = clickedCard);
    }
    cardTwo = clickedCard;
    disableDeck = true;
    let cardOneImg = cardOne.querySelector(".back-view img");
    let cardTwoImg = cardTwo.querySelector(".back-view img");
    matchCards(cardOneImg, cardTwoImg);
  }
}

function matchCards(img1, img2) {
  if (img1.src === img2.src) {
    matchedCard++;
    var score = 12.5 * matchedCard;
    sessionStorage.setItem("score", score);
    if (matchedCard == 8 && timeLeft > 0) {
      location.href = "natureResult.html";
      return clearInterval(timer);
    }

    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    cardOne = cardTwo = "";
    disableDeck = false;
  } else {
    setTimeout(() => {
      cardOne.classList.add("shake");
      cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
      cardOne.classList.remove("shake", "flip");
      cardTwo.classList.remove("shake", "flip");
      cardOne = cardTwo = "";
      disableDeck = false;
    }, 1200);
  }
}

function shuffleCard() {
  timeLeft = maxTime;
  flips = matchedCard = 0;
  cardOne = cardTwo = "";
  clearInterval(timer);
  timeTag.innerText = timeLeft;
  flipsTag.innerText = flips;
  disableDeck = isPlaying = false;

  let arr = [

    1, 2, 3, 4, 5, 6, 7, 8,
    1, 2, 3, 4, 5, 6, 7, 8
  ];

  arr.sort(() => Math.random() > 0.5 ? 1 : -1);

  cards.forEach((card, index) => {
    card.classList.remove("flip");
    let imgTag = card.querySelector(".back-view img");
    imgTag.src = `./assests/nature-${arr[index]}.png`;
    card.addEventListener("click", flipCard);
  });
}

shuffleCard();

refreshBtn.addEventListener("click", shuffleCard);

cards.forEach(card => {
  card.addEventListener("click", flipCard);
});



