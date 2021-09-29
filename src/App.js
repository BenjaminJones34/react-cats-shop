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
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            item.name = faker.name.findName();
            item.price = faker.commerce.price();
            item.breed = faker.animal.cat();
    }
        setData(data);
    };

    const HandleBasket = (price) => {
        setPrice(curprice + parseInt(price))
    }

    const HandleSend = (name, price, breed, url) => {
        let cat = {
            name: name,
            price: price,
            breed: breed,
            url: url
        };
        console.log(cat)
    }

    return (
      <div>
          <h1> Cats 4 Lyfe</h1>
          {theData.map((item, index) => (
              <Cat key={index} url={item.url} name={item.name} price={item.price} breed={item.breed} HandleBasket={HandleBasket} HandleSend={HandleSend}/>))}
              <p>{curprice}</p>
      </div>
  )
}

export default App;
