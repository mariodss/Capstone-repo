import React from 'react';
import { Link } from 'react-router-dom';
import restauranfood from '../images/restauranfood.jpg'
import './styles/Header.css'


function Header() {


    return (
        <header className='header'>
            <section>
                <div className='poster'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Little Lemon is charming neighborhood bistro that
                        serves simple food and classic cocktails in a lively but classic
                        enviroment
                    </p>
                    <Link to="/booking"><button aria-label='On Click'>Reserve Table</button></Link>
                </div>

                <div className='banner-food'>
                    <img src={restauranfood} alt='' />
                </div>
            </section>

        </header>

    );
}
export default Header;