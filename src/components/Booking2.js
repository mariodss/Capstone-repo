import React from 'react';
import Booking from './booking';




const Booking2 = (props) => {

    return (
        <Booking availableTimes={props.availableTimes} dispatch={props.dispatch}
            SubmitForm={props.SubmitForm} />

    );


};

export default Booking2;