import { randomValue, isArraysEqual } from "../helpers.js";

const generateBtn = document.querySelector(".generate-btn"),
  checkBtn = document.querySelector(".check-btn"),
  elementsCount = 6, // if we need moore domino, or less
  minValue = 1,
  maxValue = 6;

let topArray = [],
  bottomArray = [];

function randomArray(length) {
  // get random array
  let arr = [];

  for (let i = 0; i < length; i++) {
    arr.push(randomValue(minValue, maxValue));
  }

  return arr;
}

function sameElementsCount(array, elem) {
  // check count of same elements
  return array.filter((item) => item === elem).length;
}

function frequentNumber(topArray, bottomArray) {
  // get frequent number in every domino or -1 if one of them is not exist
  let count;
  let frequent = 0;
  for (let i = 1; i <= elementsCount; i++) {
    // searching for required value
    count = 0;
    for (let j = 0; j < elementsCount; j++) {
      if (topArray[j] === i || bottomArray[j] === i) {
        count++;
      }
    }
    if (count === elementsCount) {
      // if we have required value in all positions
      frequent = i;
      return frequent;
    }
  }

  return -1; // if we can`t find required value
}

function frequentRow(elem, top, bottom) {
  // check which line contains more frequent numbers

  let topCount = sameElementsCount(top, elem);
  let bottomCount = sameElementsCount(bottom, elem);

  return topCount >= bottomCount ? top : bottom;
}

function rotateDomino(top, bottom, number) {
  // how much rotates we do
  let rotatesCount = 0;
  for (let i = 0; i < bottom.length; i++) {
    if (bottom[i] !== number) {
      bottom[i] = top[i];
      rotatesCount++;
    }
  }
  console.log("result array", bottom);
  return rotatesCount;
}

generateBtn.addEventListener("click", () => {
  topArray = randomArray(elementsCount);
  bottomArray = randomArray(elementsCount);

  console.log("first", topArray);
  console.log("second", bottomArray);
});

checkBtn.addEventListener("click", () => {
  let number = frequentNumber(topArray, bottomArray); // you can write here static array to check
  if (number !== -1) {
    let requiredArray = frequentRow(number, topArray, bottomArray);
    let isSameArrays = isArraysEqual(topArray, requiredArray);

    if (!isSameArrays) {
      console.log(rotateDomino(topArray, requiredArray, number));
    } else {
      console.log(rotateDomino(bottomArray, requiredArray, number));
    }
  } else {
    alert("Impossible");
  }
});
