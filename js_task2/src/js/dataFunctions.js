import { users } from './_variables';
import axios from 'axios';
import { renderTable } from './renderFunctions';

export const getUsers = (baseUrl) => {
  users = axios.get(`${baseUrl}/data`).then((res) => {
    users = res.data;
    renderTable(users);
  });
};

export const deleteUserNote = (baseUrl, userID) => {
  axios.delete(`${baseUrl}/data/${userID}`).then(() => {
    getUsers(baseUrl);
  });
};

export const updateUserData = (baseUrl, id, user) => {
  axios.put(`${baseUrl}/data/${id}`, user).then(() => {
    getUsers(baseUrl);
  });
};

export const addUserData = (baseUrl, user) => {
  axios.post(`${baseUrl}/data`, user).then(() => {
    getUsers(baseUrl);
  });
};
