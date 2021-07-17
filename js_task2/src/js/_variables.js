export const addBtn = document.querySelector('.add-note'),
  filterBtn = document.querySelector('.filter-btn'),
  outputArea = document.querySelector('.output-data'),
  mainCheckbox = document.querySelector(
    '.table-heading > input[type="checkbox"]'
  )
export const baseUrl = 'http://localhost:3000'
export let users = []
export let checkedItems = []
export const userTemplate = {
  name: '',
  company: '',
  address: '',
  city: '',
  country: '',
}
