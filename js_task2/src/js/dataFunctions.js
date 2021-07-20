import { outputArea, users, numOfRows, paginationBox } from './_variables';
import axios from 'axios';
import { renderPageBtn, renderRow } from './renderFunctions';

export const getUsers = (baseUrl) => {
  users = axios.get(`${baseUrl}/data`).then((res) => {
    users = res.data;

    for (let i = 0; i < numOfRows; i++) {
      outputArea.appendChild(renderRow(users[i]));
    }
    for (let i = 0; i < users.length / numOfRows; i++) {
      paginationBox.appendChild(renderPageBtn(i));
    }
  });
};

export const deleteUserNote = (baseUrl, userID) => {
  axios.delete(`${baseUrl}/data/${userID}`);
};

export const updateUserData = (baseUrl, id, user) => {
  axios.put(`${baseUrl}/data/${id}`, user);
};

export const addUserData = (baseUrl, user) => {
  axios.post(`${baseUrl}/data`, user);
};
