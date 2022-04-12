import { useEffect, useState } from 'react';
import './Menu.css';

const Menu = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const [menuVisible, setMenuVisible] = useState(true);

    useEffect(() => {
        const listenToScoll = () => {
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (windowScroll > 1000 && window.screen.width < 700) {
            menuVisible && setMenuVisible(false);
        } else {
            setMenuVisible(true);
        }
    }

        window.addEventListener("scroll", listenToScoll);

        return () => window.removeEventListener("scroll", listenToScoll);
    }, [menuVisible]);

    const scrollSmooth = (id) => {
                        /* let pic = document.getElementById('pic-of-day');
                        e.preventDefault();
                        pic && pic.scrollIntoView({
                            behavior: 'smooth'
                        }); */
        let pic = document.getElementById(id);
        pic && pic.scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        menuVisible ? (
            <nav className='menu-nav'>
            {!openMenu ? (
                <div className='open-menu-button'>
                    <i className="fa-solid fa-bars" onClick={() => setOpenMenu(true)}></i>  
                </div>
            ) : (
                <div className='menu-main'>
                <i className="fa-solid fa-x" onClick={() => setOpenMenu(false)}></i> 
                <ul className="menu-list" onClick={() => setOpenMenu(false)}>
                    <li><a href="#home" onClick={(e) => {
                        e.preventDefault();
                        scrollSmooth('home');
                    }}>HOME</a></li>
                    <li><a href="#pic-of-day"  onClick={(e) => {
                        e.preventDefault();
                        scrollSmooth('pic-of-day');
                    }}>Pic of the day</a></li>
                    <li><a href="#form-section"  onClick={(e) => {
                        e.preventDefault();
                        scrollSmooth('form-section');
                    }}>Search more pics</a></li>
                    <li><a href="#about-me"  onClick={(e) => {
                        e.preventDefault();
                        scrollSmooth('about-me');
                    }}>About me</a></li>
                    <div className='icons'>
                        <a href='https://github.com/csalvite' target='_blank' rel='noreferrer'><i className="fa-brands fa-github"></i></a>
                        <a href='https://www.linkedin.com/in/cesar-alvite/' target='_blank' rel='noreferrer'><i className="fa-brands fa-linkedin"></i></a>
                        <a href='https://www.instagram.com/cesar_alvite/' target='_blank' rel='noreferrer'><i className="fa-brands fa-instagram"></i></a>
                    </div>
                </ul>
                </div>
            )}
        </nav>
        ) : ''
    )
}

export { Menu };