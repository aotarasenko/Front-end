import { addRowSelectionEvent } from './eventFunctions'

export const renderCell = (cellContent) => {
  const cell = document.createElement('div')
  cell.classList.add('cell')
  cell.textContent = cellContent

  return cell
}

export const renderRow = (userNote) => {
  const row = document.createElement('div')
  row.classList.add('user-row', 'is-flex-row')
  row.id = userNote.id

  for (const key in userNote) {
    if (key === 'id' || key === 'email' || key === 'phone') {
      continue
    }

    row.appendChild(renderCell(userNote[key]))
  }
  row.prepend(renderCheckbox())
  addRowSelectionEvent(row)
  return row
}

export const renderCheckbox = () => {
  let checkbox = document.createElement('input')
  checkbox.type = 'checkbox'

  return checkbox
}
