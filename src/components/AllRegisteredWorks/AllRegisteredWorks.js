import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import NavigationBar from '../NavigationBar/NavigationBar';
import RegisteredWorks from '../RegisteredWorks/RegisteredWorks';

const AllRegisteredWorks = () => {
    const [registeredWorks, setRegisteredWorks] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // Loading data for the logged in user from the database
    useEffect( () => {
        const timer = setTimeout( () => {
            fetch('https://young-ocean-27000.herokuapp.com/registeredWorks?email=' + loggedInUser.email)
            .then( res => res.json())
            .then( data => setRegisteredWorks(data))
        }, 3000);
        return () => clearTimeout(timer)        
    }, [])
    return (
        <Container>
            <NavigationBar showEmail={true}></NavigationBar>
            <p>Please wait while we get your registered volunteering jobs.</p>
            <p style={{margninBottom: '2px'}}>If you are having trouble getting the required informations</p>
            <li style={{color: 'red'}}>Make sure that you are logged in.</li>
            <li> style={{color: 'red'}}Click "Registered Works" on the menu.</li>
            <li style={{marginBottom: '20px', color: 'red'}}>Make sure that you've added any task to your account.</li>
            <Row>
                {
                    registeredWorks.map( (el, i) => <Col key={i} xs={12} md={6}><RegisteredWorks workInfo={el}></RegisteredWorks></Col>)
                }
            </Row>
        </Container>
    );
};

export default AllRegisteredWorks;