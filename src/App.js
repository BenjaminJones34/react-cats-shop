import './App.css';
import Cat from "./components/Cat.js";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Cart from "./components/Cart"
const faker = require("faker");

const App = () => {
    const [theData, setData] = useState([]);
    const [curprice, setPrice] = useState(0);
    const [cartObject, setCartObject] = useState({
                                                  itemsInCart: [],
                                                  showModal: false,
                                                });

    useEffect(() => {
        HandleFetch();
    }, []);

    const HandleFetch = async () => {
        let response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
        let data = await response.json();
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            item.name = faker.name.findName();
            item.price = faker.commerce.price();
            item.breed = faker.animal.cat();
            item.desc = faker.commerce.productAdjective();
    }
        setData(data);
    };

    const HandleBasket = (price) => {
        setPrice(curprice + parseInt(price))
    }

    const HandleSend = (name, price, breed, url, desc) => {
        let cat = {
            name: name,
            price: price,
            breed: breed,
            url: url,
            desc: desc
        };
        let tempCart = cartObject;
        tempCart.itemsInCart = [...tempCart.itemsInCart, cat];
        setCartObject(tempCart);  
    }

    return (
      <div>
          <h1> Cats 4 Lyfe</h1>
          <Cart cartObject={cartObject} setCartObject={setCartObject} />
          <StyledPetBox className="petBox">
          {theData.map((item, index) => (
              <Cat key={index} url={item.url} name={item.name} price={item.price} breed={item.breed} desc={item.desc} HandleBasket={HandleBasket} HandleSend={HandleSend}/>))}
        </StyledPetBox>
      </div>
  )
}

const StyledPetBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`
export default App;
