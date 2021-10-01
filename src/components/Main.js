import Cat from "./Cat.js";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Cart from "./Cart";
const faker = require("faker");

const Main = (props) => {
    const [theData, setData] = useState([]);
    const [curprice, setPrice] = useState(0);
    

    useEffect(() => {
        HandleFetch();
    }, []);

    const HandleFetch = async () => {
        let response = await fetch("https://api.thecatapi.com/v1/images/search?limit=12");
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
        setPrice(curprice + parseInt(price));
    };

    const HandleSend = (name, price, breed, url, desc) => {
        let cat = {
            name: name,
            price: price,
            breed: breed,
            url: url,
            desc: desc
        };
        let tempCart = props.cartObject;
        tempCart.itemsInCart = [...tempCart.itemsInCart, cat];
        props.setCartObject(tempCart);
    };

    return (
        <div>
            <StyledTitle> Cats 4 Lyfe</StyledTitle>
            <p>Amount in wallet: £{parseFloat(props.cartObject.wallet).toFixed(2)}</p>
            <Cart cartObject={props.cartObject} setCartObject={props.setCartObject} />
            <StyledPetBox className="petBox">
                {theData.map((item, index) => (
                    <Cat key={index} url={item.url} name={item.name} price={item.price} breed={item.breed} desc={item.desc} HandleBasket={HandleBasket} HandleSend={HandleSend} />))}
            </StyledPetBox>
        </div>
    );
};
const StyledPetBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;
const StyledTitle = styled.h1`
text-align: center;
`;
export default Main;
