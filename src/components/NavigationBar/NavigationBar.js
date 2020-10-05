import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import classes from './navigationBar.module.css'

const NavigationBar = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
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
                    <Link to="/testingRoute" style={{marginLeft: '30px'}}>Registered Works</Link>
                    <Link style={{marginLeft: '30px'}}>Blog</Link>
                </Nav>
                <Form inline>
                    {
                        props.showEmail && loggedInUser.email ? <Link to="/home" style={{marginLeft: '30px'}}>{loggedInUser.email}</Link> : <Link to="/login"><Button style={{marginLeft: '30px'}} variant="primary">Register</Button></Link>
                    }
                    <Link to="/adminPanel/allRegisteredUsers"><Button style={{marginLeft: '30px'}} variant="secondary">Admin</Button></Link>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;