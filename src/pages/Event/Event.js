import React from 'react';
import { Card } from 'react-bootstrap';
import './Event.css'

const Event = ({ event }) => {
    const { _id, name, img } = event;

    const handleAddEvent = (id) => {
        const data = { id };
        fetch('https://hidden-hollows-07367.herokuapp.com/joinEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Success:", data);
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