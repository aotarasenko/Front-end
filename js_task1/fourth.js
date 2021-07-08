const startOfRange = document.querySelector("#from");
const endOfRange = document.querySelector("#to");
const searchButton = document.querySelector("button");
const resualtArea = document.querySelector(".output");

function getDividers(number) {
  //get list of number dividers
  let dividersList = [];

  for (let index = 1; index < number; index++) {
    if (number % index === 0) {
      dividersList.push(index);
    }
  }
  return dividersList;
}

function sumOfDividers(number) {
  // get dividers sum

  let divsList = getDividers(number);
  let sum = 0;

  divsList.forEach((item) => {
    sum += item;
  });
  return sum;
}

function getPair(number) {
  let firstSum = sumOfDividers(number);
  let secondDividers = sumOfDividers(firstSum);

  if (firstSum < number || firstSum === number) {
    return;
  } else if (secondDividers === number) {
    return [number, firstSum];
  }

  return;
}

function getFriendlyNumbers(start, end) {
  let pairsList = [];

  for (let index = start; index < end; index++) {
    if (getPair(index) !== undefined) {
      pairsList.push(getPair(index));
    }
  }
  return pairsList;
}

searchButton.addEventListener("click", () => {
  let start = Math.round(+startOfRange.value);
  let end = Math.round(+endOfRange.value);

  if (isNaN(start) || isNaN(end)) {
    alert("Incorrect value");
    return;
  } else if (start >= end) {
    alert("Start of range must be less than end of range");
    return;
  } else if (start <= 0 || end <= 0) {
    alert("Values must be more than zero");
    return;
  }
  let result = getFriendlyNumbers(start, end);

  let resultPairs = document.createElement("div");
  resultPairs.textContent = `${result.join("<br>")}`;

  resualtArea.appendChild(resultPairs);
});
