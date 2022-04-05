import { useEffect, useRef, useState } from "react";
import './PhotoDetailed.css';
const { REACT_APP_URL, REACT_APP_API_KEY } = process.env;

const PhotoDetailed = () => {
    
    const [picOfDay, setPicOfDay] = useState([]);
    const [pic, setPic] = useState('/resources/vectors/tail-spin.svg');

    useEffect(() => {
        const getPicOfDay = async () => {

            try {
                const response = await fetch(`${REACT_APP_URL}${REACT_APP_API_KEY}&date=`);

                if (response.ok) {
                    const body = await response.json();
                    setPicOfDay(body);
                    setPic(body.url);
                } else {
                    setPicOfDay({
                        error: 'Ha habido un error :('
                    })
                }
            } catch (error) {
                console.error(error);
            }
        }

        getPicOfDay();
    }, [setPicOfDay])

    console.log(picOfDay);
    return (
        <section id="pic-of-day" className="pic-of-day-section">
            <h2 className="title-section">Pic of the Day</h2>
            <div className="pic-of-day-container">
                <h3>{picOfDay.title}</h3>
                <i>{picOfDay.date}</i>
                {/* <div className="pic-of-day-title">
                    <h3>{picOfDay.title}</h3>
                    <h4>{picOfDay.copyright} - <i>{picOfDay.date}</i></h4>
                </div> */}
                <p>
                    {picOfDay.explanation} - <strong>{picOfDay.copyright}</strong>
                </p>
                <img className="pic-list" src={pic} alt='space pic' />
            </div>
        </section>
    )
}

export { PhotoDetailed };