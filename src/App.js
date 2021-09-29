import './App.css';
import Cat from "./components/Cat.js";
import { useState, useEffect } from "react";
const faker = require("faker");

const App = () => {
    const [theData, setData] = useState([])

    useEffect(() => {
    HandleFetch();
    }, []);


    const HandleFetch = async () => {
        let response = await fetch("https://api.thecatapi.com/v1/images/search?limit=5");
        let data = await response.json();
        console.log(data);
        setData(data);
    };
    return (
      <div>
          {theData.map((item, index) => (
              <Cat url={item.url} name={faker.name.findName()} price={faker.commerce.price()}/>))}
      </div>
  )
}

export default App;
