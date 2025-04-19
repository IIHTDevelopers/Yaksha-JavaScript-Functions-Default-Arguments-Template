// Function with arguments
function greet(name, age = 25) {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}

// Calling the function with both arguments
console.log(greet('John', 30));  // "Hello, my name is John and I am 30 years old."

// Calling the function with only one argument (default age will be used)
console.log(greet('Jane'));  // "Hello, my name is Jane and I am 25 years old."

// Function to calculate the sum of two numbers
function sum(a, b) {
    return a + b;
}

// Calling the function with arguments
console.log(sum(5, 7));  // 12
