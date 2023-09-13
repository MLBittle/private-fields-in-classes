class Person {
  #id = Math.floor(Math.random() * 1000);

  getId() {
    return this.#id; // Write code here
}
}
class_exports = Person();

const person = new Person();
const Person = require('./person');

console.log(person1, getId());
