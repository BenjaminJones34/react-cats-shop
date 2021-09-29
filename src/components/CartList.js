export const CartList = (props) => {
    const removeItem = (index, cartObject, setCartObject) => {
        let newArray = cartObject.itemsInCart
        let temp = newArray.splice(index, 1)
        return setCartObject({itemsInCart: newArray, showModal: cartObject.showModal})
    }


    let list = props.cartObject.itemsInCart.map((item, index) => <div className="item" id={index}>
                                                                    <img src={item.url} alt="Cat"></img>
                                                                    <button onClick={() => removeItem(index, props.cartObject, props.setCartObject)}>Remove</button>
                                                                    <p>{"£" + item.value}</p>
                                                                </div>)
    return list
}

export default CartList