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
<<<<<<< HEAD
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
=======
        <Router>
            <Switch>
                <Route path="/checkOut" exact>
                    <CheckOut cartObject={cartObject} setCartObject={setCartObject} />
                </Route>
                <Route path="/" exact>
                    <Main cartObject={cartObject} setCartObject={setCartObject} />
                </Route>
            </Switch>
        </Router>
    )
>>>>>>> 36fedf77a051b5f0c16ea53b8fb7936291be3e11
}

export default App