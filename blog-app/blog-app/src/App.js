import { Route, BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/Layout/NavBar/NavBar';
import { Home } from './Pages/Home';
import { Favorites } from './Pages/Favorites';
import { Header } from './components/Layout/Header/Header';
import { Login } from './Pages/Auth/Login';
import { Signup } from './Pages/Auth/Signup';
import { Profile } from './Pages/Profile';
import { useAuthDispatch, useAuthState } from './api/auth/authenticate';
import { useEffect } from 'react';
import { PostView } from './components/Layout/PostView/PostView';
import { Feeds } from './Pages/Feeds';
import { useApi } from './hooks/useApi';

export const initialState = {
  user: '',
  token:
    '' || localStorage.getItem('token')
      ? JSON.parse(localStorage.getItem('token'))
      : '',
  isAuth: false,
  loading: false,
  errorMessage: null,
};

function App() {
  const dispatch = useAuthDispatch();
  const { getUserApi } = useApi();
  const user = useAuthState();

  useEffect(() => {
    if (initialState.token) {
      getUserApi()
        .then((response) => {
          dispatch({ payload: response.data, type: 'LOGIN_SUCCESS' });
        })
        .catch(() => console.log('Error arter trying login'));
    }
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Route exact path="/home" component={Home} />
      <Route exact path="/auth/login" component={Login} />
      <Route exact path="/auth/signup" component={Signup} />
      <Route exact path="/favorites" component={Favorites} />
      <Route exact path="/feeds" component={Feeds} />
      <Route path="/profiles" component={Profile} />
      <Route path="/articles" component={PostView} />
    </BrowserRouter>
  );
}

export default App;
