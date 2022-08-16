import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
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
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={CustomLink} to={<Home></Home>}>Home</Nav.Link>
                            <Nav.Link as={CustomLink} to={<Home></Home>}>Event</Nav.Link>
                            <Nav.Link as={CustomLink} to={<Home></Home>}>Donation</Nav.Link>
                            <Nav.Link as={CustomLink} to={<Home></Home>}>Blogs</Nav.Link>
                        </Nav>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;