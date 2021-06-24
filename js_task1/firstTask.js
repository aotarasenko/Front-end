const input = document.querySelector(".first-task input");
const pushButton = document.querySelector(".first-task button");
const symbol = "$";

pushButton.addEventListener("click", () => {
  let number = Math.round(Number(input.value));
  if (isNaN(number)) {
    alert("Incorrect value");
  } else {
    for (let i = 1; number > 0; i++) {
      if (number <= i) {
        console.log(symbol.repeat(number));
        console.log("rows", i);
        break;
      }
      console.log(symbol.repeat(i));
      number -= i;
    }
  }
});
