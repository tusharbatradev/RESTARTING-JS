// Array Manipulation
// Given an array of integers, write a function to find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.


// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const sum = [];






// 1
// How do you use the splice method to remove 'banana' and 'cherry' from the array ['apple', 'banana', 'cherry', 'date']?
// Inserting Elements:
let fruits = ['apple', 'banana', 'cherry', 'date'];
fruits.splice(1,2);
console.log(fruits)


// 2
// How can you use the splice method to insert 'kiwi' and 'mango' between 'banana' and 'cherry' in the array ['apple', 'banana', 'cherry', 'date']?
// Replacing Elements:
let fruits2  =['apple', 'banana', 'cherry', 'date'];
fruits2.splice(1,2,'kiwi', 'mango')
console.log(fruits2)


// 3
// Using the splice method, how would you replace 'banana' with 'blueberry' in the array ['apple', 'banana', 'cherry', 'date']?
// Removing All Elements:
let fruits3  =['apple', 'banana', 'cherry', 'date'];
fruits3.splice(1,1,'blueberry');
console.log(fruits3)


// 4
// How can you use the splice method to remove all elements from the array ['apple', 'banana', 'cherry', 'date'] starting from the second element?
let fruits4 = ['apple', 'banana', 'cherry', 'date'];
let length = fruits4.length;
fruits4.splice(2,length)
console.log(fruits4)


// 5
// What is the result of using the splice method with a negative start index to remove 'cherry' from the array ['apple', 'banana', 'cherry', 'date']? Write the code to achieve this.
let fruits5 = ['apple', 'banana', 'cherry', 'date'];
fruits5.splice(-2, 1);
console.log(fruits); 

