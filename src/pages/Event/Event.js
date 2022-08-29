import React from 'react';
import { Card } from 'react-bootstrap';
import './Event.css'

const Event = ({ event }) => {
    const { _id, name, img } = event;

    const handleAddEvent = (id) => {
        let joinEvent = {};
        const storedEvent = localStorage.getItem('event')
        if (storedEvent) {
            joinEvent = JSON.parse(storedEvent)
        }
        const savedEvent = [];
        const keys = Object.keys(savedEvent)


        fetch('https://hidden-hollows-07367.herokuapp.com/joinEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                for (const id in storedEvent) {
                    const addedEvent = data.find(event => event._id === id);
                    if (addedEvent) {
                        const quantity = storedEvent[id];
                        addedEvent.quantity = quantity;
                        savedEvent.push(addedEvent)
                    }
                }
            })

    }

    return (
        <>
            <div className='event'>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body className='card-title' onClick={() => handleAddEvent(_id)}>
                        <Card.Title className='card-title-text'>{name}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default Event;