import '../scss/main.scss';
import { getUsers } from './dataFunctions';
import { selectWholeTable, isCellValid } from './helpers';
import { baseUrl, addBtn, mainCheckbox, filterForm } from './_variables';
import { addUser } from './eventFunctions';

window.addEventListener('DOMContentLoaded', (Event) => {
  Event.preventDefault();
  getUsers(baseUrl);
  return false;
});

addBtn.addEventListener('click', (Event) => {
  Event.preventDefault();
  Event.stopPropagation();
  addUser(baseUrl);
  return false;
});

mainCheckbox.addEventListener('click', () => {
  if (mainCheckbox.checked) {
    selectWholeTable(true);
  } else {
    selectWholeTable(false);
  }
});

filterForm.addEventListener('input', () => {
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
});
