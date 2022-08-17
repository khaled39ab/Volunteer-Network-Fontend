import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import PageTitle from '../Shared/PageTitle/PageTitle';
import SocialLogIn from '../Shared/SocialLogIn/SocialLogIn';
import './Login.css';

const Login = () => {
    return (
        <div className='w-50 mx-auto mt-4 login p-4'>
            <PageTitle title={'Log in'}></PageTitle>

            <h2 className='text-center text-info'>Log In Please</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div>
                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                    <Link to={'/register'} className='ms-3 text-decoration-underline'>Create an account</Link>
                </div>
            </Form>
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default Login;