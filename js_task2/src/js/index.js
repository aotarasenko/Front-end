import { setDataToObject, selectWholeTable } from './helpers.js'
import { renderCell, renderRow } from './renderFunctions'

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

let users = []
let checkedItems = []

const getUsers = async () => {
  const res = await fetch(bareUrl, {
    method: 'GET',
    headers: {
      'Content-type': 'application-jsoon',
    },
  })

  let data = await res.json()

  return data['data']
}

window.addEventListener('DOMContentLoaded', async () => {
  users = await getUsers()
})
