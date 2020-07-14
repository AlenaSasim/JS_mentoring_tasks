/**
 * 1. Write a method to reverse a string; Function should return the string 'This is not a string'
 * if a number is passed
 * @param {string} str
 */
console.log("task 1:");

function reverseString(str) {
  return str.split("").reverse().join("");
}

let str='gnirts a ton si sihT';
console.log(reverseString(str));

/**
 * 1. Calculate a century by given year
 * if a number is passed
* @param {number} year
*/
console.log("task 2:");

function centuryFromYear(year) {
  if (year<=100) {
      console.log('1st century');
  }
  else if (year%100==0) {
      console.log(Math.trunc(year/100) + ' century');
  }
  else if (year%100!=0) {
      console.log(Math.trunc(year/100) + 1 + ' century');
  }
  else
      console.log('error: entered value is mot supported')
}

centuryFromYear(2013);

/**
 * Calculate count of the provided char in the string
 * @param {string} str
 * @param {string} char
 */
console.log("task 3:");

function strCount(str, char) {
//  console.log(str.split(""));
}

strCount('    alena sasim');

/**
 * We need to reduce the length of the string or truncate it if it is longer
 * than the given maximum length specified and add ... to the end. If it is not that long then we keep it as is.
 * @param {string} str - the initial string
 * @param {num} num - by wht amount of chars it should be truncated
 */
console.log("task 4:");

function truncateString(str, num) {
  let newArr=[];
  newArr= str.split("");
  let length=newArr.length;
//console.log(newArr);
 if (newArr.length > num) {
let x = newArr.shift();
//console.log (x);
 newArr.push(x);
//console.log(newArr);
 console.log(newArr.join(""));}
else console.log(str);
};


truncateString('alena sasim', 6);
truncateString('alena sasim', 11);

/**
 * replace 10 with 'ten' word
 * @param {string} text - input text
 * @return {string} - updated text
 * @example
 * console.log(replace10("231054")) // 23ten54
 */
console.log("task 5:");

function replace10(text) {

}

/**
 * replace value in square brackets with CONFIDENTIAL
 * @param text - input text
 * @return {string} - updated string
 * @example
 * console.log(replaceConfidential("lorem [ipsum] si dolor")) // lorem [CONFIDENTIAL] si dolor
 */
console.log("task 6:");

function replaceConfidential(text) {

}

module.exports = {
  reverseString,
  centuryFromYear,
  strCount,
  truncateString,
  replace10,
  replaceConfidential
};
