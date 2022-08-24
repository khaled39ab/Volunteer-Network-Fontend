import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './AddEvent.css'

const AddEvent = () => {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return
        }

        const eventName = event.target.eventName.value;
        const photoUrl = event.target.photoUrl.value;
        const data = { name: eventName, img: photoUrl }

        fetch('https://hidden-hollows-07367.herokuapp.com/events', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
            })
            toast('Successfully added your event');
        navigate('/events');
    };

    return (
        <div className='w-50 mx-auto p-4 my-5 add-event'>
            <h2>Add event you want..</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="validationCustom01">
                        <Form.Control
                            name='eventName'
                            required
                            type="text"
                            placeholder="Event Name"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="validationCustom02">
                        <Form.Control
                            name='photoUrl'
                            required
                            type="text"
                            placeholder="Photo Url"
                        />
                    </Form.Group>
                </Row>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    );
};

export default AddEvent;