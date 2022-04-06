import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Results } from "../form-results/Results";
import './Form.css';

const { REACT_APP_API_KEY, REACT_APP_URL } = process.env;

const Form = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showResults, setShowResults] = useState(false);
    const [results, setResults] = useState([]);

    // asi tenemos la fecha correctamente para hacer el fetch luego!
    console.log(startDate.toISOString().slice(0, 10));

    const handleSearchPics = async () => {
        const startDateConverted = startDate.toISOString().slice(0, 10);
        const endDateConverted = endDate.toISOString().slice(0, 10);

        try {
            const response = await fetch(`${REACT_APP_URL}${REACT_APP_API_KEY}&start_date=${startDateConverted}&end_date=${endDateConverted}`);
    
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

        <form onSubmit={(e) => {
            e.preventDefault();
            window.scrollTo({
               top: 3000,
               behavior: 'smooth',
           })
            setShowResults(true);
            handleSearchPics();
        }}>
            <div className="form-container">
                <div className="pics-between-two-dates">
                    <label>Pictures between two dates</label> <br />
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  /> 
                    <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}  />
                </div>
                <div className="aleatory-dates">
                    <label>Aleatory dates: </label>
                    <input type='number' max={10} name="aleatory" placeholder="Write a number of pics you want to see..." />
                </div>
            </div>

            <button className="btn-form-section">Lets See!</button>
        </form>

        {showResults ? <Results results={results} /> : ''}
        </section>
    )
}

export { Form };