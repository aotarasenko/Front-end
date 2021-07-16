export const addBtn = document.querySelector('.add-note'),
  filterBtn = document.querySelector('.filter-btn'),
  outputArea = document.querySelector('.output-data'),
  modalWindow = document.querySelector('.modal-window'),
  modalData = document.querySelectorAll(
    '.modal-window > form > input[type="text"]'
  ),
  mainCheckbox = document.querySelector(
    '.table-heading > input[type="checkbox"]'
  ),
  closeModalBtn = modalWindow.querySelector('.close-modal-btn')

export const bareUrl = 'db.json'

export let users = []
export let checkedItems = []
