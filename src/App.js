import './App.css';
import { useState } from "react"
import Main from "./components/Main"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

const App = () => {
    const [cartObject, setCartObject] = useState({
        itemsInCart: [],
        showModal: false,
        wallet: "5000"
    });
    
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Main cartObject={cartObject} setCartObject={setCartObject} />
                </Route>
                <Route path="/:id"> {/*individual product page*/}

                </Route>
                <Route path="/checkOut">

                </Route>
            </Switch>
        </Router>
    )
}

export default App