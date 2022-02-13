// Give an array of numbers, find the missing numbers bound by its lowest and highest number as a comma delimited list
// Swap to length of the array over low/high bounds
// Write a test that validates the output for each iteration without changing the test
// Example: [1, 3, 5]
// Output: 2,4

let numbers = [4, 7, 8, 11];

///////

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
        fname: 'johnny Adam',
        lname: ' Rogers',
        age: 21,
        likes: ['art', 'rainbows', 'javascript'],
    },
    {
        fname: 'johnny Adam',
        lname: ' Rogers',
        age: 21,
        likes: ['art', 'javascript'],
    },
    {
        fname: 'johnny Adam',
        lname: ' Rogers',
        age: '12',
        likes: [null, 'fortnight', 'grilled cheese', 'javascript', 'sweaters'],
    },
    {
        fname: 'JENNY',
        lanem: 'SMITH',
        age: 36,
        likes: ['corvettes', 'snowboarding'],
    },
];

///////

// Given 0 to N integers, create an function that infinitely sums its args
console.log(sum(1, 4)); // Expected Outcome: 5
console.log(sum(2, 3, 1, 1)); // Expected Outcome: 7
console.log(sum(2, 2, 1, 1)); // Expected Outcome: 6

///////

// Why does this code not work as expected? Fix it without changing the original element query.
// If the documentation didn't exist, how could you figure what types methods are available to this type?
const els = document.querySelectorAll('key');

els.map((el, index) => {
    console.log(el);
});
