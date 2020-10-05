import React from 'react';
import { Col, Row } from 'react-bootstrap';
import classes from './singleUser.module.css'

const SingleUser = (props) => {

    // Handling click on the cancel button 
    const deleteWorkHandler = (e, id) => {
        // Accessing the clicked button's wrapper DOM and storing it into a mutable variable
        let singleWorkDOM = e.target.parentNode.parentNode;

        // Calling the deleting API on the Selected User identified by the id sent from the button click event
        fetch(`https://young-ocean-27000.herokuapp.com/deleteWork/${id}`, {
            method: 'DELETE'
        })
        .then( res => res.json())
        .then( data => {
            if(data) {    
                singleWorkDOM.style.display = 'none'; 
            }
        })
    }

    return (
        <Row className={classes.rowStyle}>
            <Col md={2}>{props.userInfo.fullName}</Col>
            <Col md={4}>{props.userInfo.email}</Col>
            <Col md={2}>{props.userInfo.date}</Col>
            <Col md={3}>{props.userInfo.volunteerWork}</Col>
            <Col md={1}>
                <span onClick={(e) => deleteWorkHandler(e, `${props.userInfo._id}`)} className={classes.deleteBtn}>DELETE</span>
            </Col>
        </Row>
    );
};

export default SingleUser;