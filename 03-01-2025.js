// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

// Example 1:

// Input: s = "abacbc"
// Output: true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.

var areOccurrencesEqual = function(s) {
    let arr = s.split('');
    let ele = arr[0];
    let countOcc = 0

    for(let i=0 ; i<arr.length ; i++){
        if(arr[i] === arr[0]){
            countOcc += 1;
            ele = arr[0 + 1]
        }
    }
    if(countOcc != 2){
        console.log(false) 
    } else{
        console.log(true) 
    }
};

areOccurrencesEqual('aaabb');



// Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.
// An integer m is a divisor of n if there exists an integer k such that n = k * m.

function isThree(n){
    let totalDivisor = 0;

    for(let i=1 ; i<=n ; i++){
        if(n%i === 0){
            totalDivisor += 1
        }
    }

    if(totalDivisor === 3){
        console.log(true)
    } else {
        console.log(false)
    }
};

isThree(4);


// Find middle index in an array;
// middleindex = even = -1

var findMiddleIndex = function(nums) {
    let lengthOfNumber = nums.length;
    let middleIndex;

    if(lengthOfNumber % 2 != 0){
        middleIndex = lengthOfNumber/2 + 0.5
    } else {
        middleIndex = -1
    }
    

    console.log(middleIndex)
};

findMiddleIndex([2,3,-1,8,4,9]);


// Find Pairs with a Given Sum
// Write a function to find all pairs of numbers in an array that add up to a specific target sum.
// Explain this without the code;
function sumPair(arr, target){
    let pairs = [];

    for(let i=1 ; i<= arr.length ; i++){
        for(let j=0 ; j<=i ; j++){
            if(arr[i] + arr[j] === target){
                pairs.push([arr[i], arr[j]])
            }
        }
    };

    console.log(pairs)
}
sumPair([1, 2, 3, 4, 5] , 6)

