import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './Home.css';

const Home = () => {
    const [user, loading, error] = useAuthState(auth);

    if (user){
        console.log(user);
    }
    return (
        <div>
            <PageTitle title='Home'></PageTitle>
            
            <div className='text-center my-5 heading'>
                <h1>I GROW BY HELPING PEOPLE IN NEED.</h1>
                <Form className="d-flex w-50 mx-auto">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="btn btn-info text-light fw-bold">Search</Button>
                </Form>
            </div>
        </div>
    );
};

export default Home;