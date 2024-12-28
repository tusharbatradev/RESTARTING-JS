// fibonacci
function fibonacci(range) {
  let fib = [0, 1];

  for (let i = 2; i < range; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  console.log(fib);
}

fibonacci(8);

// FizzBuzz:
// Write a function that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".
// function FizzBuzz(range) {
//   for (let i = 1; i <= range; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// FizzBuzz(100);

// Missing Number in Array:
// Given an array of integers from 1 to n with one number missing, write a function to find the missing number.
function missingNumber(array) {
    let missingNum = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] - array[i - 1] !== 1) {
            missingNum = array[i - 1] + 1;
            break; // Exit the loop once the missing number is found
        }
    }

    console.log(missingNum);
}

missingNumber([1, 2, 3, 5, 6, 7, 8]);

// Check for Balanced Parentheses:
// Write a function to check if a string has balanced parentheses.
function isBalancedParentheses(str) {
    let stack = [];

    for (let char of str) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0) {
                return false; // Unmatched closing parenthesis
            }
            stack.pop();
        }
    }

    return stack.length === 0;
}

console.log(isBalancedParentheses("()")); // true
console.log(isBalancedParentheses("(()")); // false

