// /**
//  * Write the function that will calculate the amount of discount
//  * considering the redemption amount
//  * Rules are the following:
//  * - 0    - 350:  0%
//  * - 351  - 1350: 15%
//  * - 1351 - 2700: 30%
//  * - 2701 - 6500: 45%
//  * @param {number} redemption amount (0 - 9999)
//  * @returns {number} discount in percent
//  */

// function calculateDiscount(redemption) {
//   let discount;

//   //PLACE YOUR CODE HERE

//   return discount;
// }

/** TODO
 * implement factorial algorithm using for, while, do..while operators
 */
{
  const i = 10; //10! = 3628800
  let factorial= i;

//for
console.log('Task 1: variant 1 (for)')
for (j=0;j<(i-1);j++) {
  factorial=factorial*(j+1);
}
console.log('factorial is ' + factorial);

//while
// console.log('Task 1: variant 2 (while)')
// j=0;
// while (j<(i-1)) {
//   factorial=factorial*(j+1);
//   j++;
// }
// console.log('factorial is ' + factorial);

// do ... while
// console.log('Task 1: variant 3 (do ... while)')
// j=0;
// do {
//   factorial=factorial*(j+1);
//   j++;
// }
// while (j<(i-1));
// console.log('factorial is ' + factorial);

}


/**
 * return concatenated string from an array of substring
 */
{
  const substr = ["I", " love", " JS"];
  let concat='';
  for (i=0;i<(substr.length);i++){
    concat=concat + substr[i];
  }
  console.log("Task 2: " + concat);
}

/**
 * calculate a total of income of certain person
 */
// {
//   const personIncomes = {
//     salary: 1985,
//     rent: -600,
//     interestOnDeposit: 250,
//     otherExpences: -300
//   };
// }

// module.exports = calculateDiscount;
