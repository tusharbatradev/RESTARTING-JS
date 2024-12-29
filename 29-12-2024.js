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

var isThree = function (n) {
  var divisibleCounter = 1;

  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      divisibleCounter += 1;
    }
  }

  if (divisibleCounter == 3) {
    return true;
  } else {
    return false;
  }
};
console.log(isThree(5));

var findGCD = function (nums) {
  let smallestNum = nums[0];
  let largestNum = nums[0];
  let gcd = 0;

  for (let i = 1; i < nums.length; i++) {
    if (smallestNum > nums[i]) {
      smallestNum = nums[i];
    }
  }

  for (let i = 1; i < nums.length; i++) {
    if (largestNum < nums[i]) {
      largestNum = nums[i];
    }
  }

  for (let i = 1; i <= largestNum; i++) {
    if (smallestNum % i === 0 && largestNum % i === 0) {
      gcd = i;
    }
  }

  console.log(gcd);
};

findGCD([3, 3]);

// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
// Return the resulting string.
var reversePrefix = function (word, ch) {
  let index = word.indexOf(ch);

  if (index !== -1) {
    let reversedSegment = word
      .slice(0, index + 1)
      .split("")
      .reverse()
      .join("");
    return reversedSegment + word.slice(index + 1);
  }

  return word;
};

console.log(reversePrefix("abcdefd", "d"));
console.log(reversePrefix("abcdefd", "z"));


// Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

// The value of |x| is defined as:

// x if x >= 0.
// -x if x < 0.
// Input: nums = [1,2,2,1], k = 1
// Output: 4
// Explanation: The pairs with an absolute difference of 1 are:
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1];

var countKDifference = function(nums, k) {
    let totalPairs = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) === k) {
                totalPairs += 1;
            }
        }    
    }

    console.log(totalPairs);
};

countKDifference([1, 2, 2, 1], 1);  

