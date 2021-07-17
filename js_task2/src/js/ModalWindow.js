import { updateUserData, addUserData } from './dataFunctions'
import { baseUrl, userTemplate } from './_variables'

export default class ModalWindow {
  userFromInput = {}
  userToOutput = {}
  modal
  eventType
  id

  constructor(user, btnType, id) {
    this.userFromInput = user
    this.eventType = btnType
    this.id = id
    document.body.appendChild(this.renderModalWindow())
    this.modal = document.querySelector('#modal')
    Object.assign(this.userToOutput, userTemplate)
  }

  renderInput(inputName, value) {
    let input = document.createElement('input')
    input.type = 'text'
    input.name = inputName
    input.placeholder = inputName.toUpperCase()
    input.value = value
    input.required = true

    return input
  }

  renderBtn(name) {
    let btn = document.createElement('button')
    btn.type = 'button'

    if (name === 'close-modal') {
      btn.classList.add('close-modal-btn')
      btn.addEventListener('click', (Event) => {
        Event.preventDefault()
        this.close()
      })
    } else if (name === 'add') {
      btn.classList.add('save-btn', 'add-item')
      btn.textContent = 'SAVE'
      btn.addEventListener('click', () => {
        this.getFormData()
        addUserData(baseUrl, this.userToOutput)
        this.close()
      })
    } else if (name === 'edit') {
      btn.classList.add('save-btn', 'edit-item')
      btn.textContent = 'SAVE'
      btn.addEventListener('click', (Event) => {
        this.getFormData()
        updateUserData(baseUrl, this.id, this.userToOutput)
        this.close()
      })
    }

    return btn
  }

  renderForm(user, state) {
    let formBlock = document.createElement('form')

    if (state === 'edit') {
      for (const key in user) {
        formBlock.appendChild(this.renderInput(key, user[key]))
      }
    } else {
      for (const key in userTemplate) {
        formBlock.appendChild(this.renderInput(key, ''))
      }
    }
    formBlock.appendChild(this.renderBtn('close-modal'))
    formBlock.appendChild(this.renderBtn(this.eventType))
    return formBlock
  }

  renderModalWindow() {
    let modal = document.createElement('div')
    modal.classList.add('modal-window')
    modal.id = 'modal'
    modal.appendChild(this.renderForm(this.userFromInput, this.eventType))

    return modal
  }

  getFormData() {
    let dataCell = this.modal.querySelectorAll('input[type="text"]')
    let i = 0
    for (const key in this.userToOutput) {
      this.userToOutput[key] = dataCell[i].value
      i++
    }
  }

  open() {
    this.modal.classList.remove('is-hidden')
  }

  close() {
    this.modal.classList.add('is-hidden')
    document.body.removeChild(this.modal)
  }
}
