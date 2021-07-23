// You are given two strings pattern and s. The first string pattern
// contains only the symbols 0 and 1, and the second string s contains only
// lowercase English letters.

// Let's say that pattern matches a substring s[l..r] of s if the following
// 3 conditions are met:

// - they have equal length;
// - for each 0 in pattern the corresponding letter
// in the substring is a vowel;
// - for each 1 in pattern the corresponding
// letter is a consonant.  Your task is to calculate the number of
// substrings of s that match pattern.

// Note: In this task we define the vowels as 'a', 'e', 'i', 'o', 'u', and
// 'y'. All other letters are consonants.

// ---

// pattern = 0's or 1's will change
// s = some set of character, a, e, i, o, u, y
// Patten empty = return = - can be empty

// return number of substrings that match

// O's are vowels
// 1's are consonants

// Example:

// For pattern = "010" and s = "amazing", the output should be binaryPatternMatching(pattern, s) = 2.

// Example:
// input: patten = "0", s = "aaaa"
// output: 4

// Example:
// input: pattern = "0000001", s = "abv"
// Output: 0

// Create the function that takes in pattern and s
  // if check (pattern.length === 0) {
    // return 0
  // }
  // if check (pattern,length > string.length) {
    // return 0
  // }
  // let result = 0
  // for loop index, index < string.length index += 1{
      // if (characterConverter(string.substring(index, pattern.length)) === pattern) {
        // result += 1
      // })
  // }
  //
  // return result
//

// Const charConvert (substring) {
  // const vowel = [a: true,e,i,o,u,y]
  // let result = ""
  // for loop index
    // if (vowel[substring[index]] ) {
        // result,push(0)
    // } else {
        // result.push(1)
    // }
    // return result
// }

function binaryPatternMatching(pattern, string) {
  let result = 0
  for (let index = 0; index <= string.length; index += 1) {
    if (charConvert(string.substring(index, pattern.length + index)) === pattern) {
      result += 1
    }
  }
  return result
}

const charConvert = function (substring) {
  const vowel = {"a": true, "e": true, "i": true, "o": true, "u": true, "y": true}
  let functionResult = ""
  for (let i = 0; i < substring.length; i += 1) {
    if (vowel[substring[i]]) {
      functionResult += "0"
    } else {
      functionResult += "1"
    }
  }
  return functionResult
}

console.log(binaryPatternMatching("0", "aaaa"))