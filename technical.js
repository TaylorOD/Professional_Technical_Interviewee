// write a funciton that checks if a string input is a palindrome
// Example:
// Input:
// "racecar"
// Output:
// true

// Input:
// "coding"
// Output:
// false




// const palindrome = function (inputString) {

//   let j = inputString.length - 1
//   for (let i = 0; i < inputString.length / 2; i += 1){

//     if (inputString[i] != inputString[j]) {
//       return false
//     }
//     j -= 1
//   }
//   return true


// }

// console.log(palindrome("racecar"))
// console.log(palindrome("coding"))

const recursionPalindrome = function (inputString) {

  if (inputString.length === 0 || inputString.length === 1) {
    return true
  }
  if (inputString[0] === inputString[inputString.length - 1]) {
    // console.log(inputString.substring(1, inputString.length - 2))
    return recursionPalindrome(inputString.substring(1, inputString.length - 1))
  }
  return false

}

console.log(recursionPalindrome("racecar"))
console.log(recursionPalindrome("coding"))
