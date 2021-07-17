import '../scss/main.scss'
import axios from 'axios'
import { getUsers, addUserData } from './dataFunctions.js'
import { renderCell, renderRow } from './renderFunctions'
import { setDataToObject, selectWholeTable } from './helpers'
import {
  baseUrl,
  addBtn,
  filterBtn,
  outputArea,
  users,
  mainCheckbox,
  checkedItems,
} from './_variables.js'
import { addUser } from './eventFunctions'

window.addEventListener('DOMContentLoaded', () => {
  getUsers(baseUrl)
})

addBtn.addEventListener('click', (Event) => {
  Event.preventDefault()
  addUser()
})

mainCheckbox.addEventListener('click', () => {
  if (mainCheckbox.checked) {
    selectWholeTable(true)
  } else {
    selectWholeTable(false)
  }
})
