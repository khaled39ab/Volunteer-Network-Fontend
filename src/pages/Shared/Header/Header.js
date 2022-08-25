import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import logo from './../../../images/logo.png'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const name = user?.displayName;

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/" className='ps-5'>
                    <img style={{ height: "35px" }} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Form className="d-flex">
                        <Nav
                            className="me-auto my-2 my-lg-0 fw-bold fs-5"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={CustomLink} to='/'>Home</Nav.Link>
                            <Nav.Link as={CustomLink} to='/events'>Events</Nav.Link>
                            <Nav.Link as={CustomLink} to='/donation'>Donation</Nav.Link>
                            <Nav.Link as={CustomLink} to='/blog'>Blog</Nav.Link>

                            {
                                user ?
                                    <>
                                        <Nav.Link as={CustomLink} to='/add-event'>Add Event</Nav.Link>
                                        <Nav.Link as={CustomLink} to='/user'>{name}</Nav.Link>
                                        <Nav.Link className='text-decoration-underline' onClick={handleSignOut}>Sign Out</Nav.Link>
                                    </> :
                                    <Nav.Link as={CustomLink} to='/login'>Log In</Nav.Link>
                            }
                        </Nav>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;