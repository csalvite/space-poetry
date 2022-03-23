
import { AngleDown } from './AngleDown';
import './Header.css';

const Header = () => {

    return (
        <header id='home'>
            <video
                autoPlay
                loop
                muted
                src="./resources/videos/moon_background.mp4"
                className="video-background">
                Video cannot be loaded.
			</video>

            <nav className='header-container'>
                <h1>Space Poetry</h1>
                <h2>La belleza del espacio</h2>
                
                <AngleDown />
            </nav>

        </header>
    )
}

export { Header };