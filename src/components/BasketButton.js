import styled from "styled-components";

const BasketButton = ({name, price, breed, HandleBasket, HandleSend, url, desc}) => {
    
    const HandleSubmit = (e) => {
        e.preventDefault();
        HandleBasket(price);
        HandleSend(name, price, breed, url, desc);
        
    };

    return (
        <StyledForm onSubmit={HandleSubmit}>
            <button type="submit" price={price}>Add to basket</button>
        </StyledForm>
    )
};

const StyledForm = styled.form`
button {    
background-color: #E8A87C;

}
button:hover {
    transform: scale(1.1);
}
`
export default BasketButton;