// helper functions

function promptForNumber() {
  var numOfRows = prompt(
    "How many rows would you like? Enter a number between 4 and 75."
  );

  if (numOfRows === null) {
    return;
  } else {
    while (numOfRows < 4 || numOfRows > 75) {
      var numOfRows = prompt(
        "Oops, that's an invalid response.  Enter a number between 4 and 75."
      );
    }
    createGrid(numOfRows);
  }
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

  var pickedColor1 = document.getElementById("colorWell-1");
  console.log(pickedColor1.value);
  crayonEffect(pickedColor1.value);
}

function crayonEffectOnLoad(cellColor) {
  var cells = document.querySelectorAll(".cell");
  cells.forEach((cell) =>
    cell.addEventListener("mouseenter", () => {
      let op = parseFloat(cell.style.opacity);
      if (op < 1) {
        cell.style.opacity = op + 0.1;
      }
      cell.style.backgroundColor = cellColor;
    })
  );
}

function startupBgColor() {
  bgcolor = document.querySelector("#bgcolor");
  bgcolor.value = bgColorDefault;
  bgcolor.addEventListener("input", updateFirstBgColor, false);
  bgcolor.addEventListener("change", changeBgColor, false);
}

function updateFirstBgColor(cellColor) {
  var cells = document.querySelectorAll(".cell");
  cells.forEach(
    (cell) => (cell.style.backgroundColor = cellColor.target.value)
  );
}

function changeBgColor(cellColor) {
  var cells = document.querySelectorAll(".cell");
  cells.forEach(
    (cell) =>
      //   cell.style.setProperty("--cell-background-color", `${cellColor}`);
      (cell.style.backgroundColor = cellColor.target.value)
  );
}

function startupFirstColor() {
  crayonColor = document.querySelector("#colorWell-1");
  crayonColor.value = firstColorDefault;
  crayonColor.addEventListener("input", updateFirstColor, false);
  crayonColor.addEventListener("change", crayonEffect, false);
}

function updateFirstColor(cellColor) {
  var cells = document.querySelectorAll(".cell");
  cells.forEach((cell) =>
    cell.addEventListener("mouseenter", () => {
      let op = parseFloat(cell.style.opacity);
      if (op < 1) {
        cell.style.opacity = op + 0.1;
      }
      cell.style.backgroundColor = cellColor.target.value;
    })
  );
}

function startupSecondColor() {
  crayonColor = document.querySelector("#colorWell-2");
  crayonColor.value = secondColorDefault;
  crayonColor.addEventListener("input", updateSecondColor, false);
  crayonColor.addEventListener("change", crayonEffect, false);
}

function updateSecondColor(cellColor) {
  var cells = document.querySelectorAll(".cell");
  cells.forEach((cell) =>
    cell.addEventListener("mouseenter", () => {
      let op = parseFloat(cell.style.opacity);
      if (op < 1) {
        cell.style.opacity = op + 0.1;
      }
      cell.style.backgroundColor = cellColor.target.value;
    })
  );
}

function crayonEffect(cellColor) {
  var cells = document.querySelectorAll(".cell");
  cells.forEach((cell) =>
    cell.addEventListener("mouseenter", () => {
      let op = parseFloat(cell.style.opacity);
      if (op < 1) {
        cell.style.opacity = op + 0.1;
      }
      cell.style.backgroundColor = cellColor;
    })
  );
}

function startupRainbowColor() {
  rainbowColor = document.querySelector("#rainbowColor");
  rainbowColor.addEventListener("click", changeRainbowColor);
}

function changeRainbowColor() {
  var cells = document.querySelectorAll(".cell");
  cells.forEach((cell) =>
    cell.addEventListener("mouseenter", () => {
      let op = parseFloat(cell.style.opacity);
      if (op < 1) {
        cell.style.opacity = op + 0.1;
      }
      let colors = [
        "rgb(255, 0, 0, 1)",
        "rgb(255, 165, 0, 1)",
        "rgb(255, 255, 0, 1)",
        "rgb(0, 128, 0, 1)",
        "rgb(0, 0, 255, 1)",
        "rgb(75, 0, 130, 1)",
        "rgb(12, 10, 127, 1)",
      ];
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      cell.style.backgroundColor = randomColor;
    })
  );
}

// LOGIC FLOW

var bgColorDefault = "#FFFFFF";
var firstColorDefault = "#1E90FF";
var secondColorDefault = "#B22222";

window.addEventListener("load", startupBgColor, false);
window.addEventListener("load", startupFirstColor, false);
window.addEventListener("load", startupSecondColor, false);
window.addEventListener("load", startupRainbowColor, false);

createGrid(35);
crayonEffectOnLoad(firstColorDefault);

// https://ngvuong.github.io/Etch-A-Sketch/ for using ctrl and shift buttons to draw/erase
