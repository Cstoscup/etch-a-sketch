const container = document.querySelector("#container");
let gridSize = 16;
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function drawGrid(width) {
  let rows = 0;
  while (rows < width) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    rows++;

    let squares = 0;
    while (squares < width) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.addEventListener('mouseover', test);
      square.addEventListener('mousedown', test);
      row.appendChild(square);
      squares++;
    }
  }
}

function setGridSize() {
  gridSize = prompt("Enter a grid width less than 100.");
  if (gridSize > 99) {
    gridSize = prompt("Enter a width less than 100.");
  }
  container.innerHTML = '';
  drawGrid(gridSize);
}

function clearDrawing() {
  container.innerHTML = '';
  drawGrid(gridSize);
}

function test(event) {
  if (event.type === 'mouseover' && !mouseDown) {
    return;
  }
  event.target.classList.add("sketch");
}

const gridSizeBtn = document.querySelector("#size-button");
gridSizeBtn.addEventListener("click", setGridSize);

const clearBtn = document.querySelector("#clear-button");
clearBtn.addEventListener("click", clearDrawing);

drawGrid(gridSize);