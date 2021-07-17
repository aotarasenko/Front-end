import { checkedItems, baseUrl } from './_variables'
import { deleteUserNote } from './dataFunctions'
import { setDataToObject } from './helpers'
import ModalWindow from './ModalWindow'

export const addRowSelectionEvent = (row) => {
  row.addEventListener('click', (Event) => {
    if (Event.target.type === 'button') {
      return
    }

    let checkbox = row.querySelector('input[type="checkbox')
    if (checkbox.checked) {
      checkbox.checked = false
      checkedItems.pop(row)
    } else {
      checkbox.checked = true
      checkedItems.push(row)
    }
  })
}

export const addDeleteRowEvent = (btn) => {
  btn.addEventListener('click', (Event) => {
    Event.preventDefault()
    checkedItems.forEach((item) => {
      deleteUserNote(baseUrl, item.id)
    })
  })
}

export const addEditRowEvent = (btn) => {
  btn.addEventListener('click', (Event) => {
    Event.preventDefault()
    let parent = btn.parentNode
    let cells = parent.querySelectorAll('.cell')

    let userObject = setDataToObject(cells)

    let modalWindowObject = new ModalWindow(userObject, 'edit', parent.id)
    modalWindowObject.open()
  })
}

export const addUser = () => {
  let modalWindowObject = new ModalWindow({}, 'add', '')
  modalWindowObject.open()
}
