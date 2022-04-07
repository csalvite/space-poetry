import { useState } from 'react';
import { ResultDetailed } from './ResultDetailed';
import './Results.css';

const Results = ({ results, isBetweenTwoDates, startDate, endDate, aleatoryPics }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [itemInfo, setItemInfo] = useState();

    return (
        <section className="results">
            {isBetweenTwoDates ? <h2 className="title-section">Showing Pics Between {startDate} and {endDate}</h2> : <h2 className="title-section">Showing {aleatoryPics} Aleatory Pics</h2>}
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
        </section>
    );
}

export { Results };