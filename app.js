const container = document.querySelector("#container");

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
      row.appendChild(square);
      squares++;
    }
  }
}

function setGridSize() {
  let width = prompt("Enter a grid width less than 100.");
  if (width > 99) {
    width = prompt("Enter a width less than 100.");
  }
  container.innerHTML = '';
  drawGrid(width);
}

function test(event) {
  event.target.classList.add("sketch");
}

const btn = document.querySelector("#size-button");
btn.addEventListener("click", setGridSize);

drawGrid(16);