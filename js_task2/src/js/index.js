import '../scss/main.scss'
import { renderCell, renderRow } from './renderFunctions'
import { setDataToObject, selectWholeTable } from './helpers'
import {
  bareUrl,
  addBtn,
  filterBtn,
  outputArea,
  modalWindow,
  modalData,
  closeModalBtn,
  users,
  checkedItems,
} from './_variables.js'

const getUsers = async () => {
  const res = await fetch(bareUrl, {
    method: 'GET',
    headers: {
      'Content-type': 'application-jsoon',
    },
  })

  let resouce = await res.json()

  return resouce['data']
}

window.addEventListener('DOMContentLoaded', () => {
  getUsers().then((data) => {
    data.forEach((element) => {
      outputArea.appendChild(renderRow(element))
    })
  })
})
