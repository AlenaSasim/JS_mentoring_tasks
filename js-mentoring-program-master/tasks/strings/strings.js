/**
 * 1. Write a method to reverse a string; Function should return the string 'This is not a string'
 * if a number is passed
 * @param {string} str
 */
console.log("task 1:");

function reverseString(str) {
    if (typeof str ==="string")
        return str.split("").reverse().join("");
    else 
        return ('This is not a string!'); 
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
    let century=Math.trunc(year/100);
    if (year<=100) {
        return('1st');
    }
    else if (year%100==0) {
        return(century);
    }
    else if (year%100!=0) {
        return(century + 1);
    }
    else
        return('error: entered value is mot supported')
}

console.log(centuryFromYear(2013));

/**
 * Calculate count of the provided char in the string
 * @param {string} str
 * @param {string} char
 */
console.log("task 3:");

function strCount(str, char) {
    let count = 0;
    for(let i=0; i<str.length; i++) {
      if (str[i]==char)
        { count++;
        }
    }
        return count;
}

console.log(strCount('alena sasim', 'k'));

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
        newArr=newArr.slice(0, num);
        newArr.push('...');
        //console.log(newArr);
        return(newArr.join(""));}
    else 
        return(str);
};

console.log(truncateString('alena sasim', 5));
console.log(truncateString('alena sasim', 11));

/**
 * replace 10 with 'ten' word
 * @param {string} text - input text
 * @return {string} - updated text
 * @example
 * console.log(replace10("231054")) // 23ten54
 */
console.log("task 5:");

function replace10(text) {
    let newStr = text.replace(/10/g, "ten");
    return newStr;
}

console.log(replace10("23105410"));

/**
 * replace value in square brackets with CONFIDENTIAL
 * @param text - input text
 * @return {string} - updated string
 * @example
 * console.log(replaceConfidential("lorem [ipsum] si dolor")) // lorem [CONFIDENTIAL] si dolor
 */
console.log("task 6:");

function replaceConfidential(text) {
    let newStr = text.replace(/\[.*?\]/g, "[CONFIDENTIAL]");
    return newStr;
}

console.log(replaceConfidential("lorem [ipsum] si [dolori]"));

module.exports = {
  reverseString,
  centuryFromYear,
  strCount,
  truncateString,
  replace10,
  replaceConfidential
};
