import './App.css';
import { useState } from "react"
import Cart from "./components/Cart"

const App = () => {
  const [cartKeys, setCartKeys] = useState({
                                        itemsInCart: [{url:"https://cdn2.thecatapi.com/images/c6nlmlFC8.jpg", value: "5.90"}, {url:"https://cdn2.thecatapi.com/images/c6nlmlFC8.jpg", value: "5.90"}],
                                        showModal: false,
                                      })

  return (
    <div>
      <Cart cartKeys={cartKeys} setCartKeys={setCartKeys} />
    </div>
  )
}

export default App;
