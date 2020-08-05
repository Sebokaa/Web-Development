console.log('hello');

// alert('Hello this is Yaffet');

// This is how you comment

//Variables
var b = '1';
console.log(b);

//Can also be done for numbers

// var age = prompt('What is you age?');

// document.getElementById('someText').innerHTML = age;

var num = 10 * 2;
console.log(num);

// var age = prompt("Enter your age")
function age() {
    var age = prompt("What is your age");
    if(age > 21) {
    age++;
    console.log(age);
} else {
    age--;
    console.log(age);
    }
} 

// age();

// Functions
fun();

function fun() {
    console.log("This is a function");
}

// Make a function for name
function name(greeting, name) {
    var name = prompt("What is your name");
    console.log(greeting + name);
}

// name("Hello ", name);

// Add 2 numbers in a function

function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}

sumNumbers(10, 12);

/* While loops

var counter = 0;
while(counter < 5) {
counter++;
console.log(counter);
}

*/

// For loop
for (let num = 0; num < 20; num += 2) {
   // console.log(num); 
}


let fruit = "Bananna"

// print multiple lines
let moreFruits = "Banannas\nApples\nGrapes\nKiwi"
console.log(moreFruits);

// length of letter in fruit variable
console.log(fruit.length);

// what index is the letter found at
console.log(fruit.indexOf('b'));

// Slice the words apart
console.log(fruit.slice(2, 6));

// Replace words
console.log(fruit.replace('ban', '123'));

// Make all words UPPER CASE
console.log(fruit.toUpperCase(fruit));

// Make all words lower case
console.log(fruit.toLowerCase(fruit));

//get an item
console.log(fruit[2]);

//split the string 
console.log(fruit.split(''));

//Array
let fruits = ["Banana", "Apples", "Pineapples", "Oranges"];

console.log(fruits[3]);

fruits[0] = "pear"

console.log(fruits[0]);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// array common methods
console.log("to string", fruits.toString());
console.log(fruits.join(' - '));
console.log(fruits.pop(), fruits);
console.log(fruits.push("blak")
