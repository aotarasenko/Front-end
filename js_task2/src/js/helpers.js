import { renderRow } from './renderFunctions';
import {
  checkedItems,
  userTemplate,
  users,
  numOfRows,
  outputArea,
  paginationBox,
  currentPage,
} from './_variables';

export function setDataToObject(nodeList) {
  let i = 0;
  let object = {};
  Object.assign(object, userTemplate);
  for (const key in userTemplate) {
    object[key] = nodeList[i].textContent;
    i++;
  }
  return object;
}

export function selectWholeTable(state) {
  let rows = document.querySelectorAll('.user-row');

  rows.forEach((row) => {
    row.firstChild.firstChild.checked = state;
    if (state) {
      checkedItems.push(row);
    } else {
      checkedItems.pop(row);
    }
  });
}

export const changePage = (pageIndex, btn) => {
  currentPage = +pageIndex;

  console.log(pageIndex);
  console.log(currentPage);
  console.log(btn);
  let btnToDisabled = [
    document.querySelector('.change-page-left'),
    document.querySelector('.change-page-right'),
  ];

  if (currentPage === users.length / numOfRows) {
    btnToDisabled[1].disabled = true;
  } else if (currentPage === 0) {
    btnToDisabled[0].disabled = true;
  } else {
    btnToDisabled[0].disabled = false;
    btnToDisabled[1].disabled = false;
  }

  let usersPart = users.slice(
    currentPage * numOfRows,
    currentPage * numOfRows + numOfRows
  );

  outputArea.innerHTML = '';

  usersPart.forEach((item) => {
    outputArea.appendChild(renderRow(item));
  });

  paginationBox.querySelectorAll('button').forEach((item) => {
    item.classList.remove('selected-page');
  });

  btn.classList.add('selected-page');
  checkFilterFields();
};

export const isCellValid = (cell, fieldValue) => {
  if (fieldValue === '') {
    return true;
  }

  for (let i = 0; i < fieldValue.length; i++) {
    if (cell.textContent[i].toLowerCase() !== fieldValue[i].toLowerCase()) {
      console.log();
      return false;
    }
  }

  return true;
};

export const checkFilterFields = () => {
  let dataRows = document.querySelectorAll('.user-row');
  let filterFields = document.querySelectorAll('.filter-inputs input');

  dataRows.forEach((row) => {
    row.classList.remove('is-hidden');
    row.childNodes.forEach((cell) => {
      for (let i = 0; i < filterFields.length; i++) {
        const item = filterFields[i];

        if (cell.getAttribute('name') === item.name) {
          let isRowCanBeRender = isCellValid(cell, item.value);
          if (!isRowCanBeRender) {
            row.classList.add('is-hidden');
          }
        }
      }
    });
  });
};
