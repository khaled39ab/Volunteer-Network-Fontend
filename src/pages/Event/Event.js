import React from 'react';
import { Card } from 'react-bootstrap';
import './Event.css'

const Event = ({ event }) => {
    const { _id, name, img } = event;

    const handleAddEvent = (id) => {
        console.log(id);
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