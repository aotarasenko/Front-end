import { checkedItems, mainCheckbox } from './_variables'
import { selectWholeTable } from './helpers'

export const addRowSelectionEvent = (row) => {
  row.addEventListener('click', () => {
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

mainCheckbox.addEventListener('click', () => {
  if (mainCheckbox.checked) {
    selectWholeTable(true)
  } else {
    selectWholeTable(false)
  }
})
