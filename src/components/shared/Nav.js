import React, { useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';
function Nav() {
    const [isNavSticky, setIsNavSticky] = useState(false);

    const handleNavClick = (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(target);
        if (targetElement) {
            const targetOffsetTop = targetElement.offsetTop;
            window.scrollTo({
                top: targetOffsetTop,
                behavior: 'smooth'
            });
        }
    };

    const handleBrandClick = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.pageYOffset;
            if (currentScrollPosition > 60) {
                setIsNavSticky(true);
            } else {
                setIsNavSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`site-nav ${isNavSticky ? 'sticky' : ''}`}>
            <a className="nav-logo" href="/" onClick={handleBrandClick} aria-label="Alan Chu home">
                <img src="/img/logo.png" alt='logo' width="50px" height="50px" />
            </a>


            <ul className="nav-links">
                <li className="nav-item">
                    <a className="nav-link" href="#about" onClick={handleNavClick}>About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#experience" onClick={handleNavClick}>Experience</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#projects" onClick={handleNavClick}>Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#research" onClick={handleNavClick}>Research</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact" onClick={handleNavClick}>Contact</a>
                </li>
                <li className="nav-social"><SocialIcon url="https://www.linkedin.com/in/alan-hwader-chu/" style={{ height: 34, width: 34 }} /></li>
                <li className="nav-social"><SocialIcon url="https://github.com/AlanChu61" style={{ height: 34, width: 34 }} /></li>
            </ul>
        </nav>
    );
}

export default Nav;
