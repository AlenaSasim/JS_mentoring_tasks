/**
 * return an array of characters names
 * @param {Array} chars
 * @return {Array} - char names
 */
const chars = require('./characters.json');

console.log('task 1: ');

function getCharactersNames(chars) {
    return chars.map(element => element.name);
}

console.log(getCharactersNames(chars));

/**
 * print (console.log) ids of all characters
 * @param {Array} chars
 */
console.log('task 2: ');

function printCharacterNames(chars) {
    chars.forEach(element => {console.log(element.name);});
}

printCharacterNames(chars);


/**
 * return an array of non-human characters
 * @param {Array} chars
 * @return {Array} - non human characters
 */
console.log('task 3: ');

function getNonHumanCharacters(chars) {
    return chars.filter(element => element.species!="Human");
}

console.log(getNonHumanCharacters(chars));

/**
 * return info about character named 'Jerry Smith'
 * @param {Array} chars
 * @return {Object} - Jerry object
 */
console.log('task 4: ');

function getJerryInfo(chars) {    
    return newArr=chars.find(element => element.name==="Jerry Smith"); 
}

console.log(getJerryInfo(chars));

/**
 * check if all characters are human. return true if all, false if not
 * @param {Array} chars
 * @return {boolean}
 */
console.log('task 5: ');

function isAllHuman(chars) {
    return chars.every(element => element.species==="Human");
}

console.log(isAllHuman(chars));

/**
 * check if there are any Fish-Person characters. return true if any, false if not
 * @param {Array} chars
 * @return {boolean}
 */
console.log('task 6: ');

function isAnyFishPerson(chars) {
    return chars.some(element => element.type==="Fish-Person");
}

console.log(isAnyFishPerson(chars));

/**
 * 1. Write a method to find an index of minimal item from an array;
 * @param {Array} arr
 * @return {number} - minimum element index
 */

console.log('task 7: ');

function minItem(arr) {
    //console.log(arr.length);
    let minElement=Math.min.apply(null,arr);
    //console.log(minElement);
    return arr.indexOf(minElement);
};

console.log(minItem([1, 2, 2, -8]));


module.exports = {
    getCharactersNames,
    printCharacterNames,
    getNonHumanCharacters,
    getJerryInfo,
    isAllHuman,
    isAnyFishPerson,
    minItem
};
