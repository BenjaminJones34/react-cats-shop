import styled from "styled-components";
import BasketButton from "./BasketButton";
const Cat = (props) => {
    return (
        <StyledCat>
            <img src={props.url} alt=""></img>
            <p>{props.name}</p>
            <p>£{props.price}</p>
            <BasketButton name={props.name} price={props.price} HandleBasket={props.HandleBasket}/>
        </StyledCat>
    );
};

const StyledCat = styled.div`
    img{
        max-width: 20%;
    }
`
export default Cat;