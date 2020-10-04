import React, { useEffect, useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';

const AddVolunteerWork = () => {
    
    const [allWorks, setAllWorks] = useState([]);

    useEffect( () => {
        fetch('http://localhost:8080/allWorks')
        .then( res => res.json())
        .then( data => {
            const allData = [...data]
            setAllWorks(allData);
        })
    }, [])
    const handleFormSubmit = (e) => {
        const newItemId = allWorks[allWorks.length - 1 ].id + 1;
            const newVolunteerWork = {
                id: newItemId,
                name: document.getElementById('title').value,
                description: document.getElementById('description').value,
                date: document.getElementById('date').value,
                img: 'https://i.imgur.com/81s47f5.jpg'
            }

            console.log(newVolunteerWork)
            // console.log(allWorks)

            // const newData = [...allWorks, newVolunteerWork]

            // console.log(newData)

            // setAllWorks(newData)
            // const updatedWorkSet = [...allWorks]
            // console.log(updatedWorkSet)
            fetch('http://localhost:8080/addWork', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(newVolunteerWork)
            })
            .then( res => res.json())
            .then( data => {
                console.log('Data posted to database')
            })
            e.preventDefault()
    }
    return (
        <div>
            <h2 style={{marginBottom: '20px', marginTop: '25px'}}>Add Event</h2> 
            <Form onSubmit={handleFormSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Event Title</Form.Label>
                        <Form.Control type="text" placeholder="Event Title" id="title"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Event Date</Form.Label>
                        <Form.Control type="date" placeholder=""  id="date"/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter Description" id="description" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" placeholder="Enter Imgur Link" disabled/>
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddVolunteerWork;