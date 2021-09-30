export const CartList = (props) => {
    const removeItem = (index, cartObject, setCartObject) => {
        let newArray = cartObject.itemsInCart
        let temp = newArray.splice(index, 1)
        return setCartObject({itemsInCart: newArray, showModal: cartObject.showModal})
    }


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
                                                                    <div className="buttonSection">
                                                                        <button onClick={() => removeItem(index, props.cartObject, props.setCartObject)}>Remove</button>
                                                                    </div>
                                                                </div>)
    return list
}

export default CartList