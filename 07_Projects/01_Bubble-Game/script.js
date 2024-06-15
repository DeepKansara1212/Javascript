let timer = 10
let score = 0
let rnHit

function increaseScore() {
    score += 10
    document.querySelector('#score-value').textContent = score
}

function makeBubble() {
    // Bubble Creation

    let clutter = ""

    for (let i = 1; i < 145; i++) {
        let rnBubble = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rnBubble}</div>`
    }

    document.querySelector('#bottom-panel').innerHTML = clutter
}

function getNewHit() {
    rnHit = Math.floor(Math.random() * 10)
    document.querySelector('#hit-value').textContent = rnHit 
}

function runTimer() {
    let timeInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector('#timer-value').textContent = timer
        } else {
            clearInterval(timeInterval) 
            document.querySelector('#bottom-panel')
                .innerHTML = `<h1>Game Over. Your final score is ${score}</h1>`
        }
    }, 1000);
}

document.querySelector('#bottom-panel')
    .addEventListener('click', (details) => {

        // When we clicked on the button, this will print that button's HTMl
        // console.log(details.target);

        // When we clicked on the button, this will give only the text content.
        // console.log(details.target.textContent);

        // But it will give you the string
        // console.log(typeof(details.target.textContent));

        // But we want Number datatype
        // console.log(Number(details.target.textContent));

        // console.log(typeof Number(details.target.textContent));

        let clickedNumber = Number(details.target.textContent)

        if (clickedNumber === rnHit) {
            increaseScore() 
            makeBubble()
            getNewHit() 
        }
    })

makeBubble() 
runTimer()
getNewHit()