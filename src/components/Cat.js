const Cat = (props) => {
    return (
        <div>
            <img src={props.url} alt=""></img>
            <p>{props.name}</p>
            <p>£{props.price}</p>
        </div>
    )
}

export default Cat;