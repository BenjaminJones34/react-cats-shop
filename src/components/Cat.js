import styled from "styled-components";
import BasketButton from "./BasketButton";
import { Link } from "react-router-dom";

const Cat = ({
  name,
  breed,
  desc,
  price,
  id,
  url,
  HandleBasket,
  HandleSend,
}) => {
  return (
    <StyledCat>
      <img src={url} alt=""></img>
      <div className="textBox">
        <p>{name}</p>
        <p>Breed: {breed}</p>
        <p>Desc: {desc}</p>
        <p>£{price}</p>
        <Link
          to={{
            pathname: `/${id}`,
            state: { name, breed, desc, price, id, url },
          }}
        >
          More Info
        </Link>
        <BasketButton
          name={name}
          price={price}
          breed={breed}
          url={url}
          desc={desc}
          HandleBasket={HandleBasket}
          HandleSend={HandleSend}
        />
      </div>
    </StyledCat>
  );
};

const StyledCat = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  width: 20%;
  min-height: 30%;
  text-align: center;
  margin-bottom: 30px;
  img {
    max-width: 100%;
  }
  img:hover {
    transform: scale(1.4);
    border: 2px solid black;
  }
  .textBox {
    display: flex;
    border-top: 2px solid black;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background-color: #41b3a3;
    flex: 1;
    padding-bottom: 5px;
  }
  p {
    width: 100%;
  }
  p:hover {
    text-decoration: underline;
  }
`;
export default Cat;
