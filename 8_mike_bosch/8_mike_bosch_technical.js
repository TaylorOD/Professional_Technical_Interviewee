// Given a list of numbers, can you find the two numbers that sum up to a particular value?

// input: [12, 3, 4, 1, 6, 10], n = 22

// output: [12, 10]

// if targetNumber - currentArrayElement exists in the hash
// Add the current array element and targetNumber - currentArrayElement

// elsif ()

const sumPair = function (inputArray, targetNumber) {
  let hash = {}
  let result = []

  for (let i = 0; i < inputArray.length; i += 1) {
    if (!hash[inputArray[i]]) {
      hash[inputArray[i]] = true
    }
  }

  for (let j = 0; j < inputArray.length; j += 1) {
    if (hash[targetNumber - inputArray[j]]) {
      result.push(inputArray[j], targetNumber - inputArray[j])
      return result
    }
  }
}

// console.log(sumPair([12, 3, 4, 1, 6, 10], 22))
// console.log(sumPair([12, 3, 4, 1, 6, 10], 15))

const sumPairTwo = function (inputArray, targetNumber) {
  let hash = {}
  let result = []

  for (let i = 0; i < inputArray.length; i += 1) {
    if (hash[targetNumber - inputArray[i]]) {
        result.push(inputArray[i], targetNumber - inputArray[i])
        return result
    } else {
      hash[inputArray[i]] = true
    }
  }
}

console.log(sumPairTwo([12, 3, 4, 1, 6, 10], 22))
console.log(sumPairTwo([12, 3, 4, 1, 6, 10], 15))
console.log(sumPairTwo([3, 12, 4, 1, 6, 10], 15))