// helper functions

function promptForNumber() {
  var numOfRows = prompt(
    "How many rows would you like? Enter a number between 1 and 75."
  );
  createGrid(numOfRows);
}

function createGrid(numOfRows) {
  let squares = document.querySelector(".squares");

  // reset grid
  var cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => squares.removeChild(cell));

  squares.style.gridTemplateColumns = `repeat(${numOfRows}, 1fr)`;
  squares.style.gridTemplateRows = `repeat(${numOfRows}, 1fr)`;

  let numOfCells = numOfRows ** 2;
  for (let i = 1; i <= numOfCells; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.style.opacity = 0.1;
    squares.appendChild(cell);
  }

  darkenCells("blue");
}

function colorCells(cellColor) {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) =>
    cell.addEventListener("mouseenter", () => {
      cell.style.setProperty("--cell-background-color", `${cellColor}`);
    })
  );
}

function darkenCells(cellColor) {
  var cells = document.querySelectorAll(".cell");
  cells.forEach((cell) =>
    cell.addEventListener("mouseenter", () => {
      //   cell.style.setProperty("--cell-background-color", `${cellColor}`);
      //   cell.style.setProperty("--cell-opacity", "0.1");
      cell.style.backgroundColor = `${cellColor}`;
      let op = parseFloat(cell.style.opacity);
      if (op < 1) {
        cell.style.opacity = op + 0.1;
        console.log(cell.style.opacity);
      }
    })
  );
}

// LOGIC FLOW

createGrid(25);
