const container = document.getElementById("grid");
let boxIdCounter = 0; // counter to create the grod 
let boxCounter = 0; // counter to manage and update boxes in handle key events 
const WORD_LENGTH = 5;
const TOTAL_ROWS = 6;
let currentRow = 0;

// create the wordle grid boxes
function createGrid(grid, rows, cols) {
    for (let i = 0; i < rows; i++) {
        const row = document.createElement("div");
        row.classList.add("box-row");

        for (let j = 0; j < cols; j++) {
            const box = document.createElement("div");
            box.id = `${i * cols + j}`;
            box.classList.add("box");
            row.appendChild(box);
            boxIdCounter += 1;
        }
        grid.appendChild(row);
    }
}

createGrid(container, TOTAL_ROWS, WORD_LENGTH);

// here starts the api work and fetching
const WORD_URL = "https://words.dev-apis.com/word-of-the-day?random=1";
const VALIDATE_URL = "https://words.dev-apis.com/validate-word";

// function to validate a character
function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
}


// checks if the word is a valid 5-letter word 
async function postWord(word) {
    const promise = await fetch(VALIDATE_URL, {
        method: "POST",
        body: JSON.stringify({ "word": word })
    });
    
    const response = await promise.json();
    return response.validWord;
}

// fetches the word from the API
async function fetchWord() {
    const promise = await fetch(WORD_URL); 
    const response = await promise.json(); // waits again until the response is processed
    console.log();
    return response.word; 
}

// updates the box with the letter typed by the user 
function updateBox(value) {
    if (boxCounter < TOTAL_ROWS * WORD_LENGTH) {
        const box = document.getElementById(boxCounter);
        box.innerHTML = value.toUpperCase();
        boxCounter += 1;
    }
}

function handleBackspace() {
    // handles the removal of last word typed, doesn't let go out of row 
    // the counter should be greater than zero, and it should be less than the word length (5) after taking the modolus so as to restrict it in the row. 
    if (boxCounter > 0 && boxCounter % WORD_LENGTH < WORD_LENGTH) {
        boxCounter--;
        const box = document.getElementById(boxCounter);
        box.innerHTML = "";
    }
}

// gets the current word in the row that user typed 
// joins the letters to form the word to validate it with the word validator 
function getWord() {
    let word = "";
    for (let i = boxCounter - WORD_LENGTH; i < boxCounter; i++) {
        const char = document.getElementById(i);
        word += char.innerText;
    }
    return word.toLowerCase();
}

const word = fetchWord().then();
console.log(word);

// validates the word from the wordle word of the day with the word we typed 
function validateWord(typedWord, wordleWord) {
    console.log(wordleWord);
    console.log(typedWord);
    for (let i = 0; i < wordleWord.length; i++) {
        for (let j = 0; j < typedWord.length; j++) {
            if (typedWord[j] === wordleWord[i]) {
            }
        }
    }
}

// handles the functionality of enter pressed 
async function handleEnter(wordleWord) {
    if (boxCounter === WORD_LENGTH * (currentRow + 1)) {
        const word = getWord();
        const valid = await postWord(word);

        if (valid) {
            currentRow++;
            validateWord(word, wordleWord);
            alert("The word is valid but doesn't match the wordle word.");
        } else {
            alert("Not a 5 Letter word.");
        }
    } else {
        alert("Please complete the word first.");
        return;
    }
}

// handles the key pressed events 
document.addEventListener("keydown", async (e) => {
    const key = e.key;
    if (isLetter(key)) {
        if (boxCounter < TOTAL_ROWS * WORD_LENGTH && boxCounter < (currentRow + 1) * WORD_LENGTH) {
            updateBox(key, e);
        }
    } else if (key === "Enter") {
        await handleEnter();
    } else if (key === "Backspace") {
        handleBackspace();
    }
});