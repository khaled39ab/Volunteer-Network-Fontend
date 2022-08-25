import React from 'react';
import { Card } from 'react-bootstrap';
import './Event.css'

const Event = ({ event }) => {
    const { name, img } = event;
    return (
        <>
            <div className='event'>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body className='card-title'>
                        <Card.Title>{name} <span>Click to Join</span></Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default Event;