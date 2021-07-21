import '../scss/main.scss';
import { getUsers, deleteUserNote } from './dataFunctions';
import { selectWholeTable, checkFilterFields } from './helpers';
import {
  baseUrl,
  addBtn,
  mainCheckbox,
  filterForm,
  checkedItems,
} from './_variables';
import { addUser } from './eventFunctions';

document
  .querySelector('.table-heading .delete-item-btn')
  .addEventListener('click', (Event) => {
    Event.preventDefault();
    checkedItems.forEach((item) => {
      deleteUserNote(baseUrl, item.id).then(() => {
        getUsers(baseUrl);
      });
    });
    checkedItems = [];
  });

window.addEventListener('DOMContentLoaded', (Event) => {
  Event.preventDefault();
  getUsers(baseUrl);
});

addBtn.addEventListener('click', (Event) => {
  Event.preventDefault();
  addUser(baseUrl);
});

mainCheckbox.addEventListener('click', () => {
  if (mainCheckbox.checked) {
    selectWholeTable(true);
  } else {
    selectWholeTable(false);
  }
});

filterForm.addEventListener('input', checkFilterFields);
