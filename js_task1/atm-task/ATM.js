import { randomValue } from "../helpers.js";

export default class ATM {
  userValue = 0;
  maxStoreValue = 0;
  moneyToOutput = 0;
  banknotesForOutput = [];
  // set random counts of banknotes
  store = [
    { value: 1000, count: randomValue(5, 12) },
    { value: 500, count: randomValue(9, 17) },
    { value: 200, count: randomValue(20, 25) },
    { value: 100, count: randomValue(20, 30) },
    { value: 50, count: randomValue(40, 60) },
    { value: 20, count: randomValue(80, 120) },
    { value: 10, count: randomValue(60, 80) },
    { value: 5, count: randomValue(40, 70) },
    { value: 2, count: randomValue(50, 60) },
    { value: 1, count: randomValue(20, 30) },
  ];

  constructor() {
    this.calculateStoreMoney(); // first time calculating store money
  }

  // get value from user and remember it
  setUserValue(inputUserAmount) {
    this.userValue = inputUserAmount;
  }

  getMoney() {
    let isAmountEnough = this.isAmountRequired();
    if (isAmountEnough) {
      this.calculateAmountToOutput();
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

  calculateAmountToOutput() {
    let i = 0;
    while (this.moneyToOutput < this.userValue) {
      if (this.store[i].count > 0) {
        let isBanknoteValid = this.isBanknoteCanBeAdded(
          this.store[i].value,
          this.moneyToOutput
        );
        if (isBanknoteValid) {
          this.moneyToOutput += this.store[i].value;
          this.banknotesForOutput.push(this.store[i].value);
          this.store[i].count--;
          if (i === this.store.length && this.store[i].count < 0) {
            break;
          }
        } else if (!isBanknoteValid) {
          i++;
        }
      } else if (
        this.moneyToOutput < this.userValue &&
        this.store[this.store.length - 1].count === 0
      ) {
        break;
      }
    }

    if (this.moneyToOutput !== this.userValue) {
      this.infoMessage(-2);
      this.moneyToOutput = 0;
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
  isBanknoteCanBeAdded(note, outputAmount) {
    return note + outputAmount <= this.userValue;
  }

  // refreshing atm values when session is end
  endSession() {
    this.maxStoreValue -= this.moneyToOutput;
    this.userValue = 0;
    this.moneyToOutput = 0;
    this.banknotesForOutput = [];
  }

  // get info message in current case
  infoMessage(type) {
    if (type === -1) {
      alert("ATM can`t give current amount");
    } else if (type === -2) {
      alert("Can`t get required banknotes");
    }
  }
}
