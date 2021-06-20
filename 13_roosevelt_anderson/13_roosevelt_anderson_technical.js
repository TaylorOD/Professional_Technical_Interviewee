// Question gist: https://gist.github.com/rmanderson/179cc2337a8e56441ae7d9b62d84c872

// Given a 2 dimensional array that represents a maze, print the path through the maze.
// The entrance of the maze will be the first row of the array, the exit will be the last row of the array.
// For this exercise there is only one valid path through the maze.

// Below is an example:

let maze = [
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

// Step one: find the entrance

const maze = function (inputArray) {

  let pathArray = []
  let currentPathValue = 0

  if (inputArray[vertical][horizontal] === 0){
    currentPathValue = inputArray[vertical][horizontal]
    pathArray.push(i)

    if (inputArray[vertical + 1][horizontal] === 0) {
      currentPathValue = inputArray[vertical + 1][horizontal]

    } else if (currentPathValue = inputArray[vertical][horizontal + 1] === 0) {
          currentPathValue = inputArray[vertical][horizontal + 1]
    }
  }

}