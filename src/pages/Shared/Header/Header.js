import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import Event from '../../Event/Event';
import Home from '../../Home/Home';
import CustomLink from '../CustomLink/CustomLink';
import logo from './../../../images/logo.png'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/" className='ps-5'>
                    <img style={{height:"35px"}} src={logo} alt="" />
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
                            <Nav.Link as={CustomLink} to='/home'>Home</Nav.Link>
                            <Nav.Link as={CustomLink} to='/event'>Event</Nav.Link>
                            <Nav.Link as={CustomLink} to='/donation'>Donation</Nav.Link>
                            <Nav.Link as={CustomLink} to='/blog'>Blog</Nav.Link>
                        </Nav>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;