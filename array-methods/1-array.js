// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
console.log(Math.max(...numbers));


// Find longest string in strings

function searchLongest(strings) {
  let longestWord = strings[0];
    for(let i = 0; i < strings.length; i++) { 
      if(strings[i].length > longestWord.length) {
        longestWord = strings[i];
      }
    }
    return longestWord;
  }
  
  console.log( searchLongest(strings) );

// Find all the even numbers
function evenNum(num) {
  if (num % 2 == false) {
    return num;
  } 
};

console.log( numbers.filter(evenNum) );


// Find all the odd numbers
function oddNum(num) {
  if (num % 2 == true) {
    return num;
  } 
};

console.log( numbers.filter(oddNum) );

// Find all the words that contain 'is' use string method 'includes'
function wordIs(word) {
  return word.includes("is")
};

strings.filter(wordIs);

// Find all the words that contain 'is' use string method 'indexOf'
function wordIs(word) {
  if( (word.indexOf('is')) != -1 )
    return word;
}
console.log( strings.filter(wordIs) );

// Check if all the numbers in numbers array are divisible by three use array method (every)
const isDivisibleByThree = (number) => number % 3;

console.log( numbers.every(isDivisibleByThree) );

//  Sort Array from smallest to largest
function ascendingOrder (a, b) {
  return a-b;
}
numbers.sort(ascendingOrder);

// Remove the last word in strings
let popped = strings.pop();
console.log(strings);

// Add a new word in the array
let newArr = strings.push("Sukapha");
console.log(strings);

// Remove the first word in the array
let removedFirst = strings.shift();
console.log(strings);

// Place a new word at the start of the array use (unshift)
let addFirst = strings.unshift("Chaolung");
console.log(strings);

// Make a subset of numbers array [18,9,7,11]
let subSet = numbers.slice(3, 7);
console.log(subSet);

// Make a subset of strings array ['a','collection']
let subSetWords = strings.slice(2, 4);
console.log(subSetWords);

// Replace 12 & 18 with 1221 and 1881
numbers.splice(1, 1, 1221);
numbers.splice(3, 1, 1881);

console.log(numbers);

// Replace words with string in strings array
 
strings.splice(5, 1, 'string');
console.log(strings);




// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];

// Find all customers whose firstname starts with 'J'
let firstNameArray = [];
for(let i = 0; i < customers.length; i++) {
  firstNameArray.push(customers[i].firstname); 
}

let newString = firstNameArray.toString();
let namesWithJ = " ";
for (let i = 0; i < newString.length; i++) {
  if ( newString.startsWith("J") ) {
    namesWithJ.concat(' ', newString);
  }
}
console.log(namesWithJ);

// Create new array with firstname and lastname
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
let firstName = [];
let lastName = [];
for(let i = 0; i < customers.length; i++) {
  firstName.push(customers[i].firstname);
  lastName.push(customers[i].lastname);
}

console.log(firstName);
console.log(lastName);

// Sort the array created above alphabetically
firstName.sort();
lastName.sort();