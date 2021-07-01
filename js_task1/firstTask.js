const input = document.querySelector(".first-task input");
const pushButton = document.querySelector(".first-task button");
const outArea = document.querySelector(".first-task .out-area");
const symbol = " $ "; // out symbol

function outputLine(symbolCount) {
  outArea.innerHTML += `${symbol.repeat(symbolCount)} <br>`;
}

pushButton.addEventListener("click", () => {
  outArea.innerHTML = "";
  let number = Math.round(Number(input.value));
  if (isNaN(number) || number <= 0) {
    alert("Incorrect value");
  } else {
    for (let i = 1; number > 0; i++) {
      if (number <= i) {
        // outArea.innerHTML += `${symbol.repeat(number)} <br>`;
        outputLine(number);
        outArea.innerHTML += `Rows: ${i}`;
        break;
      }
      // outArea.innerHTML += `${symbol.repeat(i)} <br>`;
      outputLine(i);
      number -= i;
    }
  }
});
