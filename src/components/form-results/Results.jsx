import { useState } from 'react';
import { ResultDetailed } from './ResultDetailed';
import './Results.css';

const Results = ({ results }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [itemInfo, setItemInfo] = useState();

    return (
        <section className="results">
            {results?.map((item) => {
                return (
                    <div key={item.date} className='pic-card' onClick={() => {
                        setIsOpen(true);
                        setItemInfo(item);
                    }}>
                        <img src={item.url} alt={item.title} />
                        <h3>{item.title}</h3>
                        <i>{item.date}</i>
                        <p>{item.explanation.slice(0, 50)}...</p>
                    </div>
                )
            })}

            {isOpen ? <ResultDetailed item={itemInfo} setIsOpen={setIsOpen} /> : ''}
        </section>
    );
}

export { Results };