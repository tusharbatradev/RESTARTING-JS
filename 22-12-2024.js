// Object and Map Operations

// Write a function that accepts an array of objects and returns a new array with unique objects based on a specific key.

const items = [
  { id: 1, name: "apple" },
  { id: 2, name: "banana" },
  { id: 1, name: "apple" },
  { id: 3, name: "orange" },
];

function removingDuplicates(array) {
  let uniqueArray = [];
  let seenIds = {};

  for (let i = 0; i < array.length; i++) {
    if (!seenIds[array[i].id]) {
      uniqueArray.push(array[i]);
      seenIds[array[i].id] = true;
    }
  }

  console.log(uniqueArray);
  return uniqueArray;
}

removingDuplicates(items);
