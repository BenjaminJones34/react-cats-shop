import './App.css';
import { useState } from "react"
import Cart from "./components/Cart"

const App = () => {
  const [cartObject, setCartObject] = useState({
                                        itemsInCart: [],
                                        showModal: false,
                                      })

  return (
    <div>
      <Cart cartObject={cartObject} setCartObject={setCartObject}/>
    </div>
  )
}

export default App;
