// Factorial

let factorial = (num) => {
  let factorial = 1;

  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }

  console.log(factorial);
};

factorial(4);

// Array Manipulation:
// Write a function that takes an array of numbers and returns a new array with each number doubled.

function doubledArray(arr) {
  let doubleArr = [];

  for (let i = 0; i < arr.length; i++) {
    doubleArr.push(arr[i] * 2);
  }

  console.log(doubleArr);
}

doubledArray([2, 4, 6, 8, 7]);

// String Operations:
// Write a function that counts the number of vowels in a given string.

function Vowels(string) {
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
}

Vowels("Tushar");


// Object Operations:
// Write a function that takes an object and returns an array of its keys.

function keysOfObject(obj){
    let keys = Object.keys(obj);

    console.log(keys)
};

keysOfObject({
    name : 'Tushar',
    Contact : 9589540876,
    age : 21,
    sex : 'Male'
});


// Write a function that takes two objects and returns a new object that merges the properties of both. If a property exists in both objects, the value from the second object should be used.

function mergeObjects(obj1 , obj2){
    
}