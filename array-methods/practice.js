// Use below arrays to make questions for yourself and practice the methods like
// map
// forEach
// filter
// splics
// reduce
// etc ..

// Write atleast 10 different question for every method.

var pizzas = [
  "Deep Dish",
  "Peperoni",
  "Hawaiian",
  "Meatzza",
  "Spicy Mama",
  "Margherita"
];

var cuts = [
  "Chuck",
  "Brisket",
  "Shank",
  "Rib",
  "Plate",
  "Flank",
  "Short Loin",
  "Tenderloin",
  "Sirloin",
  "Round"
];

var numbers = [1, 2, 3, 4, 5, 6, 23, 121, 345, 33, 23, 12, 435, 642, 66, 23];

// forEach practice
// _________________


// 1. Display the elements in array pizzas
pizzas.forEach( element => console.log(element) )

// 2. Display the elements in array cuts
cuts.forEach( value => console.log(value) )

// 3. Display the elements in numbers
numbers.forEach( val => console.log(val) )

// 4. Get the sum of all the values in the array:
let sum = 0;
numbers.forEach(mySum);

function mySum(item) {
  sum += item;
  return sum;
};
mySum(0);

// 5. For each element in the array: update the value with 5 times the original value.
const copy = [];

numbers.forEach( function(item) {
      copy.push(item * 5);
      return(copy);
    } 
);

console.log(copy);

// 6. For each element in the array: update the value with its square.
const copy = [];

numbers.forEach( function(item) {
      copy.push(item ** 2);
      return(copy);
    } 
);

console.log(copy);

// 7. Make an empty array from existing array pizzas
var emptyArray = [];

pizzas.forEach( function(item) {
    emptyArray.pop();
    return emptyArray;
  }
);

console.log(emptyArray);

// 8. For each element in the cuts array: add a "#" at the end of each element
const cutsPound = [];

cuts.forEach( function(item) {
      cutsPound.push(item + "#");
      return(cutsPound);
    } 
);

console.log(cutsPound);

// 9. Multiply the number by 2 in the number array without using multiplication operator
let addConsecutive = [];
numbers.forEach(function(item, index){
    addConsecutive.push( item + (item++) );
    return (addConsecutive);
  }
);

console.log(addConsecutive);

// 10.For each element in the pizzas array: add a "@" at the starting of each element
const pizzasAtRate = [];

pizzas.forEach( function(item) {
  pizzasAtRate.push("@" + item);
      return(pizzasAtRate);
    } 
);

console.log(pizzasAtRate);





// map practice
// _________________


// 1. Find the cube of each elment of the numbers array and store them in a new array
const map1 = numbers.map(x => x ** 3);

console.log(map1);

// 2. Using console.log() display the length of each element of the pizzas array
let lengths = [];
pizzas.map( item => lengths.push(item.length) );
console.log(lengths);
 
// 3. Find the square-root of the elements of the numbers array and store them in a new array
var x = numbers.map(Math.sqrt);

console.log(x);

// 4. Duplicate the cuts array and make a new array
var result = cuts.map(item => (item));
console.log(result);

// 5.MUltiply each element of the numbers array with 3.14
let valuePi = numbers.map(item => item * 3.14); 
console.log(valuePi);

// 6. Use map function in the cuts array: add a "#" at the end of each element
cuts.map( function(item) {
    cutsPound.push();
    return(item + "#");
  } 
);

// 7. Display the elements in array pizzas using map function
pizzas.map( pizzas => pizzas );

// 8. Get the sum of consecutive numbers in the array "numbers":
let sum = 0;
numbers.map(mySum);

function mySum(item) {
  sum += item;
  return sum;
};

// 9. Use map function in the pizzas array: add a "@" at the starting of each element
pizzas.map( function(item) {
    return("@" + item);
  } 
);


// 10. Multiply each element of the numbers array and store them in a new array.
const map2 = numbers.map(x => x * 2);

console.log(map2);






// filter practice
// _________________


// 1. In the pizzas array find words with length more than 9 and store them in a new array
let result = pizzas.filter(word => word.length > 9);

console.log(result);


// 2. In the array cuts find the sequence of letters `loi` and store them in an array. 
let searchItems = (item, search) => {
  return item.filter(item1 => item1.toLowerCase().indexOf(search.toLowerCase()) !== -1)
}
console.log(searchItems(cuts, "loin"));

// 3. Find even numbers in the `numbers` array and store them in an array
function numberArray(num) {
  return num % 2 == 0;
}

let result = numbers.filter(numberArray);

console.log(result);

// 4. Find prime numbers in the `numbers` array
function primeArray(num) {
  if (num <= 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let i = 2; i < num; i++)
      if (num % i === 0) {
        return false;
      }
    return true;
  }
}

console.log( numbers.filter(primeArray) );

// 5. In the array `numbers` display elements greater than 99. 
function trippleDigits(num) {
  if (num > 99) {
      return num;
  }
};

console.log( numbers.filter(trippleDigits) );

// 6. In the array `numbers` display the odd elements.
function oddNum(num) {
  if (num % 2 == true) {
    return num;
  } 
};

console.log( numbers.filter(oddNum) );

// 7. In the array `numbers` display elements between 30 and 300. 
function doubleDigits(num) {
  if (num > 30 && num <= 300) {
      return num;
  }
};

console.log( numbers.filter(doubleDigits) );


// 8.  In the pizzas array delete elements with less than 8 characters
const deleteWords = pizzas.filter( (word)  => {
  if (word.length > 7) {
    return pizzas;
    }
  } );

console.log(deleteWords);