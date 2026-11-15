// Traditional Function

function greet(name) {
    return "Hello " + name;
}
console.log(greet("Utkarsh"));


// Arrow Function

const greetUser = (name) => {
    return `Welcome ${name}`;
};
console.log(greetUser("Developers"));


// Implicit return
const square = num => num * num;
console.log(square(5));