// Sum of Digits:
// Write a function that takes a number and returns the sum of its digits.

function sumOfDigits(num) {
  let numStr = String(num);
  let sum = 0;

  for (let i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i], 10);
  }

  console.log(sum);
}

sumOfDigits(456);
