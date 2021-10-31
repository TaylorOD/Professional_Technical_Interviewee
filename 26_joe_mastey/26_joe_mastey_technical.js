
// create function takes in array
  // Create score variable
  // Create for loop to move trhough array
    // Score adds next frame
  //
  // return score
//

const bowling = (inputArray) => {
  let score = 0
  for (let index = 0; index < inputArray.length; index += 1) {
    let previousThrow = inputArray[index - 1]
    let nextThrow = inputArray[index + 1]

    if (inputArray[index] === "/") {
      if (nextThrow === "-") {
        nextThrow = 0
      }
      let previousFrame = (10 - previousThrow) + nextThrow
      score += previousFrame
    }
    else if (inputArray[index] === "-") {
      score += 0 // Want to evaluate -'s as 0's
    } else {
      score += inputArray[index]
    }
  }
  return score
}

console.log(bowling([1, 5, 4, 4, 8, 0, 5, 3, 0, 0, 4, 5, 2, 3, 8, 1, 7, 1, 1, 1]), "No strike/spare")
console.log(bowling([1, 5, 4, 4, 8, "-", 5, 3, "-", "-", 4, 5, 2, 3, 8, 1, 7, 1, 1, 1]), "No strike/spare - With dash instead of 0")
console.log(bowling([1, 5, 4, 4, 8, "/", 5, 3, "-", "-", 4, 5, 2, 3, 8, "/", 7, 1, 1, 1]), "No strikes - With spares - With dash instead of 0")

[
  {
    frameThrowOne: 8,
    frameThrowTwo: "/",
    frameRemainder: 2,
    frameThrowScore: 15
  },
    frameThrowOne: "-",
    frameThrowTwo: 5,
  {

  }
]