import styled from "styled-components";
import { Link } from "react-router-dom";

const CheckOut = (props) => {
    
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

    let list = props.cartObject.itemsInCart.map((item, index) => <div className="item" id={index}>
                                                                    <div className="imageSection">
                                                                        <img src={item.url} alt="Cat"></img>
                                                                    </div>
                                                                    <div className="nameSection">
                                                                        <p>{item.name}</p>
                                                                    </div>
                                                                    <div className="priceSection">
                                                                        <p>{"£" + item.price}</p>
                                                                    </div>
                                                                </div>
    )

    const handlePurchase = () => {
        props.setCartObject({ itemsInCart: [], showModal: false, wallet: props.cartObject.wallet - totalArray[0]})
        alert("Purchase successful!")
    }

    return (
        <div>
            <h1>Check-out</h1>
            <p>Please confirm your purchase</p>
            <CartList>
                <div className="list">
                    {list}
                </div>
            </CartList>
            <p>Total price: £{totalArray[0]}</p>
            <p>Your wallet: £{parseFloat(props.cartObject.wallet).toFixed(2)}</p>
            <ButtonLinks>
                <Link to="/">
                    <button className="back">Go back</button>
                </Link>
                <Link to="/">
                    <button className="purchase" onClick={handlePurchase}>Make purchase</button>
                </Link>
            </ButtonLinks>
        </div>
    )
}

const ButtonLinks = styled.div`

`

const CartList = styled.div`
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

        .item {
            display: flex;
            align-items: center;
            width: 100%;
            border-bottom: 8px groove rgba(0, 153, 153, 0.8);
            border-left: 10px ridge rgba(0, 153, 153, 0.8);
            background-color: rgb(255, 190, 100)
        }

    }
`

export default CheckOut