import axios from 'axios';
export const ROOT_URL = 'https://conduit.productionready.io/api';

export async function loginUser(dispatch, loginPayload) {
  try {
    dispatch({ type: 'REQUEST_LOGIN' });

    let response = await axios
      .post(`${ROOT_URL}/users/login`, loginPayload, {
        headers: {
          'Content-type': 'application/json;charset=utf-8',
        },
      })
      .catch((e) => console.log('error when login', e));

    console.log('login res', response);
    if (response.data) {
      dispatch({ payload: response.data.user, type: 'LOGIN_SUCCESS' });
      localStorage.setItem('token', JSON.stringify(response.data.user.token));
      return response.data.user;
    }
    return;
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error: error });
  }
}

export async function registerUser(dispatch, registerPayload) {
  try {
    dispatch({ type: 'REQUEST_REGISTER' });

    let response = await axios
      .post(`${ROOT_URL}/users`, registerPayload, {
        headers: {
          'Content-type': 'application/json;charset=utf-8',
        },
      })
      .catch((e) => console.log(e));

    if (response.data) {
      dispatch({ type: 'REGISTER_SUCCESS', payload: response });
      localStorage.setItem('currentUser', JSON.stringify(response));
    }
    dispatch({ type: 'REGISTER_ERROR', error: response.errorMessage });
    return;
  } catch (error) {
    dispatch({ type: 'REGISTER_ERROR', error: error });
  }
}

export async function logout(dispatch) {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('token');
}
