// Reduce questions

// 1 Sum of an Array
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum);

// 2 Product of All Numbers
// Given an array of numbers, use reduce to find the product of all numbers in the array.
const num = [1, 2, 3, 4, 5, 6];
const product = num.reduce((acc, curr) => {
  return acc * curr;
}, 1);
console.log(product);

// 3 Longest String
// Given an array of strings, use reduce to find the longest string in the array.
const strings = ["Tushar", "Riya", "Aman", "Vivaaan"];
const longestString = strings.reduce((acc, curr) => {
  if (curr.length > acc.length) {
    return curr;
  } else {
    return acc;
  }
}, "");
console.log(longestString);

// 4 Find Maximum Value
// Given an array of numbers, use reduce to find the maximum value in the array.
const nums = [12, 5, 62, 55, 69, 89];
const longestNum = nums.reduce((acc, curr) => {
  if (curr > acc) {
    return curr;
  } else {
    return acc;
  }
}, 0);
console.log(longestNum);

// 5 Calculate Average
// Given an array of numbers, use reduce to calculate the average of the numbers.
const arr = [12, 55, 6, 9, 56, 33, 25];
const sumOfArr = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);

const average = sumOfArr / arr.length;
console.log(average);

// 6 Remove Duplicates
// Given an array of numbers or strings, use reduce to remove duplicates and return a new array.
const arr2 = [12, 25, 6, 88, 5, 6, 12];
const uniqueArray = [];
const remove = arr2.reduce((acc, curr) => {
  if (!uniqueArray.includes(curr)) {
    uniqueArray.push(curr);
  } else {
    return acc;
  }
}, 0);
console.log(uniqueArray);

// 7 Calculate Total Price
// Given an array of objects representing products with price and quantity properties, use reduce to calculate the total price.
const object = [
  {
    name: "Comb",
    price: 200,
  },
  {
    name: "Perfume",
    price: 250,
  },
  {
    name: "PC",
    price: 25000,
  },
  {
    name: "Phone",
    price: 50000,
  },
];
const totalPrice = object.reduce((acc, curr) => {
  return curr.price + acc;
}, 0);
console.log(totalPrice);

// 8 Count Vowels in a String
// Given a string, use reduce to count the number of vowels.
let string = "Tushar";
let splitString = string.split("");

let totalVowels = splitString.reduce((acc, curr) => {
  if (
    curr === "a" ||
    curr === "e" ||
    curr === "i" ||
    curr === "o" ||
    curr === "u"
  ) {
    return (acc += 1);
  } else {
    return acc;
  }
}, 0);
console.log(totalVowels);

// 9 Find Most Frequent Element - DOUBT
// Given an array of elements, use reduce to find the most frequent element.
// const array2 = [12, 25, 6, 88, 5, 6, 12];


// 10 Sum of Even Numbers
// Given an array of numbers, use reduce to find the sum of all even numbers.
const nums2 = [12,5,6,11,23,15,6];
const sumOfEvenNums = nums2.reduce((acc,curr) => {
    if(curr%2 === 0){
        return acc + curr
    } else {
        return acc
    }
} , 0)
console.log(sumOfEvenNums)