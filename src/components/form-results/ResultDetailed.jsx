import './Results.css';

const ResultDetailed = ({ item, setIsOpen }) => {

    return (
        <div className="modal">
            <i className="fa-solid fa-x" onClick={() => setIsOpen(false)}></i>
            <h1>OPEN!</h1>
            <img src={item.url} alt={item.title} />
            <h1>{item.title}</h1>
            <i>{item.date}</i>
            <p>{item.explanation}</p>
        </div>
    )
}

export { ResultDetailed };