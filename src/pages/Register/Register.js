import React from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init'
import PageTitle from '../Shared/PageTitle/PageTitle';
import SocialLogIn from '../Shared/SocialLogIn/SocialLogIn';
import './Register.css';
import { toast } from 'react-toastify';

function Register() {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";;

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [
        updateProfile,
        updating,
        updateError
    ] = useUpdateProfile(auth);

    const [
        sendEmailVerification,
        sending,
        verifyError
    ] = useSendEmailVerification(auth);

    let errorMessage;

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
            return
        }
        const email = event.target.email.value;
        const password = event.target.password.value;
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const name = firstName + ' ' + lastName;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name })
        toast('Sent a email to verify')
        navigate(from, { replace: true });

    };
    if (user) {
        console.log(user);
    }

    if (error) {
        errorMessage = <p className='text-danger'>Error: {error?.message}</p>
    }

    return (
        <div className='w-50 mx-auto p-5 m-3 register'>
            <PageTitle title={'Registration'}></PageTitle>

            <h2 className='text-info text-center'>Registration</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            name='firstName'
                            type="text"
                            placeholder="First name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            name='lastName'
                            type="text"
                            placeholder="Last name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Event</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Write Event You Want to Participant"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>Occupation</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Write Your Occupation"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            required
                            name='email'
                            type="email"
                            placeholder="Enter Your Email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            name='password'
                            type="password"
                            placeholder="Password" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>
                <div>
                    <Button type="submit">Register</Button>
                    <Link to='/login' className='ms-3 text-decoration-underline'>Want to Log In?</Link>
                </div>
            </Form>
            {
                errorMessage
            }
            <SocialLogIn></SocialLogIn>
        </div >
    );
}


export default Register;