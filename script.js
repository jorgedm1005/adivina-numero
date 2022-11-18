let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0

const scoreField = document.querySelector('.score')
const highScoreField = document.querySelector('.highscore')
const guessField = document.querySelector('.guess')
const numberField = document.querySelector('.number')
const messageField = document.querySelector('.message')
const body = document.querySelector('body')
const againButton = document.querySelector('.again')

function displayMessage(msg) {
  messageField.textContent = msg
}

againButton.addEventListener('click', () => {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1
  displayMessage('Start guessing...')
  scoreField.textContent = score
  numberField.textContent = '?'
  guessField.value = ''
  numberField.style.width = '15rem'
  body.style.backgroundColor = '#222'
})

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(guessField.value)
  if (!guess) displayMessage('⛔️ ¡Introduce un número!')
  else if (guess === secretNumber) {
    displayMessage('🎉 ¡Correcto! 🎉')
    body.style.backgroundColor = '#60b347'
    numberField.textContent = secretNumber
    if (score > highscore) {
      highscore = score
      highScoreField.textContent = highscore
    }
    // TODO: visualizar el número, cambiar estilos
    // propiedad style y notacion estilos en camelCase
    // ej: background-Color -> backgroundColor
  } else if (score > 1) {
    displayMessage(guess > secretNumber ? '📈 ¡Demasiado alto!' : '📉 ¡Demasiado bajo!')
    score -= 1
    scoreField.textContent = score
  } else {
    displayMessage('💥 ¡Has perdido!')
    scoreField.textContent = 0
  }
})
