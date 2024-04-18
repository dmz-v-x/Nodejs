const name = "Himanshu";
let age = 25;
const hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobbies) => {
  return `Name is ${userName} age is ${userAge} and the user has hobbies: ${userHasHobbies}`;
};

console.log(summarizeUser(name, age, hasHobbies));
