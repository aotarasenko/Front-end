const input = document.querySelector("input");
const getMoneyBtn = document.querySelector("button");
const infoBlock = document.querySelector(".info");

class ATM {
  userValue = 0;
  maxStoreValue = 0;
  moneyToOut = 0;
  outNotes = [];
  // set random counts of notes
  store = [
    { value: 1000, count: randomValue(5, 12) },
    { value: 500, count: randomValue(9, 17) },
    { value: 200, count: randomValue(20, 25) },
    { value: 100, count: randomValue(20, 30) },
    { value: 50, count: randomValue(40, 60) },
    { value: 20, count: randomValue(80, 120) },
    { value: 10, count: randomValue(100, 120) },
    { value: 5, count: randomValue(140, 170) },
    { value: 2, count: randomValue(150, 200) },
    { value: 1, count: randomValue(200, 220) },
  ];

  constructor() {
    this.calculateStoreMoney(); //first time calculating store money
  }

  //get value from user and remember it
  setUserValue(value) {
    this.userValue = value;
  }

  getMoney() {
    if (this.canGiveMoney()) {
      this.calculateAmount();
      return this.outNotes;
    } else {
      this.infoMessage(-1);
    }
  }

  //-------
  // get current atm data
  getUserValue() {
    return this.userValue;
  }

  getMaxStoreValue() {
    return this.maxStoreValue;
  }

  getMoneyToOut() {
    return this.moneyToOut;
  }

  getStore() {
    return this.store;
  }
  //---------

  getNote(noteIndex, out) {
    let sumOfNotes = 0;

    while (this.canAddNote(this.store[noteIndex], out)) {}

    return sumOfNotes;
  }

  // calculate current store amount
  calculateStoreMoney() {
    for (let i = 0; i < this.store.length; i++) {
      this.maxStoreValue += this.store[i].count * this.store[i].value;
    }
    console.log(this.maxStoreValue);
  }
  //
  calculateAmount() {
    for (let i = 0; i < this.store.length; i++) {
      if (this.store[i].count > 0) {
        while (this.canAddNote(this.store[i].value, this.moneyToOut)) {
          this.moneyToOut += this.store[i].value;
          this.store[i].count--;
          this.outNotes.push(this.store[i].value);
        }
      } else {
      }
    }
  }

  //is atm contains required amount of money
  canGiveMoney() {
    if (this.maxStoreValue >= this.userValue) {
      return true;
    }
    return false;
  }

  // can we add current note to result sum
  canAddNote(note, out) {
    return note + out <= this.userValue;
  }

  //refreshing atm values when session is end
  endSession() {
    this.maxStoreValue -= this.moneyToOut;
    this.userValue = 0;
    this.moneyToOut = 0;
    this.outNotes = [];
  }

  // get info message in current case
  infoMessage(type) {
    switch (type) {
      case -1:
        alert("ATM can`t give current amount");
        break;

      default:
        break;
    }
  }
}

function randomValue(min, max) {
  //get random value in range
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getMoney(value) {
  console.log(atm.maxStoreValue);
  atm.setUserValue(value);
  atm.getMoney();
  console.log(atm.outNotes);

  atm.endSession();
  console.log(atm.maxStoreValue);
}

let atm = new ATM();

getMoneyBtn.addEventListener("click", () => {
  let userValue = Number(input.value);
  if (isNaN(userValue) || userValue < 1) {
    alert("Incorrect value");
    return;
  }

  if (userValue % 1 > 0) {
    if (confirm("ATM don`t give a penny, countinue?")) {
      getMoney(userValue);
    } else {
      return;
    }
  }

  getMoney(userValue);
});
