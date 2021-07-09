import ATM from "./ATM.js";

const input = document.querySelector("input");
const getMoneyBtn = document.querySelector("button");
const infoBlock = document.querySelector(".info");

let atm = new ATM();

function getMoney(value) {
  atm.setUserValue(value);
  atm.getMoney();
  console.log(atm.banknotesForOutput);

  atm.endSession();
  console.log("Max value :", atm.maxStoreValue);
}

getMoneyBtn.addEventListener("click", () => {
  let userValue = +input.value;
  if (isNaN(userValue) || userValue < 1) {
    alert("Incorrect value");
    return;
  }

  if (userValue % 1 > 0) {
    if (confirm("ATM don`t give a penny, continue?")) {
      getMoney(userValue);
    } else {
      return;
    }
  }

  getMoney(userValue);
});
