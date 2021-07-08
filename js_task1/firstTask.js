const input = document.querySelector("input"),
  pushButton = document.querySelector("button"),
  outputArea = document.querySelector(".output-area"),
  outputSymbol = " $ ";

function outputLine(symbolCount) {
  let block = document.createElement("div");
  block.innerHTML = `${outputSymbol.repeat(symbolCount)} <br>`;
  outputArea.appendChild(block);
}

pushButton.addEventListener("click", () => {
  outputArea.innerHTML = "";
  let number = Math.round(+input.value);
  if (isNaN(number) || number <= 0) {
    alert("Incorrect value");
    return;
  }
  let i = 1;
  let linesCount = 0;

  while (number > 0) {
    if (number < i) {
      outputLine(number);
      break;
    } else {
      outputLine(i);
      linesCount++;
    }
    number -= i;
    i++;
  }

  outputArea.innerHTML += `Rows: ${linesCount}`;
});
