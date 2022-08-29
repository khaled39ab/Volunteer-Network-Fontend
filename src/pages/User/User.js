import React from 'react';
import useEvents from '../../hooks/useEvents';

const User = () => {
    const [ events ] = useEvents();

    return (
        <div>
            <h1>Your Event</h1>
        </div>
    );
};

export default User;