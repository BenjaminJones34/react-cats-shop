import './App.css';
import { useState } from "react"
import Main from "./components/Main"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import CheckOut from './components/CheckOut';
import CatPage from "./components/CatPage";

const App = () => {
    const [cartObject, setCartObject] = useState({
        itemsInCart: [],
        showModal: false,
        wallet: "5000"
    });
    
    return (
      <Router>
        <Switch>
          <Route path="/checkOut">
            <CheckOut cartObject={cartObject} setCartObject={setCartObject} />
          </Route>
          <Route path="/:id">
            <CatPage />
          </Route>
          <Route path="/" exact>
            <Main cartObject={cartObject} setCartObject={setCartObject} />
          </Route>
        </Switch>
      </Router>
    );
}

export default App