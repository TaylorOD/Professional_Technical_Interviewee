// Write a function that returns true if a string input is a palindrome and false if it is not.
// Write a recursive function that returns true if a string input is a palindrome and false if it is not.
// Bonus points if you know how to spell palindrome :)

// Example:
// Input:
// "racecar"
// Output:
// true

// Input:
// "coding"
// Output:
// false

// Write your code here: (Solutions below)

// Question 1:







// Question 2:













// ------------------------

// Solution 1:
const palindrome = function (inputString) {
  let j = inputString.length - 1
  for (let i = 0; i < inputString.length / 2; i += 1){
    if (inputString[i] != inputString[j]) {
      return false
    }
    j -= 1
  }
  return true
}

console.log(palindrome("racecar"))
console.log(palindrome("coding"))

// Solution 2:
const recursionPalindrome = function (inputString) {
  if (inputString.length === 0 || inputString.length === 1) {
    return true
  }
  if (inputString[0] === inputString[inputString.length - 1]) {
    return recursionPalindrome(inputString.substring(1, inputString.length - 1))
  }
  return false
}

console.log(recursionPalindrome("racecar"))
console.log(recursionPalindrome("coding"))