import '../scss/main.scss'
import { getUsers } from './dataFunctions.js'
import { selectWholeTable } from './helpers'
import { baseUrl, addBtn, mainCheckbox } from './_variables.js'
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
