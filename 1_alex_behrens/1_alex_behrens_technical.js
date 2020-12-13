// Make a function that returns any duplicate numbers in an array.
// Only numbers. There will not be any strings, null values, or empty arrays in the input array. Negative numbers may be included.
// If there is a match return the number in an array. There may be more than one pair of duplicates.

// Test inputs and outputs:

// input: [1, 2, 3, 4, 5, 5, 6]
// output: [5]

// input: [10, 20, 30, -5, 10, -5]
// output: [10, -5]


// Interview attempt:

function findDuplicates1 (array) {
  let nonDups = []
  let result = []

  array.forEach(function (number) {
    if (!nonDups.includes(number)) {
      nonDups.push(number)
    } else {
      result.push(number)
    }
  })
  return result
}

console.log(findDuplicates1([10, 20, 30, -5, 10, -5]))

// Interview refactoring attempt: (Does not work)

function findDuplicates2(numbers) {
  let index = 0
  let numbersHash = {}
  

  while (index < numbers.length) {
    if (numbersHash[numbers[index]]) {
      return numbers[index]

    } else {
      numbersHash[numbers[index]]
      
    }
    index += 1
  }
  return numbersHash
  
}

console.log(findDuplicates2([5, 2, 9, 7, 2, 6]))

// Post interview attempt:

function findDuplicates3 (array) {
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

console.log(findDuplicates3([10, 20, 30, -5, 10, -5]))