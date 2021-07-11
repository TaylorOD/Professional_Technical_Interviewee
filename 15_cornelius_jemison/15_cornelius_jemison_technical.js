// write a function that can test if a string is a palindrome

// numbers and letters can be passed in
// no empty strings

// input: racecar
// Output: true

// input: 123
// out: false

// input: r1r
// Output: true

// let frontpointer = inputString[0]
// let backpointer = inputString.last

// for loop
// return false if front and back pointer dont equal each other
// increment front pointer, decrement backpointer

// return true

const palindromeChecker = function (inputString) {
  for (let i = 0; i < inputString.length; i += 1) {
    let frontPointer = inputString[i]
    let backPointer = inputString.charAt(inputString.length - i - 1)
    if (frontPointer !== backPointer) {
      return false
    }
  }
  return true
}

console.log(palindromeChecker("racecar")) //true
console.log(palindromeChecker("123")) //false
console.log(palindromeChecker("r1r")) //true
console.log(palindromeChecker("r11r")) //true