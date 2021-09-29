import styled from "styled-components";
import BasketButton from "./BasketButton";
const Cat = (props) => {
    return (
        <StyledCat>
            <img src={props.url} alt=""></img>
            <p>{props.name}</p>
            <p>Breed: {props.breed}</p>
            <p>Desc: {props.desc}</p>
            <p>£{props.price}</p>
            <BasketButton name={props.name} price={props.price} breed={props.breed} url={props.url} desc={props.desc} HandleBasket={props.HandleBasket} HandleSend={props.HandleSend}/>
        </StyledCat>
    );
};

const StyledCat = styled.div`
border: 2px solid black;
width: 20%;
text-align: center;
    img{
        max-width: 100%;
    }
`
export default Cat;