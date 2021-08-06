import { Route, BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./components/Layout/NavBar/NavBar";
import { Home } from "./components/Pages/Home";
import { World } from "./components/Pages/World";
import { Favorites } from "./components/Pages/Favorites";
import { Subscriptions } from "./components/Pages/Subscriptions";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Route path="/home" component={Home} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/world" component={World} />
        <Route path="/subscriptions" component={Subscriptions} />
      </Router>
    </>
  );
}

export default App;
