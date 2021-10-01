import { useLocation, useHistory } from "react-router-dom";
import styled from "styled-components";

const CatPage = () => {
  const location = useLocation();
  const history = useHistory();

  const { name, breed, desc, url, mainDesc } = location.state;

  const handleHome = () => {
    history.push("/");
  };

  if (location.state.id === undefined) {
    history.push("/");
  }
  return (
    <div>
      <StyledButton>
        <button onClick={handleHome}>Home</button>
      </StyledButton>
      <StyledCatPage>
        <h1>Cat name: {name}</h1>
        <img src={url} />
        <p>Breed: {breed}</p>
        <p>One words description: {desc}</p>
        <p>Pickup from: {mainDesc}</p>
      </StyledCatPage>
    </div>
  );
};

const StyledCatPage = styled.div`
  text-align: center;
  img {
    max-width: 50%;
    border-radius: 10%;
    border: 3px solid goldenrod;
  }
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 25px;
  button {
    width: 15%;
  }
`;

export default CatPage;
