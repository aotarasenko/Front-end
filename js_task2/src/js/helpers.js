import { checkedItems, userTemplate } from './_variables'

export function setDataToObject(nodeList) {
  let i = 0
  let object = {}
  Object.assign(object, userTemplate)
  for (const key in userTemplate) {
    object[key] = nodeList[i].textContent
    i++
  }
  return object
}

export function selectWholeTable(state) {
  let rows = document.querySelectorAll('.user-row')

  rows.forEach((row) => {
    row.firstChild.checked = state
    if (state) {
      checkedItems.push(row)
    } else {
      checkedItems.pop(row)
    }
  })
}
