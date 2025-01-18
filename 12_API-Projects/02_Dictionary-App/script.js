const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"

const result = document.getElementById("result")
const sound = document.getElementById("sound")
const btn = document.getElementById("search-btn")

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;
    if (!inpWord) return; // Don't proceed if input is empty

    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            result.innerHTML = `
            <div class="word">
                <h3>${inpWord}</h3>
                <button onclick="playSound()">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>

            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p> 
                <p>${data[0].phonetic || "" }</p>
            </div>

            <p class="word-meaning">
                ${data[0].meanings[0].definitions[0].definition}
            </p>

            <p class="word-example">
                ${data[0].meanings[0].definitions[0].example || "" } 
            </p>`

            // Find the first available audio URL
            const phonetics = data[0].phonetics;
            let audioUrl = '';
            for (let i = 0; i < phonetics.length; i++) {
                if (phonetics[i].audio) {
                    audioUrl = phonetics[i].audio;
                    break;
                }
            } 
            
            // Set the audio source if found
            if (audioUrl) {
                // Check if the URL already includes http/https
                if (!audioUrl.startsWith('http')) {
                    audioUrl = `https:${audioUrl}`;
                }
                sound.setAttribute("src", audioUrl);
            }
        })
        .catch( () => {
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`
        })
}) 

function playSound() {
    if (sound.src) {
        sound.play().catch(e => console.log("Error playing sound:", e));
    } 
} 