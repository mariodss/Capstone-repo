import logo from '../images/Logo.svg'
import hamburguer from '../images/🦆 icon _hamburger menu_.svg'
import './styles/Nav.css'
import React, { useState } from 'react'


const Nav = () => {

    const [menuStart, setMenuStart] = useState(false);

    const toggleMenu = () => {

        setMenuStart(!menuStart);


    }

    return (

        <nav className={`navbar ${menuStart ? "open" : ""}`}>
            <a href='/' classname='logo'>

                <img src={logo} alt='logo' />

            </a>

            <a href='/' classname='ham' onClick={toggleMenu}>

                <img src={hamburguer} alt='mobile' />

            </a>
            <ul className={`navLinks ${menuStart ? "visible" : ""}`}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Menu</a>
                </li>
                <li>
                    <a href="/">Reservations</a>
                </li>
                <li>
                    <a href="/">Order Online</a>
                </li>
                <li>
                    <a href="/">Log in</a>
                </li>
            </ul>



        </nav>



    );
};

export default Nav;