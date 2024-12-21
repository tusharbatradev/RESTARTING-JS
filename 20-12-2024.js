// Find the Longest Word in a Sentence: Write a function findLongestWord that takes a sentence as input and returns the longest word in the sentence.

function findLongestWord(sentence) {
  let splittedSentence = sentence.split(" ");
  let longestWord = splittedSentence[0];

  for (let i = 1; i < splittedSentence.length; i++) {
    if (longestWord.length < splittedSentence[i].length) {
      longestWord = splittedSentence[i];
    }
  }
  console.log(longestWord);
}

findLongestWord("I want to be a Developer in 2025");

// Removing Repeated Charaters from an string

function removingRepeatingChar(string) {
  let splitString = string.split("");

  let uniqueArray = [];

  for (let i = 0; i < splitString.length; i++) {
    if (!uniqueArray.includes(splitString[i])) {
      uniqueArray.push(splitString[i]);
    }
  }

  let uniqueString = uniqueArray.join("");

  console.log(uniqueString);
}

removingRepeatingChar("ttushaar");

// Check if Two Strings are Anagrams: Create a function areAnagrams that takes two strings and returns true if they are anagrams, and false otherwise.

function checkAnagrams(str1, str2){
  let splitStr1 = str1.toLowerCase().split('');
  let splitStr2 = str2.toLowerCase().split('');

  let sortedArr1 = splitStr1.sort();
  let sortedArr2 = splitStr2.sort();

  let sortedStr1 = sortedArr1.join('');
  let sortedStr2 = sortedArr2.join('');

  if(sortedStr1 === sortedStr2){
    return true
  } else {
    return false
  }
}

console.log(checkAnagrams('Listen', 'Silent'));