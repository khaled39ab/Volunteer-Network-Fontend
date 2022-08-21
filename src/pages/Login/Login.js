import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from '../../firebase.init';
import PageTitle from '../Shared/PageTitle/PageTitle';
import SocialLogIn from '../Shared/SocialLogIn/SocialLogIn';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let errorMessage;

    if (error) {
        errorMessage = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        await signInWithEmailAndPassword(email, password);
        navigate(from, { replace: true });
    }

    return (
        <div className='w-50 mx-auto mt-4 login p-4'>
            <PageTitle title={'Log in'}></PageTitle>

            <h2 className='text-center text-info'>Log In Please</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <div>
                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                    <Link to={'/register'} className='ms-3 text-decoration-underline'>Create an account</Link>
                </div>
            </Form>
            {
                errorMessage
            }
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default Login;