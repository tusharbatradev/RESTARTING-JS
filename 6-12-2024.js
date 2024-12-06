// Master if/else statements, switch cases, and loops (for, while, do-while).

// IF-ELSE
// 1 Even or Odd Number
// Write a program that checks if a given number is even or odd.
let number = 5;
if (number % 2 === 0) {
  console.log("The given number is even");
} else {
  console.log("The given number is odd");
}

// 2 Number Comparison
// Write a program that compares two numbers and prints which one is larger or if they are equal.
let num1 = 5;
let num2 = 9;
if (num1 > num2) {
  console.log(`${num1} is greater than ${num2}`);
} else if (num1 === num2) {
  console.log(`${num1} is equal as ${num2}`);
} else {
  console.log(`${num1} is smaller than ${num2}`);
}

// 3 Leap Year Check
// Write a program that checks if a given year is a leap year.
let year = 2016;
if (year % 4 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}

// 4 Check Divisibility
// Write a program that checks if a given number is divisible by both 3 and 5.
let num = 15;
if (num % 3 === 0 && num % 5 === 0) {
  console.log(`${num} is divisible by both 3 and 5`);
} else {
  console.log(`${num} is not divisible by both 3 and 5`);
}

// 5 Temperature Check
// Write a program that prints a message based on the given temperature:

// Below 0: "Freezing"
// 0 to 20: "Cold"
// 21 to 30: "Warm"
// Above 30: "Hot"
let temperature = 12;
if (temperature < 0) {
  console.log("Freezing");
} else if (temperature > 0 && temperature < 20) {
  console.log("Cold");
} else if (temperature > 21 && temperature < 30) {
  console.log("Warm");
} else {
  console.log("Hot");
}

// Function
// 1 Calculate the Square of a Number
// Write a function that takes a number as input and returns its square.
function Square(num) {
  let square = num * num;
  console.log(`Square of ${num} is ${square}`);
}
Square(12);

// 2 Check if a Number is Prime
// Write a function that checks if a given number is prime.
function PrimeNumber(num) {
  let divisibleCounter = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisibleCounter += 1;
    }
  }

  if (divisibleCounter === 2) {
    console.log(`${num} is a Prime Number`);
  } else {
    console.log(`${num} is not a Prime Number`);
  }
}

PrimeNumber(29);

// 3 Find the Maximum of Three Numbers
// Write a function that takes three numbers as input and returns the maximum of the three.
function MaximumNumber(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is greater than ${num2} and ${num3}`);
  } else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is greater than ${num1} and ${num3}`);
  } else {
    console.log(`${num3} is greater than ${num1} and ${num2}`);
  }
}
MaximumNumber(2, 6, 8);

// 4 Calculate the Factorial of a Number
// Write a function that calculates the factorial of a given number.
function Factorial(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  console.log(factorial);
}
Factorial(4);

// 5 Find the Length of the Longest Word in a Sentence
// Write a function that takes a sentence as input and returns the length of the longest word in the sentence.
function LargestWord(sentance) {
  let array = sentance.split(" ");
  let largestWord = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i].length > largestWord.length) {
      largestWord = array[i];
    }
  }

  console.log(`The largest word in the given sentance is '${largestWord}'`);
}
LargestWord("My Name is Tushar");

// Array Manipulation and it's questions

// 1 Sum of Array Elements
// Write a function that takes an array of numbers as input and returns the sum of its elements.
function SumOfArray(array) {
  let sumOfArray = 0;

  for (let i = 0; i < array.length; i++) {
    sumOfArray = sumOfArray + array[i];
  }

  console.log(`Sum of the array is ${sumOfArray}`);
}
SumOfArray([5, 6, 7]);

// 2 Find the Largest Number in an Array
// Write a function that finds and returns the largest number in a given array of numbers.
function LargestNum(arr) {
  let largestNum = arr[0];

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }

  console.log(`Largest Number is ${largestNum}`);
}
LargestNum([2, 5, 8, 9]);

// 3 Filter Even Numbers from an Array
// Write a function that takes an array of numbers as input and returns a new array containing only the even numbers.

function EvenNumber(arr) {
  let evenNumArray = arr.filter((item) => {
    if (item % 2 === 0) {
      return item;
    }
  });

  console.log(evenNumArray);
}
EvenNumber([2, 6, 55, 11]);

// 4 Remove Duplicates from an Array
// Write a function that takes an array as input and returns a new array with duplicate elements removed.
function Duplicates(arr){
    let uniqueArray = [];

    for(let i=0 ; i<arr.length ; i++){
        if(!uniqueArray.includes(arr[i])){
            uniqueArray.push(arr[i])
        }
    }

    console.log(uniqueArray)
}
Duplicates([1,1,22,35,22,8])

// 5 Find the Index of an Element
// Write a function that takes an array and an element as input and returns the index of that element in the array. If the element is not found, return -1.

function Index(arr, ele){
    let indexOfEle = -1;

    if(arr.includes(ele)){
        indexOfEle = arr.indexOf(ele)
    }

    console.log(`Index of ${ele} is ${indexOfEle}`)
}
Index([2,9,56,66,2,1],66)