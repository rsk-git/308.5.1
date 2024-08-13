

// Take an array of numbers and return the sum.

let input = [0,1,8,18,108]
let totalSum = sumArray(input);
function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return(sum);
}

console.log(totalSum);

// return average

let number = [3,5,8,32]
let average = getAverage(number)

function getAverage(array) {
    if (array.length ===0) return 0;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  }
console.log(average);

//   Take an array of strings and return the longest string

let stringArray = ["rose", "jasmine", "daffodils", "tulips"];
let longestString = findLongestString(stringArray);
function findLongestString(strings) {
    if (strings.length === 0) return ''; // Handle empty array case

    let longest = strings[0]; // Start by assuming the first string is the longest

    for (let i = 1; i < strings.length; i++) {
        if (strings[i].length > longest.length) {
            longest = strings[i]; // Update longest if current string is longer
        }
    }

    return longest;
}



console.log(longestString);


// Function to return strings longer than a given number
let setArray = stringsLongerThan(['nature', 'greetings', 'to', 'sun', 'morning'],3); 

function stringsLongerThan(strings, length) {
   let result = [];
    for (let i = 0; i < strings.length; i++) {
        
        if (strings[i].length > length) {
            result.push(strings[i]); 
        }
    }

    return result; 
}

console.log(setArray);

        

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

let n = [5];
function printNumbers(n, current = 1) {
    if (current > n ) return;
    console.log(current);
    printNumbers (n, current +1);
}
printNumbers(n);
