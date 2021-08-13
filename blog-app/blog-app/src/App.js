import { Route, BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/Layout/NavBar/NavBar";
import { Home } from "./components/Pages/Home";
import { World } from "./components/Pages/World";
import { Favorites } from "./components/Pages/Favorites";
import { Subscriptions } from "./components/Pages/Subscriptions";
import { Header } from "./components/Layout/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Route exact path="/home" component={Home} />
      <Route exact path="/favorites" component={Favorites} />
      <Route exact path="/world" component={World} />
      <Route exact path="/subscriptions" component={Subscriptions} />
    </BrowserRouter>
  );
}

export default App;
