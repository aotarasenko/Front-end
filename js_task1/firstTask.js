const input = document.querySelector("input"),
  pushButton = document.querySelector("button"),
  outputArea = document.querySelector(".output-area"),
  outputSymbol = " $ ";

function outputLine(symbolCount) {
  let outputRow = document.createElement("div");
  let outputContent = document.createTextNode(
    `${outputSymbol.repeat(symbolCount)}`
  );
  outputRow.appendChild(outputContent);
  outputArea.appendChild(outputRow);
}

pushButton.addEventListener("click", () => {
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

  outputArea.innerHTML += `Full rows: ${linesCount}`;
});
