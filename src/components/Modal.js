import styled from "styled-components"
import { MdClose } from "react-icons/md"
import CartList from "./CartList"
import { Link } from "react-router-dom"

export const Modal = (props) => {

    const calculateTotal = (cartObject) => {
        let purchaseTotal = 0
        for (let i = 0; i < cartObject.itemsInCart.length; i++) {
            purchaseTotal += parseFloat(cartObject.itemsInCart[i].price)
        }
        purchaseTotal = purchaseTotal.toFixed(2).toString()
        let amountOfItems = cartObject.itemsInCart.length
        let amountOfItemsText = ""
        if (amountOfItems === 1) {
            amountOfItemsText = "1 item"
        } else {
            amountOfItemsText = `${amountOfItems} items`
        } return [purchaseTotal, amountOfItemsText]
    }

    let totalArray = calculateTotal(props.cartObject)

    console.log(props.cartObject)

    return (
        <>
            {props.cartObject.showModal ? (
                <Background>
                   <ModalWrapper showModal={props.cartObject.showModal}>
                       <ModalContent>
                           <CloseModalButton aria-label="Close modal" onClick={() => {props.setCartObject({itemsInCart: props.cartObject.itemsInCart, showModal: !props.cartObject.showModal, wallet: props.cartObject.wallet})}} />
                           <h1>Cart: {totalArray[1]}</h1>
                           <div className="list">
                            <CartList cartObject={props.cartObject} setCartObject={props.setCartObject} />
                           </div>
                           <div className="totalSection">
                               <div className="totalTextSection">
                                    <p className="purchaseTotal">Total: {"£" + totalArray[0]}</p>
                                    <p>Amount in wallet: £{parseFloat(props.cartObject.wallet).toFixed(2)}</p>
                               </div>
                               <div className="purchaseSection">
                                    <Link to="/checkOut">
                                        <button disabled={props.cartObject.itemsInCart.length === 0 || props.cartObject.wallet < totalArray[0] ? true : false}>Go to check-out</button>
                                    </Link>
                               </div>
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
    height: 100vh;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
`

const ModalWrapper = styled.div`
    width: 90vw;
    height: fit;
    padding-bottom: 20px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: orange;
    border: 5px groove red;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
    max-height: 85vh;
    overflow-y: auto;
    margin-bottom: 100px;
`
const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center
    align-items: center;
    width: 85vw;

    h1 {
        margin-left: 40px;
        font-size: 3em;
        color: purple;
        text-decoration: underline;
    }

    .list {
        width: 95%;
        margin-left: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
        height: 100%;
        padding-right: 10px;
        padding-left: 0px;
        border: 6px solid grey;
        border-left: none;
        border-bottom: none;

        .imageSection {
            height: 200px;
            width: 30%;
            text-align: center;
            padding-top: 20px;
            padding-bottom: 10px;
        }

        img {
            max-height: 200px;
            max-width: 250px;
        }

        .nameSection {
            width: 20%;
            font-size: 1.5em;

            text-shadow: 2px 2px 4px grey;
        }

        .priceSection {
            width: 20%;
            font-size: 1.5em;
           
            color: green;
            font-weight: 900;
        }

        .buttonSection {
            width: 30%;
            text-align: center;
        }

        button {
            height: 50px;
            width: 100px;
            font-size: 1.2em;
            margin-left: 50px;
            cursor: pointer;
            background-color: red;
            color: whitesmoke;
        }

        .item {
            display: flex;
            align-items: center;
            width: 100%;
            border-bottom: 8px groove rgba(0, 153, 153, 0.8);
            border-left: 10px ridge rgba(0, 153, 153, 0.8);
            background-color: rgb(255, 190, 100)
        }

    }
        .totalSection {
            display: flex;

            .purchaseSection {
                width: 50%;
                display: flex;
                justify-content: flex-end;
            }

            .totalTextSection {
                width: 50%;
            }

            button {
                height: 100px;
                width: 200px;
                margin-top: 20px;
                font-size: 2em;
                background-color: blue;
                color: white;
                cursor: pointer;
                border-radius: 10px;
                margin-right: 20px;
            }
        }

        .purchaseTotal {
            font-size: 3em;
            margin-left: 150px;
            margin-bottom: 30px;
            font-weight: bold;
            color: green;
            text-shadow: 2px 2px 2px black;
            text-decoration: underline;
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