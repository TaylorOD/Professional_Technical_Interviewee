// Question: https://docs.google.com/document/d/1-bkBQZ3SuRhEPg4RXdJ_mJn4hEniiorrVYJXeaT5pPA/edit

// Full Stack Engineer
// The interview will be conducted over video chat, including both face-to-face discussion and pair programming using the screenshare feature. The interviewer is there to answer any of your questions about this exercise and to guide you if you get stuck on any part. It will be a collaborative process where we will be looking to see how you map out a problem and its solution. What are the considerations you are making as you code? We'll also discuss technical topics and how you approach learning new subjects.
// To best prepare for this interview, please make sure you have a local development environment available to use (your language of preference). You will need access to a code editor and some way to run the program.
// Your task will be to write a program that takes two inputs - positions and locations and has one output - positionsCreated. You will use information from both inputs to determine what positions to create as the output.
// The positions and locations inputs will each be an Array containing Objects (or their language specific equivalent).
// A position will have the following keys: id (Number), location_id (Number), status (String), remote (Boolean, optional).
// A location will have the following keys: id (Number), title (String).
// The expected output of the program should be an Object (or its specific language equivalent) with two keys, one that stores an Array of remote position Objects and the other stores an Array of on-site filled position Objects. Please keep the following Business Rules in mind:
// If a position has an initial status of anything other than 'open', it should not be created.
// A position being created should include an additional field of location_title, which is the value of the title in the locations Array.
// The status of a position to be created should be 'filled'.
// An example output in JavaScript might look something like this:
// {
// 	remote: [
// 		{
// 			id: 1,
// 			location_id: 1,
// 			location_title: 'first location',
// 			remote: true,
// 			status: 'filled',
// 		},
// 		{
// 			id: 5,
// 			location_id: 3,
// 			location_title: 'third location',
// 			remote: true,
// 			status: 'filled',
// 		},
// 	],
// 	onSite: [
// 		{
// 			id: 2,
// 			location_id: 2,
// 			location_title: 'second location',
// 			status: 'filled',
// 		},
// 		{
// 			id: 4,
// 			location_id: 2,
// 			location_title: 'second location',
// 			status: 'filled',
// 		},
// 	],
// }

// Solution -  Taylor Attempt:
let positions = [
  {
    id: 1,
    location_id: 1,
    status: "open",
    remote: true,
  },
  {
    id: 2,
    location_id: 2,
    status: "closed",
    remote: false,
  },
  {
    id: 3,
    location_id: 2,
    status: "open",
  },
]

let locations = [
  {
    id: 1,
    title: "First Location",
  },
  {
    id: 2,
    title: "Second Location",
  },
  {
    id: 3,
    title: "Third Location",
  },
]

// Create function that takes in both unputs
// Create remote array
// Create onsite array
// Create positions created object
// Create for loop to move through positions
  // Check if "open"
    // Check if remote
    // If so add to remote with status filled
    // else
    // add to onsite with status filled
  //
// add remote and onsite array to positions create object
// Return positionsCreated object

let mikeFunction = (positions, locations) => {
  let remote = []
  let onsite = []
  let positionsCreated = {}

  let filteredPositions = positions.filter(position => position.status === "open")

  let remotePositions = filteredPositions.filter(function (position) {
    if (position.remote && position.remote === true) {
      return position
    }
  })

  let onsitePositions = filteredPositions.filter((position) => position.remote || position.remote === false)
  console.log(remotePositions)

  // add remote and onsite array to positions created
  // return positionsCreated
}

console.log(mikeFunction(positions, locations))