const addBtn = document.querySelector('.add-note'),
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

const bareUrl = 'db.json'

const getUsers = async () => {
  const res = await fetch(bareUrl, {
    method: 'GET',
    headers: {
      'Content-type': 'application-jsoon',
    },
  })
}
