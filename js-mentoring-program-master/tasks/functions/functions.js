/**
 * write function that adds two numbers
 *
 */
console.log('task 1: ');

function add(a, b) {
	return (a+b);
};

console.log(add(8, 9));

/**
 * write function that return first and last name of given object
 * properties firstName and lastName
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 * }
 */
console.log('task 2: ');

let human = {
	firstName: "John",
	lastName: "Dou"
};

console.log(getFullName (human));

function getFullName(object) {
	return (object.firstName.concat(' ' + object.lastName));
};

/**
 * write fuction that checks if number is odd
 * true if odd, false if even
 */
console.log('task 3: ');

function isOdd(n) {
	return (n%2 != 0);
};

console.log(isOdd(7));
console.log(isOdd(2));

/**
 * write function that return shortest of words in given array
 * e.g ["one", "two", "three"] should return one
 */

console.log('task 4: ');

function getShortest(wordArray) {
	let shortest = wordArray[0];
	for (let i = 1; i < wordArray.length; i++) {
			if (wordArray[i].length<shortest.length) {
				shortest=wordArray[i];
			}
		}
	return(shortest);
};

console.log(getShortest(["one", "twssd9", "three", "1"]));


/**
 * write function that returns word google with given numbers of "o" symbols
 * e.g getGoogle(5) should return "gooooogle"
 */

console.log('task 5: ');

function getGoogle(n) {
	let letter='o';
	return('g' + letter.repeat(n) + 'gle');
};

console.log(getGoogle(5));

/**
 * write function that returns object based on given information (params may be null)
 * getUser("John", "Dou", 42) should return
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 *    age: 42
 * }
 */
console.log('task 6: ');

function getUser(firstName='null', lastName='null', age='null') {
	let human = {};
	human.firstName = firstName;
	human.lastName = lastName;
	human.age = age;
	return(human);
};

console.log(getUser("John", "Dou", 42));
console.log(getUser("John", "Dou"));

/**
 * write function that calculates total path traveled.
 * path represended as array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}]
 */

console.log("task 7:");
function getTotalPath(path) {
	let totalPath=0;
	for (let i = 0; i < (path.length); i++) {	
		totalPath += path[i].distance;
	}
	return (totalPath);
};

let arr=[{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}];
console.log(getTotalPath (arr));


/**
 * write a function that will calculate a discount considering the Amount
 * and the percentage (hint: you need to use the Closure here)
 * @param {amount} num 
 * @param {percentage} num 
 */

console.log('task 8:');

function discountFunction(amount) {
	return function(percentage) {
		return (amount * percentage/100);
	};
};

const discount100x10=discountFunction(100);
console.log(discount100x10(10));

const discount457x19=discountFunction(457);
console.log(discount457x19(19));

/**
 * Write the methods inside the given objects that:
 * 1. console logs keys of the given object
 * 2. returns the string 'My name is John Doe and I am 25 years old. My best friend is Daniel'
 * reffering to the data stored in the object
 */

console.log('task 9:');

const myObject = {
	name: 'John',
	lastName: 'Doe',
	age: 25,
	friends: ['Mike', 'Alan', 'Daniel'],
	keys() {
		// case 1 - Object.keys();
		
		//array
		//console.log(Object.keys(myObject));
		
		//separate strings
		// let  keys = Object.keys(this);
		// for (let i = 0; i < (keys.length); i++) {	
		// 	console.log(keys[i]);}
		
		//case 2 - for ... in
		
		//array
		//let keys = [];
		// for(let key in myObject) {
		// 	keys.push(key);
		// }
		// console.log(keys);
		
		//separate strings
		for (let key in myObject) {
			console.log(`${key}`)}
	},
	call() {
		return ('My name is ' + this.name + ' ' + this.lastName + ' and I am ' + this.age + ' years old. My best friend is ' + this.friends[2]);
	}

};

myObject.keys();
console.log(myObject.call());

module.exports = {
	add,
	getFullName,
	isOdd,
	getShortest,
	getGoogle,
	getUser,
	getTotalPath,
	discountFunction,
	myObject
};