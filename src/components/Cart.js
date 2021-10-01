import styled from "styled-components"
import Modal from "./Modal"

const CartContainer = styled.div`
    display: flex;
    justify-content: flex-end;

    .cartButton {
        height: 50px;
        width: 100px;
        cursor: pointer;
        border-radius: 3px;
        font-size: 1.3em;
        margin: 10px;
        background-image: linear-gradient(180deg, rgba(0, 0, 230, 1), rgba(0, 153, 255, 1));
        color: whitesmoke;
        text-shadow: 2px 2px 5px black;
        transform: scale(1);
        transition: text-shadow 0.2s, transform 0.2s, font-size 0.1s;
    }

    .cartButton:hover {
        transform: scale(1.2);
        text-shadow: 1px 1px 4px gold;
        font-size: 1.6em;
        transition: transform 0.2s, text-shadow 0.2s, font-size 0.15s;
    }
    .cartButton:hover {
        transform: scale(1.1);
    }
    
`

const Cart = (props) => {
    const openModal = () => {
        props.setCartObject({ itemsInCart: props.cartObject.itemsInCart, showModal: !props.cartObject.showModal, wallet: props.cartObject.wallet})
    }
    
    return (
        <div className="">
            <CartContainer>
                <button onClick={openModal} className="cartButton">Cart</button>
                <Modal cartObject={props.cartObject} setCartObject={props.setCartObject}/>
            </CartContainer>  
        </div>
    )
}


export default Cart