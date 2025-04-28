// MAKING A BASIC API REQUEST 
const URL = "https://dog.ceo/api/breeds/image/random";

const button = document.createElement("button"); // create a button element
button.innerText = "Generate Dog Image"; // set the text of the button
button.id = "bring-dog"; // set the id of the button 

const div = document.createElement("div");

function bringDog() {
    // fetch is built in the browser, part of the DOM 
    // it has the ability to go out and request information from a server
    // returns a promise 
    // a promise is a future variable that will or will not have a value 

    // .then means when the result comes back => do this  

    // Example of Promise Chaining 
    const promise = fetch(URL);
    promise.then((res) => {
        const promiseRes = res.text();
        // if you are sure that its a json response 
        // const promiseRes = res.json(); 
        return promiseRes;
    }).then((processedRes) => {
        // dont need this line below if the response is already json 
        const data = JSON.parse(processedRes); // parse the string into an object
        const img = document.createElement("img"); // creates an image tag 
        img.src = data.message;
        img.alt = "dog pic";
        div.appendChild(img);
    }).catch((err) => {
        // incase the image fails to be fetched 
        alert("Error fetching the dog image. Please try again later.");
        console.error("Error fetching the dog image:", err);
    });
}

document.getElementById("bring-dog").addEventListener("click", bringDog);



// if you want to run this code in a terminal using nodejs 
// node filename.js 

// const URL = "https://dog.ceo/api/breeds/image/random";

// async function bringDog() {
//     try {
//         const res = await fetch(URL);
//         const data = await res.json();
//         console.log("Dog Image URL:", data.message); 
//     } catch (err) {
//         console.error("Error fetching the dog image:", err);
//     }
// }

// bringDog();