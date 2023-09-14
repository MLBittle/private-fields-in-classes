//the JS spread operator ...


Math.min(45,23,76,1,2,-4) // -4

const temperatures = [76,72,68,79,54,65];  // undefined

Math.min(temperatures); //NaN

Math.min(...temperatures); //54

Math.min.apply(null, temperatures);  //54

console.log("hello", "there", "!") //hello there!

const tvShows = 

console.log(tvShows) // ["Six Feet Under", "Chernobyl", "Black Mirror", "Fleabag"]

console.log(...tvShows) // Six Feet Under Chernobyl Black Mirror Fleabag

// strings or sets

console.log("this s#@* is bananas:, "BANANAS"); 
//this s#@* is bananas:  BANANAS 

console.log("this s#@* is bananas:, ..."BANANAS"); 
//this s#@* is bananas:  B A N A N A S 



const parents = ["Lorie", "Steve"];
const kids = ['Jake', "Annie", "Jess"];

const fullFamily = [...parents, ...kids];
//["Lorie", "Steve", "Jake", "Annie", "Jess"]

const parents = ["Lorie", "Steve"];
const kids = ['Jake', "Annie", "Jess"];

const fullFamily = [...parents, ...kids];
//["Lorie", "Steve", "Jake", "Annie", "Jess"]

const originals = ["Mona Lisa", "American Gothic", "The School of Athens"];
const copies = [...originals];

originals.push("Nighthawks");
console.log(copies);

const gameBoard = [['O','O'],['O','O'],['O','O']];
const boardCopy = [...gameBoard];
gameBoard[1][0] = "X";

//BOTH NOW LOOK LIKE THIS:
//[["O", "O"],["X", "O"],["O", "O"]]

const mainColors = {brightRed: "#e55039", waterfallBlue: "#38ada9"};
const accentColors = {lightGrey: "#778ca3", swanWhite: "#f7f1e3"};

const fullPalette = {...mainColors, ...accentColors};
//{brightRed: "#e55039", waterfallBlue: "#38ada9", lightGrey: "#778ca3", swanWhite: "#f7f1e3"}


const lion = {hasTail: true, legs: 4};
const eagle = {canFly: true };
const hybrid = {name: "Gryphon", ...lion, ...eagle};

//{name: "Gryphon", hasTail: true, legs: 4, canFly: true}

const todos = [
	{user: "Brick", completed: false, task: "Upload Video"},
	{user: "Lilith", completed: true, task: "Rob Bank"}
]

function addTodo(newTodo){
  todos.push(newTodo);
}



const todos = [
	{user: "Brick", completed: false, task: "Upload Video"},
	{user: "Lilith", completed: true, task: "Rob Bank"}
]

function addTodo(newTodo){
  return [...todos, {...newTodo, completed: false}]
}

const newTodos = addTodo({user: "Mordecai", task: "Feed Bloodwing"});