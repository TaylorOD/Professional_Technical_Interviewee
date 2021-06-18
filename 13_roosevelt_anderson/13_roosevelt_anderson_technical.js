// Given a 2 dimensional array that represents a maze, print the path through the maze.
// The entrance of the maze will be the first row of the array, the exit will be the last row of the array.
// For this excerise there is only one valid path through the maze.

// Below is an example:



let T = [
[1,0,1,1,1,1,1,1,1,1],
[1,0,1,0,0,0,0,0,0,1],
[1,0,1,1,1,0,1,1,0,1],
[1,0,0,0,0,0,1,1,0,1],
[1,1,1,1,1,1,1,1,0,1],
[1,1,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,0,1,1,1],
[1,0,0,0,0,0,0,0,0,1],
[1,0,1,1,0,1,1,1,1,1],
[1,1,1,1,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,0,1]
]

// loop thorugh our arrays, in each array we want to note 0's, if 0 alinges with array above
// fnd entrace, find 0 on first row

let maze = function (inputArray) {
  for (let i = 0; i <inputArray.length; i += 1) {
    let horizontal = 0
    let verticle = 0
    let lastPathValue = 0
    if (inputArray[verticle][i] === 0) {
      lastPathValue = inputArray[verticle][i]
      verticle += 1
      return i
    }
  }
}

[0 => 2]

if (inputArray[verticle][i] === 0){
  currentPathValue = inputArray[verticle][horizontal]
  pathArray.push(i)
  if (inputArray[verticle + 1][horizontal] === 0) {
    currentPathValue = inputArray[verticle + 1][horizontal]

  } else if (currentPathValue = inputArray[verticle][horizontal + 1] === 0{
        currentPathValue = inputArray[verticle][horizontal + 1]
  }
}
Check each direction