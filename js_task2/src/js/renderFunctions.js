const renderCell = (cellContent) => {
  const cell = document.createElement('div')
  cell.classList.add('cell')
  cell.textContent = cellContent

  return cell
}

const renderRow = (userNote) => {
  const row = document.createElement('div')
  row.classList.add('user-row', 'is-flex-row')

  userNote.forEach((cell) => {
    row.appendChild(renderCell(cell))
  })
}
