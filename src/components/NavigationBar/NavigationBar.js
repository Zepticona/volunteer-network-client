import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classes from './navigationBar.module.css'

const NavigationBar = () => {
    return (
        <Navbar className="bootstrap-navbar" expand="lg">
            <Navbar.Brand href="#home">
                <img className={classes.siteLogo} src={require('../../assets/logos/siteLogo.png')} alt=""/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {/* <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>        */}
                    <Link to="/home">Home</Link>
                    <Link style={{marginLeft: '30px'}}>Donation</Link>
                    <Link style={{marginLeft: '30px'}}>Events</Link>
                    <Link style={{marginLeft: '30px'}}>Blog</Link>
                </Nav>
                <Form inline>
                    <Link to="/login">
                        <Button style={{marginLeft: '30px'}} variant="primary">Register</Button>
                    </Link>
                    <Link>
                    <Button style={{marginLeft: '30px'}} variant="secondary">Admin</Button>
                    </Link>
                    
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;