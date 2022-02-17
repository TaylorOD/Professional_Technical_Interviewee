// Give an array of numbers, find the missing numbers bound by its lowest and highest number as a comma delimited list
// Swap to length of the array over low/high bounds
// Write a test that validates the output for each iteration without changing the test

// Example: [1, 3, 5]
// Output: 2,4

// e2: [1, 3]
// O: 2

// e3: []
// O: []



// let numbers = [4, 7, 9, 8, 11]

// const returnMissing = (numbers) => {
//   let results = []
//   numbers.sort(function (a, b) {
//     return a - b
//   })
//   for (let index = numbers[0]; index < numbers[numbers.length - 1]; index += 1) {
//     if (!numbers[index]) {
//       results.push(index)
//     }
//   }
//   return results
// }

// console.log(returnMissing(numbers))




// A services team provides an API that returns a set of Salesforce records. The UI calls for cleaning the data to proper English formatting and displaying under certain criteria.
// Output an array with the names combined and cleaned for each user that likes Javascript (which is everyone of course) and is or over the age 21.
// The array should contain only the names sorted age ascending.
// How would you handle duplicate records? Empty values? How would your solution handle 1 million records?

const sfUsers = [
    {
        fname: 'Pamb  ', // It's like combbb
        lname: 'Cicero',
        age: 92,
        likes: ['snowboarding', '', 'workout', 'javascript'],
    },
    {
        fname: 'johnny Adam2',
        lname: ' Rogers',
        age: 21,
        likes: ['art', 'rainbows', 'javascript'],
    },
    {
        fname: 'johnny Adam2',
        lname: ' Rogers',
        age: 21,
        likes: ['art', 'javascript'],
    },
    {
        fname: 'johnny Adam1',
        lname: ' Rogers',
        age: 12,
        likes: [null, 'fortnight', 'grilled cheese', 'javascript', 'sweaters'],
    },
    {
        fname: 'JENNY',
        lanem: 'SMITH',
        age: 36,
        likes: ['corvettes', 'snowboarding'],
    },
];
// Return 21 or over first names sorted by age
const firstNames = (inputData) => {
  let results = []
  inputData.sort(function (a, b) {
    return a.age-b.age
  })
  inputData.forEach( person => {
    if (person.age >= 21) {
      results.push(person.age)
    }
  })
  return results
}

console.log(firstNames(sfUsers))
