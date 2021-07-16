import { baseUrl } from './_variables'
import axios from 'axios'

export const getUsers = async (baseUrl) => {
  axios.get(`${baseUrl}/data`).then((res) => {
    let data = res.data
    data.forEach((element) => {
      outputArea.appendChild(renderRow(element))
    })
  })
}

export const deleteUserNote = async (baseUrl, userID) => {
  axios.delete(`${baseUrl}/data/${userID}`).then((res) => {
    console.log(res.data)
  })
}

export const updateUserData = async (baseUrl, id, user) => {
  axios.put(`${baseUrl}/data/${id}`, user)
}

export const addUserData = async (baseUrl, user) => {
  axios.post(`${baseUrl}/data`, user).then((res) => {
    res.data
  })
}
