import React from 'react'
import { useState } from 'react'
import "./styles/Booking.css"

const Booking = (props) => {

    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuest] = useState("");
    const [ocassion, setOcassion] = useState("");




    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange = (e) => {

        setDate(e);
        props.dispatch(e);

    }
    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date</label>
                            <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)}
                                type='data' required />


                        </div>

                        {/*Time Selection*/}

                        <div>
                            <label htmlFor='book-time'>Choose Time</label>
                            <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                                <option value="">Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {
                                        return <option key=
                                            {availableTimes}>{availableTimes}</option>
                                    })


                                }

                            </select>



                        </div>

                        {/*Number of Guests*/}

                        <div>
                            <label htmlFor='book-guests'>Number of Guests:</label>
                            <input id='book-guests' min='1' value={guests} onChange={(e) => setGuest(e.target.value)} />


                        </div>

                        {/*Ocassion selection*/}

                        <div>
                            <label htmlFor='book-ocassion'>Ocassion</label>
                            <select id='book-ocassion' key={ocassion} value={ocassion} onChange={e => setOcassion(e.target.value)}>
                                <option> Birthday </option>
                                <option> Engagement </option>
                                <option> Anniversary </option>

                            </select>

                        </div>

                        <div className='btnSubmit'>
                            <input aria-label='On-Click' type='submit' value={"Make your reservation"} />



                        </div>




                    </fieldset>






                </form>






            </section>







        </header>



    );

};

export default Booking;