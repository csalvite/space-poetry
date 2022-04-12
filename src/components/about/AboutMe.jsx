import './AboutMe.css';

const AboutMe = () => {
    return (
            <section id='about-me'>
                <h2 className="title-section">About Me</h2>

                <img src='/resources/img/AboutMe.jpg' alt='AboutMeImage' />

                <div className='about-me-contain'>
                    <h3> Thank You</h3>
                    
                    <h4>Hello World!</h4>
                    <p>
                    I'm César, from Galicia, Spain and i work as a frontend developer using ReactJS. I've been studing computer science since i was 18 and working hard for my future.
                    </p>

                    <p>
                    I love space and this project was so fun to me, NASA's APOD api is easy to use and open source.
                    </p>
                    <p>
                    If you are interested to me as a worker, please see my other projects on GitHub :)
                    </p>

                    <div className='rrss'>
                        <a href='https://github.com/csalvite' target='_blank' rel='noreferrer'><i className="fa-brands fa-github"></i></a>
                        <a href='https://www.linkedin.com/in/cesar-alvite/' target='_blank' rel='noreferrer'><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </section>
    )
}

export { AboutMe };