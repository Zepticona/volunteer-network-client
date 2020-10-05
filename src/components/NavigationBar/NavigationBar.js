import React, { useContext } from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import classes from './navigationBar.module.css'

const NavigationBar = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Navbar className={classes.bootstrapNavbar} expand="lg">
            <Navbar.Brand>
                <Link to="/home">
                    <img className={classes.siteLogo} src={require('../../assets/logos/siteLogo.png')} alt=""/>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/home">Home</Link>
                    <Link style={{marginLeft: '30px'}} to="/home">Donation</Link>
                    <Link to="/testingRoute" style={{marginLeft: '30px'}}>Events</Link>
                    <Link style={{marginLeft: '30px'}} to="/home">Blog</Link>
                </Nav>
                <Form inline>
                    {
                        props.showEmail && loggedInUser.email
                         ? 
                        <Link to="/home" style={{marginLeft: '30px', fontWeight: 600}}>{loggedInUser.name}</Link> 
                        : 
                        <Link to="/login"><Button style={{marginLeft: '30px'}} variant="primary">Register/Login</Button></Link>
                    }
                    <Link to="/adminPanel/allRegisteredUsers"><Button style={{marginLeft: '30px'}} variant="secondary">Admin</Button></Link>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;