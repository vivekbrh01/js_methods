var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(word) {
  let longest = words[0];
  for(let i = 0; i < words.length; i++) {
    if(words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

console.log( findLongestWord(words) );


var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.

function sumArray() {
  return numbers1.reduce( (acc, cv) => {
    acc += cv;

    return acc;
  }, 0);
}
let average = sumArray()/numbers1.length;
console.log(average);




var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers

function averageNumbers() {
  return numbers2.reduce( (acc, cv) => {
    acc += cv;

    return acc;
  }, 0);
}
let average = averageNumbers()/numbers2.length;

console.log(average);



var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength() {
  return words2.reduce( (acc, cv, index) => {
    let sum = acc * (index);
    sum += cv.length;
    acc = sum / (index+1);
    return acc;
  }, 0);
}
console.log(averageWordLength());