let score0 = document.getElementById('score--0')
let currentScore0 = document.getElementById('current--0')
let score1 = document.getElementById('score--1')
let currentScore1 = document.getElementById('current--1')
let dice = document.querySelector('.dice')
let btnNew = document.querySelector('.btn--new')
let btnhold = document.querySelector('.btn--hold')
let btnRoll = document.querySelector('.btn--roll')
let player0 = document.querySelector('.player--0')
let player1 = document.querySelector('.player--1')
let playing = true
let scores = [0,0]
let activePlayer = 0
score0.textContent = 0
score1.textContent = 0 
dice.classList.add('hidden')

btnNew.addEventListener('click',function(){
    score0.textContent = 0
    score1.textContent = 0
    dice.classList.add('hidden')
    currentScore0.textContent = 0 
    currentScore1.textContent = 0 
    scores = [0,0]
    activePlayer = activePlayer === 0 ? 1 : 0
    document.querySelector(`.player--${activePlayer}`).classList.remove('playerWinner')
    console.log(activePlayer)
    sum = 0
    playing = true
    activePlayer = 0

})

let sum = 0
btnRoll.addEventListener('click',function(){
    if(playing){
        let random = Math.trunc(Math.random()*6)+1
    dice.classList.remove('hidden')
    dice.src = `dice-${random}.png`
    if(random !== 1){
        sum = sum + random
        document.getElementById(`current--${activePlayer}`).textContent = sum
    }else{
        document.getElementById(`current--${activePlayer}`).textContent = 0
        activePlayer = activePlayer === 0 ? 1 : 0
        sum = 0
        document.querySelector(`player--${activePlayer}`).style.background = 'white'
        
        
        
    }
    }
    
})

btnhold.addEventListener('click',function(){
    if(playing){
        scores[activePlayer]=scores[activePlayer]+sum
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
    
    if(scores[activePlayer] >= 100){
        playing = false 
        document.getElementById(`name--${activePlayer}`).textContent = 'WINNER'
        document.querySelector(`.player--${activePlayer}`).classList.add('playerWinner')
        activePlayer = activePlayer === 0 ? 1 : 0
        document.getElementById(`name--${activePlayer}`).textContent = 'LOOSER'
        dice.classList.add('hidden')

    }
    else{
        activePlayer = activePlayer === 0 ? 1 : 0
        sum = 0
        document.getElementById(`current--${activePlayer}`).textContent = sum
    }
    }
})


