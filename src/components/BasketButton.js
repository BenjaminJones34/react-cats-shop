const BasketButton = ({name, price, HandleBasket}) => {
    const HandleSubmit = (e) => {
        e.preventDefault();
        HandleBasket(price)
    };
    return (
        <form onSubmit={HandleSubmit}>
            <button type="submit" price={price}>Add to basket</button>
        </form>
    )
};

export default BasketButton;