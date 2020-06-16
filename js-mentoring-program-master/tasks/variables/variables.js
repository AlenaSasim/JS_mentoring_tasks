/**
 * TODO create variable named int and set value equal to 1
*/

let int=1;
console.log('task 1: ' + int);

/**
 *  TODO create variable named int2 and set value equal int plus 1
 */

let int2=int+1;
console.log('task 2: ' + int2);

/**
 * TODO create variable named str and set value equal to "John"
 */

let str="John"
console.log('task 3: ' + str);

/**
 * TODO create variable named str2 and set value equal str plus " Dou"
 */

let str2=str + " Dou"
console.log('task 4: ' + str2);

/**
 * TODO create variable named bool and set value equal to comparison of int and int2 variables
 */

 let bool=int<=int2
 console.log('task 5 part 1: ' + bool);

 bool= int == int2
 console.log('task 5 part 2: ' + bool);

/**
 * TODO create variable named arr and set value array of numbers from 1 to 5
 */

let arr=[1,2,3,4,5];
console.log('task 6: my array is ... ' + arr);

/**
 * TODO create variable named fifth and set value as element of array with index 4
 */

let fifth=arr[4];
console.log('task 7: the 5th array element is ... ' + fifth);

/**
 * TODO create variable named human and set value as object with key firstName and value "John"
 */

let human = { 
    firstName: "John" 
  };

console.log('task 8: first name is ... ' + human.firstName);

/**
 * TODO set new key of human object named lastName and value "Dou"
 */

human.lastName = "Dou"
console.log('task 9: last name is ... ' + human.lastName);

/**
 * TODO set new key of human object named fullName and value of concatenation of firstName and lastName values
 */

 human.fullName = human.firstName.concat(human.lastName);
 console.log('task 10: full name is ... ' + human.fullName);
 console.log('Object includes: ');
 console.log(human);