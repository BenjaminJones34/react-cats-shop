import './App.css';
import Cat from "./components/Cat.js";
import { useState, useEffect } from "react";
const faker = require("faker");

const App = () => {
    const [theData, setData] = useState([]);
    const [curprice, setPrice] = useState(0);

    useEffect(() => {
        HandleFetch();
    }, []);


    const HandleFetch = async () => {
        let response = await fetch("https://api.thecatapi.com/v1/images/search?limit=5");
        let data = await response.json();
        // name={faker.name.findName()} price={faker.commerce.price()}
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            item.name=faker.name.findName()
            item.price=faker.commerce.price()
        }
        setData(data);
    };

    const HandleBasket = (price) => {
        let Nprice = parseInt(price);
        setPrice(curprice + Nprice)
    }

    return (
      <div>
          {theData.map((item, index) => (
              <Cat key={index} url={item.url} name={item.name} price={item.price} HandleBasket={HandleBasket}/>))}
              <p>{curprice}</p>
      </div>
  )
}

export default App;
