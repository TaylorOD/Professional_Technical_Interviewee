const generateM = (line, boxes, paintingHeight, paintingWidth) => {
  let startingBox = document.createElement('div');
  startingBox.style = "background-color: blue; height: 1000px; width: 1000px; position: relative" // randomize color

  for (let index = 0; index < line.length; index += 1) {
    let lineEl = document.createElement('div')
    lineEl.style = "background-color: white; height: 50px; width: 1000px; position: absolute; top: 250px;" // randomize color, width, height
    lineEl.append('startingBox')
  }
  
  for (let index = 0; index < boxes.length; index += 1) {
    let boxesEl = document.createElement('div')
    boxesEl.style = "background-color: white; height: 50px; width: 1000px; position: absolute; top: 250px;" // randomize color, width, height
    boxesEl.append('startingBox')
  }


}

console.log(generateM(12, 4))