import {
  addRowSelectionEvent,
  addDeleteRowEvent,
  addEditRowEvent,
} from './eventFunctions';
import { changePage } from './helpers';
import {
  paginationBox,
  outputArea,
  numOfRows,
  currentPage,
} from './_variables';

export const renderCell = (cellContent, cellName) => {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.textContent = cellContent;
  cell.setAttribute('name', cellName);

  return cell;
};

export const renderRow = (userNote) => {
  const row = document.createElement('div');
  row.classList.add('user-row', 'is-flex-row');
  row.id = userNote.id;

  for (const key in userNote) {
    if (key === 'id' || key === 'email' || key === 'phone') {
      continue;
    }

    row.appendChild(renderCell(userNote[key], key));
  }
  row.prepend(renderCheckbox());
  row.appendChild(renderControlBtn('edit'));
  row.appendChild(renderControlBtn('delete'));

  addRowSelectionEvent(row);
  return row;
};

export const renderTable = (users) => {
  outputArea.innerHTML = '';
  paginationBox.innerHTML = '';

  for (let i = 0; i < numOfRows; i++) {
    outputArea.appendChild(renderRow(users[i]));
  }
  for (let i = 0; i < users.length / numOfRows; i++) {
    paginationBox.append(renderPageBtn(i));
  }

  paginationBox.prepend(renderBtnLeft());
  paginationBox.append(renderBtnRight());
  changePage(0, document.querySelector('.page'));
};

const renderBtnLeft = () => {
  let btnLeft = document.createElement('button');
  btnLeft.classList.add('change-page-left');
  btnLeft.textContent = '<';

  btnLeft.addEventListener('click', () => {
    currentPage -= 1;
    changePage(
      currentPage,
      paginationBox.querySelectorAll('.page')[currentPage]
    );
  });

  return btnLeft;
};

const renderBtnRight = () => {
  let btnRight = document.createElement('button');
  btnRight.classList.add('change-page-right');
  btnRight.textContent = '>';

  btnRight.addEventListener('click', () => {
    currentPage += 1;
    changePage(
      currentPage,
      paginationBox.querySelectorAll('.page')[currentPage]
    );
  });

  return btnRight;
};

export const renderPageBtn = (pageNumber) => {
  let btn = document.createElement('button');
  btn.type = 'button';
  btn.textContent = pageNumber + 1;
  btn.classList.add('page');
  btn.dataset.value = pageNumber;

  btn.addEventListener('click', () => {
    changePage(Number(btn.dataset.value), btn);
  });

  return btn;
};

export const renderCheckbox = () => {
  let checkbox = document.createElement('input');
  let label = document.createElement('label');
  let fakeBox = document.createElement('div');
  checkbox.type = 'checkbox';
  checkbox.classList.add('check-row');
  label.appendChild(checkbox);
  label.appendChild(fakeBox);
  return label;
};

export const renderControlBtn = (type) => {
  let btn = document.createElement('button');
  btn.type = 'button';

  if (type === 'edit') {
    btn.classList.add('edit-item-btn');
    btn.name = 'edit';
    addEditRowEvent(btn);
  } else {
    btn.classList.add('delete-item-btn');
    btn.name = 'delete';
    addDeleteRowEvent(btn);
  }

  return btn;
};
