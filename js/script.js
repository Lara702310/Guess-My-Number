

//  State ==========================================
let secretNumber = generateSecret();
let score        = 20;
let highscore    = 0;


const secretEl   = document.querySelector('.secret-number');
const messageEl  = document.querySelector('.result-message');
const inputEl    = document.querySelector('.btn--input-number');
const checkBtn   = document.querySelector('.btn--check');
const againBtn   = document.querySelector('.btn--again');
const scoreEl    = document.querySelector('.score--current');
const highEl     = document.querySelector('.score--high');
const secretBoxEl  = document.querySelector('.secret-box');


function generateSecret() {
  return Math.trunc(Math.random() * 20) + 1;
}

function setMessage(text, cls) {
  messageEl.textContent = text;
  messageEl.className   = 'result-message' + (cls ? ` ${cls}` : '');
}

function setScore(val) {
  score        = val;
  scoreEl.textContent = score;
}

function endGame(won) {
  checkBtn.disabled = true;
  inputEl.disabled  = true;

  if (won) {
    document.body.style.backgroundColor  = '#1a3a1a';
    secretEl.textContent                 = secretNumber;
    secretEl.style.color                 = '#0d0769';
    secretBoxEl.style.backgroundColor    = '#378618';


    if (score > highscore) {
      highscore            = score;
      highEl.textContent   = highscore;
    }
  }
}

//  Check =====================================
checkBtn.addEventListener('click', () => {
  const guess = Number(inputEl.value);

  // No input
  if (!guess) {
    setMessage(' No number!');
    return;
  }

  // Out of range
  if (guess < 1 || guess > 20) {
    setMessage(' Enter 1–20!');
    return;
  }

  // Correct
  if (guess === secretNumber) {
    setMessage(' Correct Number!', 'correct');
    endGame(true);
    return;
  }

  // Wrong guess
  if (score > 1) {
    setMessage(guess > secretNumber ? ' Too high!' : ' Too low!');
    setScore(score - 1);
  } else {
    setMessage(' You lost the game!', 'lost');
    setScore(0);
    secretEl.textContent = secretNumber;
    endGame(false);
  }
});

//  Again btn  =========================================
againBtn.addEventListener('click', () => {
  secretNumber              = generateSecret();
  secretEl.textContent      = '?';
  secretEl.style.color      = '';
  setScore(20);
  setMessage('Start guessing...');
  messageEl.className       = 'result-message';
  inputEl.value             = '';
  inputEl.disabled          = false;
  checkBtn.disabled         = false;
  secretBoxEl.style.backgroundColor = '';
  document.body.style.backgroundColor = '';
});
