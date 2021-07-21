import { renderRow } from './renderFunctions';
import {
  checkedItems,
  userTemplate,
  users,
  numOfRows,
  outputArea,
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

export const isCellValid = (cell, fieldValue) => {
  if (fieldValue === '') {
    return true;
  }
  if (cell.textContent.toLowerCase().indexOf(fieldValue.toLowerCase()) === -1) {
    return false;
  }

  return true;
};

export function selectWholeTable(state) {
  let rows = document.querySelectorAll('.user-row');

  rows.forEach((row) => {
    row.firstChild.checked = state;
    if (state) {
      checkedItems.push(row);
    } else {
      checkedItems.pop(row);
    }
  });
}

export const changePage = (pageIndex) => {
  let usersPart = users.slice(
    pageIndex * numOfRows,
    pageIndex * numOfRows + numOfRows
  );

  outputArea.innerHTML = '';

  usersPart.forEach((item) => {
    outputArea.appendChild(renderRow(item));
  });
  checkFilterFields();
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
            continue;
          }
        }
      }
    });
  });
}