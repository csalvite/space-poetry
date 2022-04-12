import { useState } from 'react';
import { ResultDetailed } from './ResultDetailed';
import './Results.css';

const Results = ({ results, isBetweenTwoDates, startDate, endDate, aleatoryPics, handleSearchPics }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [itemInfo, setItemInfo] = useState();

    const titleReload = `Reload ${aleatoryPics} pictures`;

    return (
        <section className='results-section'>
        {isBetweenTwoDates ? <h3 className="title-results">Showing Pics Between {startDate} and {endDate}</h3> : <h3 className="title-results">Showing {aleatoryPics} Aleatory Pics</h3>}
        <div className="results">
            {results?.map((item) => {
                return (
                    <div key={item.date} className='pic-card' onClick={() => {
                        setIsOpen(true);
                        setItemInfo(item);
                    }}>
                        <img src={item.url} alt={item.title} />
                        <h3>{item.title}</h3>
                        <i>{new Date(item.date).toLocaleDateString()}</i>
                        <p>{item.explanation.slice(0, 50)}...</p>
                    </div>
                )
            })}

            {isOpen ? <ResultDetailed item={itemInfo} setIsOpen={setIsOpen} /> : ''}

        </div>
            {!isBetweenTwoDates ? <i className="fa-solid fa-rotate-right" title={titleReload} onClick={() => handleSearchPics()}></i> : '' }
        </section>
    );
}

export { Results };