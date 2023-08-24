import React from 'react';
import logo from '../images/Logo.svg'
import hamburguer from '../images/🦆 icon _hamburger menu_.svg'

const Nav = () => {

    return (

        <nav>
            <a href='/'>

                <img src={logo} alt='logo' />

            </a>

            <a href='/'>

                <img src={hamburguer} alt='mobile' />

            </a>
            <ul>
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