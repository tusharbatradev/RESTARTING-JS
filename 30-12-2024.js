function areNumbersAscending(str) {
    let numbers = [];
    let currentNumber = '';

    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i]) && str[i] !== ' ') {
            currentNumber += str[i];
        } else {
            if (currentNumber.length > 0) {
                numbers.push(parseInt(currentNumber));
                currentNumber = '';
            }
        }
    }

    if (currentNumber.length > 0) {
        numbers.push(parseInt(currentNumber));
    }

    // Check if the numbers are in ascending order
    let ascending = true;
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] >= numbers[i + 1]) {
            ascending = false;
            break;
        }
    }

    return ascending;
}

console.log(areNumbersAscending('hello world 5 x 5')); 


// A distinct string is a string that is present only once in an array.
// Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

// Note that the strings are considered in the order in which they appear in the array.
// Example 1:
// Input: arr = ["d","b","c","b","c","a"], k = 2
// Output: "a"
// Explanation:
// The only distinct strings in arr are "d" and "a".
// "d" appears 1st, so it is the 1st distinct string.
// "a" appears 2nd, so it is the 2nd distinct string.
// Since k == 2, "a" is returned. 
var kthDistinct = function(arr, k) {
    let distinct = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            distinct.push(arr[i]);
        }
    }

    if (distinct.length >= k) {
        return distinct[k - 1];  
    } else {
        return "";  
    }
};

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));  

