import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState (false);
    const [button, setButton] = useState (true);

    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth == 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                     <img src="/images/logo.png" alt="" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times": "fas fa-bars"}></i>
                    </div>

                    <ul className={click ? "nav-menu active": "nav-menu"}>
                        <li className="nav-items">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link to="/About" className="nav-links" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link to="/Mint" className="nav-links" onClick={closeMobileMenu}>
                                Mint
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link to="/Roadmap" className="nav-links" onClick={closeMobileMenu}>
                                Roadmap
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link to="/Teams" className="nav-links" onClick={closeMobileMenu}>
                                Teams
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link to="/FAQ" className="nav-links" onClick={closeMobileMenu}>
                                FAQ
                            </Link>
                        </li>
                        
                    </ul>

                    <div className="connect">
                        <div className="circle_1"></div>
                        <div className="text">CONNECT</div>
                    </div>
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar
