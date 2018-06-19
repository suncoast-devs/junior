const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

const playerWinsOne = () => {
  const playerText = $('.scores .player').textContent
  const playerScore = parseInt(playerText) + 1
  $('.scores .player').textContent = playerScore
  if (playerScore === 2) {
    gameOver(true)
  }
}

const computerWinsOne = () => {
  const computerText = $('.scores .computer').textContent
  const computerScore = parseInt(computerText) + 1
  $('.scores .computer').textContent = computerScore
  if (computerScore === 2) {
    gameOver(false)
  }
}

const playerWinsBout = () => {
  const playerBoutText = $('.overall .player').textContent
  const playerBoutScore = parseInt(playerBoutText) + 1
  $('.overall .player').textContent = playerBoutScore
  if (playerBoutScore === 2) {
   matchOver(true)
  }
}

const computerWinsBout = () => {
  const computerBoutText = $('.overall .computer').textContent
  const computerBoutScore = parseInt(computerBoutText) + 1
  $('.overall .computer').textContent = computerBoutScore
  if (computerBoutScore === 2) {
   matchOver(false)
  }
}
// Button Clicking fun!
const handleButtonClick = (event) => {
  const player = event.target.className
  const computer = getComputerMove()
  $('figure.player img').src = `images/${player}.svg`
  $('figure.computer img').src = `images/${computer}.svg`

  // Rules for player to win
  if (player === 'scissors' && computer === 'paper' || player === 'paper' && computer === 'rock' || player === 'rock' && computer === 'scissors') {
    console.log('player wins')
    $('figure.player').className = 'player win' 
    $('figure.computer').className = 'computer lose' 
    playerWinsOne()
  }

  // Rules for computer to win
  if (computer === 'scissors' && player === 'paper' || computer === 'paper' && player === 'rock' || computer === 'rock' && player === 'scissors') {
    console.log('computer wins')
    $('figure.computer').className = 'computer win' 
    $('figure.player').className = 'player lose' 
    computerWinsOne()
  }
  // Rules for a tie

  if (computer === player ) {
    console.log('TIE!')
    $('figure.computer').className = 'computer draw' 
    $('figure.player').className = 'player draw'
  }

  // HINT: Check for win, lose or draw, then call `gameOver()` eventually.
}

const getComputerMove = () => {
  const moves = ['paper', 'scissors', 'rock']
  return moves[Math.floor(Math.random() * moves.length)]
}

// HINT: Try calling `gameOver(true)` in the console.
const gameOver = (playerDidWin) => {
  if (playerDidWin) {
    $('.dialog h3').textContent = 'You won the bout!'
    playerWinsBout()
  } else {
    $('.dialog h3').textContent = 'You lost the bout!'
    computerWinsBout()
  }
  $('body').className = 'modal'
}

const matchOver = (playerDidWin) => {
  if (playerDidWin) {
    $('.dialog h3').textContent = 'You won the match!'
  } else {
    $('.dialog h3').textContent = 'You lost the match!'
  }
  $('body').className = 'modal'
}

const resetGame = () => {
  // TODO: Probably need to do more to reset the game here...
  $('.scores .player').textContent = 0
  $('.scores .computer').textContent = 0
  $('figure.player img').src = 'images/unknown.svg'
  $('figure.computer img').src = 'images/unknown.svg'
  $('body').className = ''
}

const resetMatch = () => {
  $('.overall .player').textContent = 0
  $('.overall .computer').textContent = 0
  $('figure.player img').src = 'images/unknown.svg'
  $('figure.computer img').src = 'images/unknown.svg'
  $('body').className = ''
}

const main = () => {
  const buttons = $$('.player-input button')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButtonClick)
  }
  $('.dialog button').addEventListener('click', resetGame)
}
//const playerTextScore = $('.scores .player').textContent
//const playerScore = parseInt(playerTextScore) + 1
//$('.scores .player').textContent = playerScore
document.addEventListener('DOMContentLoaded', main)