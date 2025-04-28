# Javascript notes

## Overview

Contains stuff related to javascript.

---

## Concepts

- AJAX & JSON
- APIs
- Async/Await

---

### AJAX & JSON

Asynchronous JavaScript and XML. Requesting data from the servers without refreshing the page. AJAX isn't used anymore. JSON is used widely. JavaScript Object Notation (JSON). JSON can have strings, numbers, objects, arrays, and booleans.

#### Code Snippet

```javascript
// JSON example
x = {
  age: 10,
  name: "john",
  city: "new york",
  car: {
    model: 1977,
    make: "toyota",
  },
};

// converts "valid" json to js object
const response = JSON.parse(serverResponse);
console.log(response.age); // accessing the values from the keys

// encode js object to JSON to send to a server
const sendInfo = JSON.stringify(x);
```

---

### APIs

Application Programming Interface: endpoints that we can call to get data from.

#### Code Snippet 
```javascript
const uri = "websitename/weathervariables_name1=xxx&variable_name2=xxx";
```

Refer to javascript files api.js, asyncApi.js for more understanding of APIs.

---

### Async/Await

Asynchronous javascript. Await can only be used with async functions, generators, and modules. These functions wait for things, process it and then return a promise.

#### Code Snippet 
```javascript
async function getName(name) {
    return name; 
}

// this prints: Promise {}
console.log("prints a promise: " getName());


// actual way of using an async function 
getName().then((name) => {
    name
});
```
