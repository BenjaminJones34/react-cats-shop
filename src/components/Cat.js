import styled from "styled-components";
import BasketButton from "./BasketButton";
const Cat = (props) => {
    return (
        <StyledCat>
            <img src={props.url} alt=""></img>
            <div className="textBox">
                <p>{props.name}</p>
                <p>Breed: {props.breed}</p>
                <p>Desc: {props.desc}</p>
                <p>£{props.price}</p>
                <BasketButton name={props.name} price={props.price} breed={props.breed} url={props.url} desc={props.desc} HandleBasket={props.HandleBasket} HandleSend={props.HandleSend}/>
            </div>
        </StyledCat>
    );
};

const StyledCat = styled.div`
display: flex;
flex-direction: column;
border: 2px solid black;
width: 20%;
min-height: 30%;
text-align: center;
margin-bottom: 30px;
    img{
        max-width: 100%;
    }
    .textBox {
        display: flex;
        border-top: 2px solid black;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        background-color: #41B3A3;
        flex: 1;
    }
    p{
        width: 100%;
    }
`
export default Cat;