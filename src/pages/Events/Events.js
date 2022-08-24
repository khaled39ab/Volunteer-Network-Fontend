import React, { useEffect, useState } from 'react';

import Event from '../Event/Event';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './Events.css'

const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('https://hidden-hollows-07367.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);
    
    return (
        <div>
            <PageTitle title='Events'></PageTitle>
            <div className='events'>
                
                {
                    events.map(event => <Event
                        key={event._id}
                        event={event}
                    ></Event>)
                }
            </div>
        </div>
    );
};

export default Events;