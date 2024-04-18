const hobbies = ["Sports", "Cooking"];
console.log(hobbies);
const copiedArray = hobbies.slice(); // slice is used to copy an array.
console.log(copiedArray);

// Spread Operator
const newArray = [...hobbies, "Coding"];
console.log(newArray);

// Rest Operator

const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));
