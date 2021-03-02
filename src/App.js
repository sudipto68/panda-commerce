import "./App.css";
import Navbaar from "./Components/Navbar/Navbaar";
import Shop from "./Components/shop/Shop";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbaar />
      <Router>
        <Switch>
          <Route path="/home">
            <Shop />
          </Route>
          <Route path="/product">
            <Shop />
          </Route>
          <Route exact path="/">
            <Shop />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
