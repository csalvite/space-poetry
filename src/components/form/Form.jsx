import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Results } from "../form-results/Results";
import './Form.css';

const { REACT_APP_API_KEY, REACT_APP_URL } = process.env;

const Form = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [searchCountPics, setSearchCountPics] = useState();
    const [showResults, setShowResults] = useState(false);
    const [results, setResults] = useState([]);
    const [isBetweenTwoDates, setIsBetweenTwoDates] = useState();

    const handleSearchPics = async (searchBy) => {
        
        let options;
        if (searchBy === 'date') {
            const startDateConverted = startDate.toISOString().slice(0, 10);
            const endDateConverted = endDate.toISOString().slice(0, 10);
            options = `start_date=${startDateConverted}&end_date=${endDateConverted}`;
            setIsBetweenTwoDates(true);
        } else {
            options = `count=${searchCountPics}`;
            setIsBetweenTwoDates(false);
        }

        try {
            const response = await fetch(`${REACT_APP_URL}${REACT_APP_API_KEY}&${options}`);
    
            if (response.ok) {
                const body = await response.json();
                setResults(body);
            } else {
                console.error('error :/');
            }

        } catch (error) {
            console.error(error.msg);
        }
    }

    return (
        <section id='form-section' className="form-section">
            <h2 className="title-section">What do you want to see?</h2>

        <form className="form-container">
                <div className="pics-between-two-dates">
                    <label>Pictures between two dates</label> <br />
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  /> 
                    <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}  />
                    <button 
                        className="btn-form-section"  
                        onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({
                        top: 3200,
                        behavior: 'smooth',
                    })
                        setShowResults(true);
                        handleSearchPics('date');
                    }}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            
                <div className="aleatory-dates">
                    <label>Aleatory dates: </label>
                    <input 
                        type='number' 
                        name="aleatory" 
                        onChange={(e) => setSearchCountPics(e.target.value)} 
                        placeholder="Write a number of pics you want to see..." 
                    />
                    <button 
                        className="btn-form-section"  
                        onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({
                        top: 3200,
                        behavior: 'smooth',
                        })
                        setShowResults(true);
                        handleSearchPics();
                    }}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div> 
        </form>
        {showResults ? <Results 
                            results={results} 
                            isBetweenTwoDates={isBetweenTwoDates} 
                            startDate={startDate.toLocaleDateString()}
                            endDate={endDate.toLocaleDateString()}
                            aleatoryPics={searchCountPics}
                        /> : ''}
        </section>
    )
}

export { Form };