const input = document.querySelector("input"),
  pushBtn = document.querySelector("button"),
  outputArea = document.querySelector(".output-area"),
  app = document.querySelector(".first-task"),
  outputSymbol = " $ ";

function outputLine(symbolCount) {
  let outputRow = document.createElement("div");
  let outputContent = document.createTextNode(
    `${outputSymbol.repeat(symbolCount)}`
  );
  outputRow.appendChild(outputContent);
  outputArea.appendChild(outputRow);
}

pushBtn.addEventListener("click", () => {
  outputArea.innerHTML = "";
  let userValue = Math.round(+input.value);
  if (isNaN(userValue) || userValue <= 0) {
    alert("Incorrect value");
    return;
  }
  let i = 1;
  let linesCount = 0;

  while (userValue > 0) {
    if (userValue < i) {
      outputLine(userValue);
      break;
    } else {
      outputLine(i);
      linesCount++;
    }
    userValue -= i;
    i++;
  }

  let rowsCount = document.createElement("div");
  rowsCount.classList.add("info-area");
  rowsCount.textContent = `Full rows: ${linesCount}`;
  app.appendChild(rowsCount);
});
