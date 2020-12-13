// make function that takes first element of array - using a for loop
// run a second for loop that checks if element exists in array
// return the number if there is a match 

// refactor - liner time - only one loop

// function findDuplicates(numbers) {
//   let index = 0
//   let numbersHash = {}
  

//   while (index < numbers.length) {
//     if (numbersHash[numbers[index]]) {
//       return numbers[index]

//     } else {
//       numbersHash[numbers[index]]
      
//     }
//     index += 1
//   }
//   return numbersHash
  
// }

// console.log(findDuplicates([5, 2, 9, 7, 2, 6]))




// write a fucntion that accepts a list of integers and returns a numbers in that lists that have duplicates
// input: [1, 2, 3, 4, 5, 5, 6]
// output: [5]

// input: [10, 20, 30, -5, 10, -5]
// output: [10, -5]

// may not be any duplcates 
// may be more than one pair of duplicates 


// create the funciton
// take array[index] and see if array[index] is in hash
// if not in hash => add to hash
// if is in hash => add it to results array to be returned

// function findDuplicates (array) {
//   let nonDups = []
//   let result = []

//   array.forEach(function (number) {
//     if (!nonDups.includes(number)) {
//       nonDups.push(number)
//     } else {
//       result.push(number)
//     }
//   })
//   return result
// }

// console.log(findDuplicates([10, 20, 30, -5, 10, -5]))

// Ask if sorted, ask if null or check for it

function findDuplicates (array) {
  let nonDups = {}
  let result = []

  for (let i = 0; i < array.length; i += 1) {
    if (!nonDups[array[i]]) {
      const item = array[i]
      nonDups[item] = true
    } else if (nonDups[array[i]]) {
      const item = array[i]
      result.push(item)
    }
  }
  return result
}

console.log(findDuplicates([10, 20, 30, -5, 10, -5]))