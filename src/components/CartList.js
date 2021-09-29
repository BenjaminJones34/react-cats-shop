export const CartList = (props) => {
    const removeItem = (index, cartKeys, setCartKeys) => {
        let newArray = cartKeys.itemsInCart
        let temp = newArray.splice(index, 1)
        return setCartKeys({itemsInCart: newArray, showModal: cartKeys.showModal})
    }


    let list = props.cartKeys.itemsInCart.map((item, index) => <div className="item" id={index}>
                                                                    <img src={item.url} alt="Cat"></img>
                                                                    <button onClick={() => removeItem(index, props.cartKeys, props.setCartKeys)}>Remove</button>
                                                                    <p>{"£" + item.value}</p>
                                                                </div>)
    return list
}

export default CartList