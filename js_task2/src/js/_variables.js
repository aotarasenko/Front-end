export const addBtn = document.querySelector('.add-note'),
  filterForm = document.querySelector('.filter-form'),
  outputArea = document.querySelector('.output-data'),
  mainCheckbox = document.querySelector(
    '.table-heading > input[type="checkbox"]'
  ),
  paginationBox = document.querySelector('.change-page');

export const baseUrl = 'http://localhost:3000';
export let users = [];
export let checkedItems = [];
export const userTemplate = {
  name: '',
  company: '',
  address: '',
  city: '',
  country: '',
};
export const numOfRows = 5;
