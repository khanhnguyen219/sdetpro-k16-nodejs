// CREATE
let teo = {
    name: "Teo",
    age: 18,
    "My-gender": 'M'
}

// READ
console.log(teo.name);
console.log(teo["My-gender"]);


// UPDATE
teo.name = "Ti";
console.log(teo);

// Destructure
const{name, age, ["My-gender"] : gender} = teo;
sayHello(teo)

// function with destructured params
function sayHello(name) {
    console.log(`Hello there, my namne is ${name}`);
}

// Delete
delete teo.name;
console.log(teo);
