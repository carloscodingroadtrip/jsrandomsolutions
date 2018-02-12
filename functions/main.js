

// FUNCTIONS
// ================================================================================

// Create a Function called "adder" that take three arguments (x, y, z).
// The function should add the arguments together, and log the result to the console.


// Create a Function called "multiplier" that takes three arguments (x, y, z).
// The function should multiply the arguments, and log the result to the console.


// Create a Function called "isString" that takes three arguments (x, y, z).
// "isString" determines if all three arguments are strings and logs an appropriate response to the console.


// Create a Function called "vowelChecker" that takes in a single argument (x).
// "vowlChecker" logs whether or not the input is a vowel.


// BONUS
// Creates a version of "adder" that returns its result. Function is called "adderReturn".


// Creates a version of "multiplier" that returns its result. Function is called "multiplierReturn".


// FUNCTION EXECUTION
// ================================================================================

// Add in the lines of code below necessary to call the functions we created above.


// Call the adder function here.
function adder(x,y,z) {
    var add = x+y+z;
    console.log(add);
}
adder(1,2,3);
console.log("-------------------");


// Call the multiplier function here.
function multiplier(x,y,z) {
    var multiplication = (x*y*z);
    console.log(multiplication);
}
multiplier(2,1,4);

console.log("-------------------");


// Call the isString function here.
function isString(x,y,z) {
    if (typeof x === 'string' && typeof y === 'string' && typeof z === 'string') {
        console.log('true');
    } else {
        console.log('false');
    }

}
isString('a',1,'a');
console.log("-------------------");


// Call the vowelChecker function here.
function vowelChecker(x) {
    vowels = ['a','e','i','o','u'];
    for (j=0; vowels.length; j++) {
        if (x === vowels[j]) {
            console.log('It is a vowel');
        } else {
            console.log('not a vowel');
        }
    }
}
vowelChecker('a');
console.log("-------------------");


// BONUS
// Call the adderReturn function here and set it equal to a variable. Then log that variable to the console.


console.log("-------------------");


// Call the multiplierReturn function here and set it equal to a variable. Then log that variable to the console.

