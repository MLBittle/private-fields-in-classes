//works with objects and arrays.

//Objects

// let person = {
// firstName: 'Sonny',
// laststName: 'Sangha',
 //};

 //let personFirstName = person.firstName;
 //let personLastName = person.lastName;

 //personFirstName
 //personLastName

//Access Object the new way

let { firstName, lastName } = person;  //could be const

firstName
lastName  

// can also RENAME the variables with the new way

let { firstName: fName, lastName: lName } = person

fName
lName

// What happens if you destruct a property that does not exist?

let person = {
  firstName: 'Sonny',
  laststName: 'Sangha',
  };

 let { firstName, lastName, middleName } = person;
 console.log(middleName); //undefined


//setting defaults when object constructing

let person = {
  firstName: 'Sonny',
  laststName: 'Sangha'
  currentAge: 28
};

let { firstName, lastName, middleName = '', currentAge: age = 20 } = person;

console.log(middleName); // ''
console.log(age);  // 28  will default to 20 if no age provided


let person = {
  firstName: 'Sonny',
  laststName: 'Sangha',
  middleName: 'Singh,'
};

let { firstName, lastName, middleName = '', currentAge: age = 20 } = person;


console.log(middleName);  // 'Singh'
console.log(age);  // 20 


// old way to assign elements of an Array to variables, you would do it like this:

// const arr  = [1, 2, 3];

//let x = arr[0];
//let y = arr[1];
//let z = arr[2];

// x
// y
// z

let [x, y, z] = arr;// 0,1,2

x
y
z

// you can assign multiple variables like this:

let [a, b, c, d] = [1, 2, 3, 4];

// destructuring assignment in arrays:

const arrValue = ['one', 'two', 'three'];

const [x,,z] = arrValue;

console.log(x);  // one
console.log(z); // three

// skipping 2 values will give an undefined

// you can assign the remaining elements of an array to a vairable using the spread syntax '...'

const names = ['Sonny', 'Jay', 'Brian', 'Rodgers'];

//deconstructuring assignment in arrays 
// assigning remaining elements ot y

const [x, ...y] = names;

console.log(x);  // Sonny
console.log(y); // ['Jay', 'Brian', 'Rodgers']

// Works with Object destructuring as well:


const person = {
  name: 'Sonny Sangha',
  age: 28,
  gender: 'Male',
}

//destructuring assignment and assigning remaining properties to rest

let { name, ...rest } = person;

console.log(name); // Sonny Snagha
console.log(rest); // {age; 28, gender: 'Male'}

//rest has to be at the end of the elements

const [..., z] // gives error message

// swap 2 variables using syntax

let name1 = 'Sonny';
let name2 = 'Jay';

[name1, name2] = [name2, name1];

console.log(name1); // Jay
console.log(name2); // Sonny

// A function mah return an object or null in some situations.

function getPerson() {
  return null;
}
let { firstName, lastName } = getPerson();

console.log(firstName, lastName);  // error

//avoid this by using the OR operato (||) to fallback the null object

let { firstName, lastName } = getPerson() || {};

console.log(firstName, lastName);


// Nested Object destructuring. Assuming you have a member in the PAPAFAM wher the object has a name object as the property.

let member = {
  id: 01,
  name: {
    firstName: 'Sonny'
    lastName: 'Sangha'
  
  }
};

// Here's how to destructiur it

let { id, name: { firstName, lastName} } = member;

console.log(id); // 01
console.log(name); // blank
console.log(firstName); // Sonny
console.log(lastName); // Shngha

// Fix


let member = {
  id: 01,
  name: {
    firstName: 'Sonny'
    lastName: 'Sangha'
  
  }
};

let { id, name: {firstName, lastName }, name} = member;

console.log(firstName); // Sonny
console.log(lastName); // Shngha
console.log(name); // {firstName: 'Sonny', lastName: 'Sangha'}


// destructure the object argument passed into the function

let displayFullName = (person) => `${person.firstName} ${person.lastName}`;

let person = {
  firstName: 'Sonny' 
  lastName: 'Sangha'
};

displayFullName(person); //'Sonny Sangha'

//deconstrut code

let displayFullName = ({firstName, lastName}) => `${pfirstName} ${lastName}`;

let person = {
  firstName: 'Sonny' 
  lastName: 'Sangha'
};

displayFullName(person); //'Sonny Sangha'

//the ES6 is cleaner




















