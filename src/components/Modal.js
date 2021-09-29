import styled from "styled-components"
import { MdClose } from "react-icons/md"
import CartList from "./CartList"

export const Modal = (props) => {
    let total = 0
    for (let i = 0; i < props.cartObject.itemsInCart.length; i++) {
        total += parseFloat(props.cartObject.itemsInCart[i].value)
    }
    total = total.toFixed(2).toString()

    return (
        <>
            {props.cartObject.showModal ? (
                <Background>
                   <ModalWrapper showModal={props.cartObject.showModal}>
                       <ModalContent>
                           <CloseModalButton aria-label="Close modal" onClick={() => {props.setCartObject({itemsInCart: props.cartObject.itemsInCart, showModal: !props.cartObject.showModal})}} />
                           <h1>Cart:</h1>
                           <div className="list">
                            <CartList cartObject={props.cartObject} setCartObject={props.setCartObject} />
                           </div>
                           <div>
                               <p className="total">Total: {"£" + total}</p>
                           </div>
                       </ModalContent>
                   </ModalWrapper>
                </Background>
            )
            : null}
        </>
    )
}

const Background = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
`

const ModalWrapper = styled.div`
    width: 1000px;
    height: fit;
    padding-bottom: 20px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`
const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center
    align-items: center;
    width: 900px;

    h1 {
        margin-left: 20px;
        font-size: 2.5em;
    }

    .list {
        width: 90%;
        margin-left: 50px;
        display: flex;
        flex-direction: column;

        flex-wrap: wrap;
        height: 100%;

        img {
            height: 200px;
            width: 200px;
        }

        button {
            height: 50px;
            width: 100px;
            font-size: 1.2em;
            margin-left: 100px;
            cursor: pointer;
        }

        .item {
            display: flex;
            align-items: center;
            width: 100%;
            padding: 5px;
            border-bottom: 5px solid black;
        }

        p {
            font-size: 1.3em;
            margin-left: 150px;
        }
    }
        .total {
            font-size: 1.5em;
            margin-left: 20px;
            font-weight: bold;
        }
    }
`
const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`

export default Modal