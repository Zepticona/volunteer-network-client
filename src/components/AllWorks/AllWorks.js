import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import volunteeringWorks from '../../FakeData/fakeData';
import SingleWork from '../SingleWork/SingleWork';

const AllWorks = () => {
    const [works, setWorks] = useState([]);
    useEffect( () => {
        fetch('http://localhost:8080/allWorks')
        .then( res => res.json())
        .then( data => {
            const allVolunteeringWorks = [...data]
            setWorks(allVolunteeringWorks)
        })
    }, [])
    return (
        <div>
            <Row>
                {
                    works.map( el => <Col xs={6} md={3}><SingleWork volunteeringWork={el}></SingleWork></Col>)
                }
            </Row>
        </div>
        
    );
};

export default AllWorks;