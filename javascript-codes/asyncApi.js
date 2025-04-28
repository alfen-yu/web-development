// MAKING AN API REQUEST USING ASYNC/AWAIT 

const URL = "https://dog.ceo/api/breeds/image/random";

// creating the html elements
const button = document.createElement("button"); // create a button element
button.innerText = "Generate Dog Image"; // set the text of the button
button.id = "bring-dog"; // set the id of the button 

const div = document.createElement("div");

async function fetchDog() {
    const promise = await fetch(URL); // waits until the response is fetched 
    const response = await promise.json(); // waits again until the response is processed
    const img = document.createElement("img");
    img.src = response.message; 
    img.alt = "Picture of a dog"; 
    div.appendChild(img); 
}

document.getElementById("bring-dog").addEventListener("click", fetchDog);