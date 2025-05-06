const container = document.getElementById("grid");
let boxIdCounter = 0;

// create the wordle grid boxes
function createGrid(grid, rows, cols) {
    for (let i = 0; i < rows; i++) {
        const row = document.createElement("div");
        row.classList.add("box-row");

        for (let j = 0; j < cols; j++) {
            const box = document.createElement("div");
            box.id = boxIdCounter;
            box.classList.add("box");
            row.appendChild(box);
            boxIdCounter += 1;
        }
        grid.appendChild(row);
    }
}

createGrid(container, 6, 5);

// here starts the api work and fetching
const WORD_URL = "https://words.dev-apis.com/word-of-the-day?random=1";
const VALIDATE_URL = "https://words.dev-apis.com/validate-word";

// function to validate a character
function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
}

// function to update the characters in boxes 
let boxCounter = 0;

async function postWord(word) {
    const promise = await fetch(VALIDATE_URL, {
        method: "POST", 
        body: JSON.stringify({"word": word})
    }); 

    const response = await promise.json();
    const valid = response.validWord; 

    return valid; 
}

function validateWord(word) {
    const validation = postWord(word);

    if (validation === true) {
        console.log("it works");
    } else { 
        console.log("doesn't work");
    }
}

function updateBox(key, event) {
    let box = document.getElementById(boxCounter);
    
    if (boxCounter < 30) {
        if (((boxCounter) % 5) === 0 && boxCounter != 0) {
            if (key !== "Enter") {
                alert("please input enter first");
                event.preventDefault();
            } else if (key === "Enter") {
                validateWord();
            }
        } else {
            if (isLetter(key)) {
                box.innerHTML = key.toUpperCase();
                console.log(boxCounter);
                boxCounter += 1;
            }
        }
    }
}


document.addEventListener("keydown", (e) => {
    updateBox(e.key, e);
});