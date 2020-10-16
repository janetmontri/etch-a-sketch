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
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => squares.removeChild(cell));

  squares.style.gridTemplateColumns = `repeat(${numOfRows}, 1fr)`;
  squares.style.gridTemplateRows = `repeat(${numOfRows}, 1fr)`;

  let numOfCells = numOfRows ** 2;
  for (let i = 1; i <= numOfCells; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    squares.appendChild(cell);
  }

  colorCells();
}

function colorCells() {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) =>
    cell.addEventListener("mouseenter", () => {
      cell.style.backgroundColor = "purple";
    })
  );
}

// LOGIC FLOW
