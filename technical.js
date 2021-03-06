// Jay Wengrow tips for taking on coding problems:

// 1. confirm the problem with interviewer to ensure you understand it - Find edge cases
// 2. find patterns - use examples of inputs and outputs - get comfortable with the problem
// 3. Strategies - How are you going to solve the problem
// 4. Actually write your code
// 5. Check your work
// 6. Refactor - Look for ares to improve


// Write a function that takes in a number and generates an array of the pascals triangle row related to that number
// Examples:
// Input: 1
// Output: [1]
// Input: 2
// Output: [1, 1]
// Input: 6
// Output: [1, 5, 10, 10, 5, 1]


// If input is array above what the output should be
// input: [1, 1]
// output: [1, 2, 1]

// input: [1, 2, 1]
// output: [1, 3, 3, 1]


// input: [1, 3, 3, 1]
// output: [1, 4, 6, 4, 1]

// create results array = [1]
// create base = [1, 1]

// create a loop that the input number of times - base to next loop
// let previousRow = [1, 1]

// create for loop that we will use to move through array, index = 0; index < previousRow.length - 1; index += 1
// create a additionVar = index + 1 variable

// results.push(array[index] + additionVar)

// results.push(1)
// previousRow = results
// returns previousRow

const pascalsTriangle = function (inputNumber) {

}

console.log(pascalsTriangle([1, 1]))
console.log(pascalsTriangle([1, 2, 1]))
console.log(pascalsTriangle([1, 3, 3, 1]))