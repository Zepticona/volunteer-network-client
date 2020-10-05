import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import SingleWork from '../SingleWork/SingleWork';

const AllWorks = () => {
    const [works, setWorks] = useState([]);

    // Loading all the volunteering event from the database
    useEffect( () => {
        fetch('https://young-ocean-27000.herokuapp.com/allWorks')
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
                    works.map( (el, i) => <Col key={i} xs={6} md={3}><SingleWork volunteeringWork={el}></SingleWork></Col>)
                }
            </Row>
        </div>
        
    );
};

export default AllWorks;