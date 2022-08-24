import React from 'react';
import { Card } from 'react-bootstrap';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Event = ({ event }) => {
    const { name, img } = event;
    return (
        <>
            

            <div className='event'>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default Event;