import { Route, BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/Layout/NavBar/NavBar";
import { Home } from "./Pages/Home";
import { Favorites } from "./Pages/Favorites";
import { Subscriptions } from "./Pages/Subscriptions";
import { Header } from "./components/Layout/Header/Header";
import { Login } from "./Pages/Auth/Login";
import { Signin } from "./Pages/Auth/Signin";
import { Profile } from "./Pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      {/* {!loggegIn ? <Redirect to="/world" />} */}
      <Route exact path="/home" component={Home} />
      <Route exact path="/auth/login" component={Login} />
      <Route exact path="/auth/signin" component={Signin} />
      <Route exact path="/favorites" component={Favorites} />
      <Route exact path="/subscriptions" component={Subscriptions} />
      <Route exact path="/profile" component={Profile} />
    </BrowserRouter>
  );
}

export default App;
