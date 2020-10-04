import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import NavigationBar from '../NavigationBar/NavigationBar';
import RegisteredWorks from '../RegisteredWorks/RegisteredWorks';

const AllRegisteredWorks = () => {
    const [registeredWorks, setRegisteredWorks] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser)

    // Loading data for the logged in user from the database
    useEffect( () => {
        fetch('http://localhost:8080/registeredWorks?email=' + loggedInUser.email)
        .then( res => res.json())
        .then( data => setRegisteredWorks(data))
    }, [])
    return (
        <Container>
            <NavigationBar showEmail={true}></NavigationBar>
            <Row>
                {
                    registeredWorks.map( el => <Col xs={12} md={6}><RegisteredWorks workInfo={el}></RegisteredWorks></Col>)
                }
            </Row>
        </Container>
    );
};

export default AllRegisteredWorks;