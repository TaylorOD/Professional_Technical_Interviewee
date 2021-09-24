// let array = [1, 2, 3, 4, 5, 6, 1, 3]
// Using that array find the duplicate in the list
// It only has to return the first duplicate found
// All numbers are positive integers and the array will always have a duplicate

// create the function that takes in array of numbers

// create our map object
// let map = {}

// create a for loop to move through array of numbers
// if check to see if item does not exist in hashmap
  // if it doesnt then create/add it
  // else
  // return array[index]


// console.log(array)

const findDup = (inputNumbers) => {
  let map = {}
  for (let index = 0; index < inputNumbers.length; index += 1) {
    if (!map[inputNumbers[index]]) {
      map[inputNumbers[index]] = 1
    } else {
      return inputNumbers[index]
    }
  }
}

console.log(findDup([1, 2, 3, 4, 5, 6, 1, 3]))

array[1]
