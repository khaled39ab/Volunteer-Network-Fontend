import React, { useEffect, useState } from 'react';
import useEvents from '../../hooks/useEvents';

import Event from '../Event/Event';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './Events.css'

const Events = () => {
    const [events] = useEvents();
    
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