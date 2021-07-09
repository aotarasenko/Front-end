import { randomValue } from "./helpers.js";

export default class ATM {
  userValue = 0;
  maxStoreValue = 0;
  moneyToOut = 0;
  banknotesForOutput = [];
  // set random counts of banknotes
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
    this.calculateStoreMoney(); // first time calculating store money
  }

  // get value from user and remember it
  setUserValue(inputAmount) {
    this.userValue = inputAmount;
  }

  getMoney() {
    let isAmountEnough = this.isAmountRequired();
    if (isAmountEnough) {
      this.calculateAmountToOut();
      return this.outNotes;
    } else {
      this.infoMessage(-1);
    }
  }

  // calculate current store amount
  calculateStoreMoney() {
    for (let i = 0; i < this.store.length; i++) {
      this.maxStoreValue += this.store[i].count * this.store[i].value;
    }
    console.log("ATM contains: ", this.maxStoreValue, " money");
  }

  calculateAmountToOut() {
    let i = 0;
    while (this.moneyToOut < this.userValue) {
      if (i === this.store.length) {
        i = 0;
      }
      if (this.store[i].count > 0) {
        let isBanknoteValid = this.isBanknoteCanAdd(
          this.store[i].value,
          this.moneyToOut
        );
        if (isBanknoteValid) {
          this.moneyToOut += this.store[i].value;
          this.banknotesForOutput.push(this.store[i].value);
          this.store[i].count--;
        }
      }
      i++;
    }
  }

  // is atm contains required amount of money
  isAmountRequired() {
    if (this.maxStoreValue >= this.userValue) {
      return true;
    }
    return false;
  }

  // can we add current note to result sum
  isBanknoteCanAdd(note, outputAmount) {
    return note + outputAmount <= this.userValue;
  }

  // refreshing atm values when session is end
  endSession() {
    this.maxStoreValue -= this.moneyToOut;
    this.userValue = 0;
    this.moneyToOut = 0;
    this.banknotesForOutput = [];
  }

  // get info message in current case
  infoMessage(type) {
    switch (type) {
      case -1:
        alert("ATM can`t give current amount");
        break;
      // here can be some other error cases
      default:
        break;
    }
  }
}
