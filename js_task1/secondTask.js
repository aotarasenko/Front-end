const generateButton = document.querySelector(".generate-btn");
const checkButton = document.querySelector(".check-btn");

const elementsCount = 6; // if we need moore domino, or less
const minValue = 1;
const maxValue = 3;

let firstArray = [];
let secondArray = [];

function randomValue(min, max) {
  //get random value in range
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomArray(length) {
  //get random array
  let arr = [];

  for (let i = 0; i < length; i++) {
    arr.push(randomValue(minValue, maxValue));
  }

  return arr;
}

function isFullRow(array) {
  // is full row with same elements
  return sameElementsCount(array) === elementsCount;
}

function sameElementsCount(array, elem) {
  //check count of same elements
  return array.filter((item) => item === elem).length;
}

function frequentNumber(topArray, bottomArray) {
  // get frequent number in every domino or -1 if one of them is not exist
  let count;
  let frequent = 0;
  for (let i = 1; i <= elementsCount; i++) {
    count = 0;
    for (let j = 0; j < elementsCount; j++) {
      if (topArray[j] === i || bottomArray[j] === i) {
        count++;
      }
    }
    if (count === elementsCount) {
      frequent = i;
      return frequent;
    }
  }

  return -1;
}

function frequentRow(elem, top, bottom) {
  // check which line contains more frequent numbers

  let topCount = sameElementsCount(top, elem);
  let bottomCount = sameElementsCount(bottom, elem);

  return topCount >= bottomCount ? top : bottom; 
}

function isArraysCompare(a, b) {  
  if (a.length !== b.length) {
    return false;
  }

  for (i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

function rotateDomino(top, bottom, number) { // hov much rotates i do
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

generateButton.addEventListener("click", () => {
  firstArray = randomArray(elementsCount);
  secondArray = randomArray(elementsCount);

  console.log("first", firstArray);
  console.log("second", secondArray);
});

checkButton.addEventListener("click", () => {
  let number = frequentNumber(firstArray, secondArray); // you can write here static array to check
  if (number !== -1) {
    let requiredArray = frequentRow(number, firstArray, secondArray); 
    console.log("required", requiredArray);
    if (!isArraysCompare(firstArray, requiredArray)) { //
      console.log(rotateDomino(firstArray, requiredArray, number));
    } else {
      console.log(rotateDomino(secondArray, requiredArray, number));
    }
  } else {
    alert("Impossible");
  }
});
