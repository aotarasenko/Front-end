import { Route, BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/Layout/NavBar/NavBar";
import { Home } from "./Pages/Home";
import { Favorites } from "./Pages/Favorites";
import { Header } from "./components/Layout/Header/Header";
import { Login } from "./Pages/Auth/Login";
import { Signup } from "./Pages/Auth/Signup";
import { Profile } from "./Pages/Profile";
import { useAuthDispatch } from "./api/auth/authenticate";
import axios from "axios";
import { ROOT_URL } from "./api/auth/actions";
import { useEffect } from "react";
import { PostView } from "./components/Layout/PostView/PostView";

export const initialState = {
  user: "",
  token:
    "" || localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : "",
  isAuth: false,
  loading: false,
  errorMessage: null,
};

function App() {
  const dispatch = useAuthDispatch();

  useEffect(() => {
    if (initialState.token) {
      axios
        .get(`${ROOT_URL}/user`, {
          headers: {
            Authorization: `Token ${initialState.token}`,
          },
        })
        .then((response) => {
          dispatch({ payload: response.data, type: "LOGIN_SUCCESS" });
        });
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Route exact path="/home" component={Home} />
      <Route exact path="/auth/login" component={Login} />
      <Route exact path="/auth/signup" component={Signup} />
      <Route exact path="/favorites" component={Favorites} />
      <Route path="/profiles" component={Profile} />
      <Route path="/articles" component={PostView} />
    </BrowserRouter>
  );
}

export default App;
