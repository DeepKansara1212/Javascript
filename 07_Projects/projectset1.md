# Projects Related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html) 

# Solution Code

## Project 1 -> Color Changer 

```Javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target) 

    if (e.target.id === "grey"){
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === "white"){
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === "blue"){
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === "yellow"){
      body.style.backgroundColor = e.target.id
    } 
  });
});

```

## Project 2 -> BMI Calculator

```Javascript
const form = document.querySelector('form')

// This usecase will give you empty.
// const height = parseInt(document.querySelector('#height').value) 

form.addEventListener('submit', function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value) 
  const weight = parseInt(document.querySelector('#weight').value) 
  const results = document.querySelector('#results')
  const weightGuide = document.querySelector('#weight-guide')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}.`;
  } else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}.`;
  } else {
    const bmi = (weight / ((height * height)/10000).toFixed(2))

  // Show the results
  results.innerHTML = `<span>${bmi}</span>`

  if (results < 18.6){
    weightGuide.innerHTML = "Under Weight"
  } else if (1806 < results < 24.9){
    weightGuide.innerHTML = "Normal Range"
  } else {
    weightGuide.innerHTML = "Overweight"
  }
  }
}) 
```

## Project 3 -> Digital Clock
```Javascript
const clock = document.getElementById('clock') 
// document.querySelector('clock')
// Both are same


setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString()) 
  clock.innerHTML = date.toLocaleTimeString() 
}, 1000) 
```

## Project 4 -> Guess The Number
```Javascript
let randomNumber = parseInt((Math.random() * 100) + 1) 

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value) 
    // console.log(guess) 
    validateGuess(guess) 
  })
}

function validateGuess(guess){
  // Checks the guess is number or not & if guess is number then checks if it is in-between 1 to 100 or not?

  if (isNaN(guess)){
    alert(`Please enter a valid number.`)
  } else if (guess < 1){
    alert(`Please enter a number greater than 1.`)
  } else if (guess > 100){
    alert(`Please enter a number less than 100.`)
  } else {
    prevGuess.push(guess) 

    if (numGuess === 11){
      displayGuess(guess) 
      displayMessage(`Game Over. \nRandom number was ${randomNumber}`) 
      endGame() 
    } else {
      displayGuess(guess) 
      checkGuess(guess) 
    }
  }
}

function checkGuess(guess){
  // Checks the value which is entered by the user is equal to random number than it will display the msg using displayMessage() function & if not then say value is high or low acc. to the value

  if (guess === randomNumber){
    displayMessage(`You Guessed it right.`)
    endGame()
  } else if (guess < randomNumber){
    displayMessage(`Number is too low`)
  } else if (guess > randomNumber){
    displayMessage(`Number is too high`)
  }
}

function displayGuess(guess){
  // Cleans the entered value every time so that next value can be printed, update the array for the field previous guesses & update the remaining guesses also

  userInput.value = ''
  guessSlot.innerHTML += `${guess}  `
  numGuess++
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
  // Print the message

  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  // End the game
  userInput.value = ''
  userInput.setAttribute('disabled', '') 
  p.classList.add('button') 
  p.innerHTML = `<h2 id="newGame"> Start New Game </h2>`
  startOver.appendChild(p) 
  playGame = false
  newGame()
} 

function newGame(){
  // Start the new game

  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt((Math.random() * 100) + 1) 
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p) 

    playGame = true
  })
} 

```

## Project 5 -> Unlimited Colors
```Javascript
// Generate a random color

const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = '#'

  // For loop is for to display the color in #FFFFFF format.
  for(let i=0; i<6; i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color
}
// console.log(randomColor()) 


let intervalId
// To start the changing color
const startChangingColor = function(){
  if (!intervalId){
    intervalId = setInterval(changeBgColor, 1000)
  }

  function changeBgColor(){
    document.body.style.backgroundColor = randomColor()
  }
   
}

// To stop the changing color
const stopChangingColor = function(){
  clearInterval(intervalId);
  intervalId = null
  // Here we overwrite the intervalId many times, So for that we add interval as null. 
    // After adding this statement, we got the error like we can start the color change but it can't stop. So for that we add if statement in the startChangingColor function. 
}

document.querySelector("#start").addEventListener('click', startChangingColor)

document.querySelector("#stop").addEventListener('click', stopChangingColor) 

```

## Project 6 -> Keyboard Check
```Javascript
const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class = "color">
      <table>
      <tr>
        <th>Key</th>
        <th>Keycode</th>
        <th>Code</th>
      </tr>
      <tr>
        <td>${e.key === ' ' ? "Space": e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
      </table>
    </div>
  `
})
```