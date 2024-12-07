// Map, Filter and reduce

// Map
// 1 Square Each Number
// Given an array of numbers, return a new array where each number is squared.
let arr = [5, 6, 33, 5, 48, 5, 12];
let squaredArray = arr.map((i) => {
  return i * i;
});
console.log(squaredArray);

// 2 Convert to Uppercase
// Given an array of strings, return a new array where each string is converted to uppercase.
let arr2 = ["tushar", "batra", "riya", "batra"];
let upperCaseArray = arr2.map((i) => {
  return i.toUpperCase();
});
console.log(upperCaseArray);

// 3 Add Prefix
// Given an array of names, return a new array where each name has a prefix (e.g., "Mr./Ms.") added to it.
let arr3 = ["Tushar", "Aman", "Karan"];
let correctArray = arr3.map((i) => {
  return `Mr. ${i}`;
});
console.log(correctArray);

// 4 String Lengths
// Given an array of strings, return a new array containing the lengths of each string.
let arr4 = ["Tushar", "Karan", "Aman", "Riya"];
let lengthArray = arr4.map((i) => {
  return i.length;
});
console.log(lengthArray);

// 5 Object Transformation
// Given an array of objects with properties firstName and lastName, return a new array of objects with a single property fullName that combines the two.
let arr5 = [
  {
    firstName: "Tushar",
    lastName: "Batra",
  },
  {
    firstName: "Riya",
    lastName: "Batra",
  },
  {
    firstName: "Aman",
    lastName: "Verma",
  },
];
let fullNameArray = arr5.map((i) => {
  return { fullName: `${i.firstName} ${i.lastName}` };
});
console.log(fullNameArray);

// 6 Array of Objects to Array of Strings
// Given an array of objects with a name property, return a new array containing just the names.
let arr6 = [{ name: "Tushar" }, { name: "Riya" }, { name: "Aman" }];
let nameArray = arr6.map((i) => {
  return i.name;
});
console.log(nameArray);

// 7 String Reversal
// Given an array of strings, return a new array where each string is reversed.
let arr7 = ["Tushar", "Batra", "Riya", "Aman", "Karan"];
let reversedStringArray = arr7.map((i) => {
  let splittedArray = i.split("");
  let reversedArray = splittedArray.reverse();

  let joinedArray = reversedArray.join("");
  return joinedArray;
});
console.log(reversedStringArray);

// 8 Extract Initials
// Given an array of full names, return a new array where each name is transformed into initials.
let fullName = ["Tushar Batra", "Riya Batra", "Aman Verma", "Kanak Thakur"];
let initialArray = fullName.map((i) => {
  let splittedName = i.split(" ");

  let initials = splittedName.map((name) => name[0]).join("");
  return initials;
});
console.log(initialArray);

// 9 Map Boolean to String
// Given an array of boolean values, return a new array where true is converted to "yes" and false is converted to "no".
let arr9 = [true, false, true, false, true, true];
let convertedArray = arr9.map((i) => {
  if (i === true) {
    return "yes";
  } else {
    return "no";
  }
});
console.log(convertedArray);

// 10 Extract Domain from Emails
// Given an array of email addresses, return a new array containing just the domain part of each email.
let arr10 = [
  "tusharbatra08@gmail.com",
  "riyabatra1998@gmail.com",
  "karan@hotmail.com",
];
let domains = arr10.map((i) => {
  let splitEmails = i.split("@");

  return splitEmails[1];
});
console.log(domains);


// FILTER
// 1 Filter Even Numbers
// Given an array of numbers, return a new array containing only the even numbers.
let nums = [2,5,8,7,22,56,81];
let evenNums = nums.filter((i) => {
    if(i%2 === 0){
        return i
    }
})
console.log(evenNums)

// 2 Filter Strings Longer than 5 Characters
// Given an array of strings, return a new array containing only the strings longer than 5 characters.
let strings = ['Tushar', 'Aman', 'Riya', 'Kanak', 'Narayan'];
let longerStrings = strings.filter((i)=>{
    if(i.length > 5){
        return i
    }
})
console.log(longerStrings)

// 3 Filter Valid Email Addresses
// Given an array of email addresses, return a new array containing only the valid email addresses (e.g., those that contain an "@" symbol).
let emails = ['tusharbatra08@gmail.com', 'riyabatra.com', 'avman1998@gmail.com', 'pushpa.com'];
let validEmails = emails.filter((i) => {
    if(i.includes('@')){
        return i
    }
})
console.log(validEmails);

// 4 Filter Prime Numbers
// Given an array of numbers, return a new array containing only the prime numbers.
let numbers = [2,8,7,12,22,23,17];
let primeNumbers = numbers.filter((i)=>{
    let divisibleCounter =  0;

    for(let j=1 ; j<=i ; j++){
        if(i%j ===0){
            divisibleCounter += 1
        }
    }

    if(divisibleCounter === 2){
        return i
    }
})
console.log(primeNumbers);

// 5 Filter Adults
// Given an array of people objects with an age property, return a new array containing only the people who are 18 or older.
let peoples = [{
    name : 'Tushar',
    age : 21
}, {
    name : 'Vivo',
    age : 4
} , {
    name : 'Riya',
    age : 18
}, {
    name : 'Aman',
    age : 25
} , {
    name : 'Sanjam',
    age : 17
}];
let adults = peoples.filter((i)=>{
    if(i.age >= 18){
        return i
    }
})
console.log(adults);

// 6 Filter Non-Empty Strings
// Given an array of strings, return a new array containing only the non-empty strings.
let str = ['Tushar','','Riya','','','Tuffy'];
let newStr = str.filter((i)=>{
    if(i.length > 1){
        return i
    }
})
console.log(newStr);

// 7 Filter Unique Values
// Given an array of numbers, return a new array containing only the unique values (no duplicates).
let numbs = [12,11,2,12,11,126,5,89,54,6];

