import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './AddEvent.css'

const AddEvent = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <div className='w-50 mx-auto p-4 my-5 add-event'>
            <h2>Add event you want..</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="validationCustom01">
                        <Form.Control
                            required
                            type="text"
                            placeholder="Event Name"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="validationCustom02">
                        <Form.Control
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