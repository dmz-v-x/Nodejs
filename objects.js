const person = {
  name: "Himanshu",
  age: 25,
  greet() {
    console.log("Hi I am " + this.name);
  },
};

person.greet();
