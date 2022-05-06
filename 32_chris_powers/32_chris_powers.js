// Link: https://gist.github.com/chrisjpowers/c6d1f96ca139ec1747448995404d6d43

// Write a function that takes a string as an argument and returns an index of the positions of words in the string.

// Example:
// For the string "apple orange fox yellow apple banana potato potato"

//   "apple" -> 0, 4
//   "orange" -> 1
//   "fox" -> 2
//   "yellow" -> 3
//   "banana" -> 5
//   "potato" -> 6, 7

// If enpty string return empty object
// Follow-up questions:

// * If you haven't yet, how would you test this?
// * What edge cases could be considered?
// * How could you scale this if the input data were prohibitively large?
// * Implement a function to reverse the process and generate an input string from the word => count map.

// split string and make into array
// loop through array
  // check if item exists in object if not create it and add index as value
  // if it does then add index as additional value
// return object 

const stringParser = (inputString) => {
  let result = {}
  if (inputString === undefined || !inputString.length) {
    return result
  }
  let splitString = inputString.split(" ")
  
  for (let index = 0; index < splitString.length; index += 1) {
    if (!result[splitString[index]]) {
      result[splitString[index]] = [index]
    } else {
      result[splitString[index]].push(index)
    }
  }
  return result;
}

console.log(stringParser("apple orange fox yellow apple banana potato potato"))
console.log(stringParser("apple apple apple apple apple apple apple apple apple apple apple apple apple apple"))
console.log(stringParser("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa apple apple carrot"))
console.log(stringParser(""))
console.log(stringParser())
