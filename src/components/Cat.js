import styled from "styled-components";
import BasketButton from "./BasketButton";
const Cat = (props) => {
    return (
        <StyledCat>
            <img src={props.url} alt=""></img>
            <p>{props.name}</p>
            <p>Breed: {props.breed}</p>
            <p>£{props.price}</p>
            <BasketButton name={props.name} price={props.price} breed={props.breed} url={props.url} HandleBasket={props.HandleBasket} HandleSend={props.HandleSend}/>
        </StyledCat>
    );
};

const StyledCat = styled.div`
    img{
        max-width: 20%;
    }
`
export default Cat;