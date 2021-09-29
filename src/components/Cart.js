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
    }
`

const Cart = (props) => {
    const openModal = () => {
        props.setCartObject({ itemsInCart: props.cartObject.itemsInCart, showModal: !props.cartObject.showModal, })
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