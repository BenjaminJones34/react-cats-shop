import { useLocation, useHistory } from "react-router-dom";

const CatPage = () => {
  const location = useLocation();
  const history = useHistory();

  const { name, breed, desc, url } = location.state

  const handleHome = () => {
    history.push("/");
  }

  if (location.state.id === undefined) {
    history.push("/");
  }
  return (
    <div>
        <button onClick={handleHome}>Home</button>
      <h1>Cat name: {name}</h1>
      <img src={url} />
    </div>
  );
};

export default CatPage;
