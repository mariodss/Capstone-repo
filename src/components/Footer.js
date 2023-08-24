import React from 'react'
import logo from "../images/Logo.svg"


const Footer = () => {

    return (
        <footer>
            <section>
                <div classname='company-info'>
                    <img src={logo} alt='' />
                </div>
                <div>

                    <h3>Links</h3>
                    <ul>

                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservations</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Log in</a></li>
                    </ul>
                </div>
                <div>

                    <h3>Contact</h3>
                    <ul>
                        <li><a href='/'>Adress</a></li>
                        <li><a href='/'>Phone Number</a></li>
                        <li><a href='/'>Email</a></li>

                    </ul>


                </div>

                <div>
                    <h3>Social Media Links</h3>

                    <ul>
                        <li><a href='/'>Facebook</a></li>
                        <li><a href='/'>Instagram</a></li>
                        <li><a href='/'>Twitter</a></li>
                    </ul>

                </div>

            </section>

        </footer>

    );

}

export default Footer;