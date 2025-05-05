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

// function to check if the user pressed the right key
// document.querySelector(".box").addEventListener("keydown", (e) => {
//   if (!isLetter(e.key)) {
//     e.preventDefault();
//     console.log(e.key);
//   }
// });

let updateBoxCounter = 0; 

function updateBox(value) {
    let box = document.getElementById(updateBoxCounter); 
    box.innerText = value.toUpperCase();
    updateBoxCounter += 1
    if (updateBoxCounter > 29) updateBoxCounter = 0;
}

document.addEventListener("keydown", (e) => {
    if (isLetter(e.key)) {
        updateBox(e.key);
        console.log(e.key);
    }
});