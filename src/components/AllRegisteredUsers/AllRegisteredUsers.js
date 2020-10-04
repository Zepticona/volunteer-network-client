import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleUser from '../SingleUser/SingleUser';

const AllRegisteredUsers = () => {
    const [allRegisteredUsers, setAllRegisteredUsers] = useState([]);
    useEffect( () => {
        fetch('http://localhost:8080/allRegisteredUsers')
        .then( res => res.json())
        .then( data => {
            const registeredUsers = [...data];
            setAllRegisteredUsers(registeredUsers)
        })
    }, [])
    return (
        <div>
            <h2>Volunteer Register List</h2>
            <Container className="list">
                <Row>
                    <Col md={2}>Name</Col>
                    <Col md={4}>Email ID</Col>
                    <Col md={2}>Registration Date</Col>
                    <Col md={3}>Volunteer List</Col>
                    <Col md={1}>Action</Col>
                </Row>
                {
                    allRegisteredUsers.map ( el => <SingleUser key={el._id} userInfo={el}></SingleUser>)
                }
            </Container>
        </div>
    );
};

export default AllRegisteredUsers;