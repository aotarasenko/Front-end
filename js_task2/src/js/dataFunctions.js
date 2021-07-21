import { users } from './_variables';
import axios from 'axios';
import { renderTable } from './renderFunctions';

export const getUsers = async (baseUrl) => {
  const res = await axios.get(`${baseUrl}/data`);
  users = await res.data;
  renderTable(users);
};

export const deleteUserNote = async (baseUrl, userID) => {
  await axios.delete(`${baseUrl}/data/${userID}`);
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
