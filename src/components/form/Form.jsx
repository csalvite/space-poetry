import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Form.css';

const Form = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    // asi tenemos la fecha correctamente para hacer el fetch luego!
    console.log(startDate.toISOString().slice(0, 10));
    return (
        <section id='form-section' className="form-section">
            <h2 className="title-section">What do you want to see?</h2>

            <form>
                <ul>
                    <li>
                        <label>Pictures between two dates</label> <br />
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  /> 
                        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}  />
                    </li>
                    <li>
                        <label>Aleatory dates: </label>
                        <input type='number' name="aleatory" placeholder="Write a number of pics you want to see..." />
                    </li>
                    <li>
                        <button>Lets See!</button>
                    </li>
                </ul>
            </form>
        </section>
    )
}

export { Form };