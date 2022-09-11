const container = document.querySelector("#container");
let gridSize = 16;
let mouseDown = false;
let rainbow = false;

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
      square.addEventListener('mouseover', draw);
      square.addEventListener('mousedown', draw);
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

function setRainbow() {
  if (rainbow === false) {
    rainbow = true;
    rainbowBtn.innerHTML = "Black Mode";
  } else {
    rainbow = false;
    rainbowBtn.innerHTML = "Rainbow Mode";
  }
}

function draw(event) {
    if (rainbow === false) {
      event.target.style.backgroundColor = "black";
    } else {
      event.target.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    }
}

const gridSizeBtn = document.querySelector("#size-button");
gridSizeBtn.addEventListener("click", setGridSize);

const clearBtn = document.querySelector("#clear-button");
clearBtn.addEventListener("click", clearDrawing);

const rainbowBtn = document.querySelector("#rainbow-button");
rainbowBtn.addEventListener("click", setRainbow);

drawGrid(gridSize);