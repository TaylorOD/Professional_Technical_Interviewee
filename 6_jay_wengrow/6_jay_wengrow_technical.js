// Jay Wengrow tips for taking on coding problems:

// 1. confirm the problem with interviewer to ensure you understand it - Find edge cases
// 2. find patterns - use examples of inputs and outputs - get comfortable with the problem
// 3. Strategies - How are you going to solve the problem
// 4. Actually write your code
// 5. Check your work
// 6. Refactor - Look for ares to improve

// Problem:

// Link to Pascals Triangle explication: https://www.mathsisfun.com/pascals-triangle.html

// Write a function that takes in a number and generates an array of the pascals triangle row related to that number
// Examples:
// Input: 1
// Output: [1]
// Input: 2
// Output: [1, 1]
// Input: 6
// Output: [1, 5, 10, 10, 5, 1]

const pascalsTriangle = function (inputNumber) {
  let results = []
  for (let i = 0; i < inputNumber; i += 1) {
    let currentRow = []
    for (let j = 0; j <= i; j += 1) {
      if (j === 0 || j === i) {
        currentRow.push(1)
      } else {
        currentRow.push(results[i - 1][j - 1] + results[i - 1][j])
      }
    }
    results.push(currentRow)
  }
  return results[results.length - 1]
}

console.log(pascalsTriangle(1))
console.log(pascalsTriangle(2))
console.log(pascalsTriangle(6))


// Can you find a more effective recursive solution for this problem?