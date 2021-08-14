import { Route, BrowserRouter, Redirect } from "react-router-dom";
import { NavBar } from "./components/Layout/NavBar/NavBar";
import { Home } from "./components/Pages/Home";
import { World } from "./components/Pages/World";
import { Favorites } from "./components/Pages/Favorites";
import { Subscriptions } from "./components/Pages/Subscriptions";
import { Header } from "./components/Layout/Header/Header";
import { Main } from "./components/Layout/Main/Main";
import { Login } from "./components/Layout/AuthPage/Login";
import { Signin } from "./components/Layout/AuthPage/Signin";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Main />
      {/* {!loggegIn ? <Redirect to="/world" />} */}
      <Route exact path="/home" component={Home} />
      <Route exact path="/auth/login" component={Login} />
      <Route exact path="/auth/signin" component={Signin} />
      <Route exact path="/favorites" component={Favorites} />
      <Route exact path="/world" component={World} />
      <Route exact path="/subscriptions" component={Subscriptions} />
    </BrowserRouter>
  );
}

export default App;
