const BasketButton = ({name, price, breed, HandleBasket, HandleSend, url}) => {
    
    const HandleSubmit = (e) => {
        e.preventDefault();
        HandleBasket(price);
        HandleSend(name, price, breed, url);
        
    };

    return (
        <form onSubmit={HandleSubmit}>
            <button type="submit" price={price}>Add to basket</button>
        </form>
    )
};

export default BasketButton;