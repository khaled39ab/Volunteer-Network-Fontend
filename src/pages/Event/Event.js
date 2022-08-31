import React from 'react';
import { Card } from 'react-bootstrap';
import './Event.css'

const Event = ({ event }) => {
    const { _id, name, img } = event;

    const handleAddEvent = (id) => {
        let joinEvent = [];
        const storedEvent = localStorage.getItem('event')
        if (storedEvent) {
            joinEvent = JSON.parse(storedEvent)
        }
        joinEvent.push(id);
        
        localStorage.setItem('event', JSON.stringify(joinEvent))

        const keys = {id}


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