import './Results.css';

const ResultDetailed = ({ item, setIsOpen }) => {

    return (
        <div className='popup' onClick={() => setIsOpen(false)}>
            <div className="popup_content">
                <div className='content'>
                    <i className="fa-solid fa-x" onClick={() => setIsOpen(false)}></i>
                    <img src={item.url} alt={item.title} />
                    <h1>{item.title}</h1>
                    <i>{item.date}</i>
                    <p>{item.explanation}</p>
                </div>
            </div>
        </div>
    )
}

export { ResultDetailed };