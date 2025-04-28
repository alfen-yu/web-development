// EXAMPLE OF USING ASYNC FUNCTIONS 

async function getName(name) {
    return name; 
}

console.log("promise: ", getName);

// resolving a promise, this is how async functions are used 
// remember: an async function always return a promise, you have to resolve it first 
// using .then and work on it  
getName("John Doe").then((name) => {
    console.log(name);
})