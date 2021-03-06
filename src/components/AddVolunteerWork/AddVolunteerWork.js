import React, { useEffect, useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
const AddVolunteerWork = () => {

    const style ={
        padding: '30px',
        backgroundColor: 'white'
    }
    
    const [allWorks, setAllWorks] = useState([]);

    // Get the array of current volunteering events
    useEffect( () => {
        fetch('https://young-ocean-27000.herokuapp.com/allWorks')
        .then( res => res.json())
        .then( data => {
            const allData = [...data]
            setAllWorks(allData);
        })
    }, [])


    // Handle Submit button click
    const handleFormSubmit = (e) => {
        // Make a new id for the new volunteering event
        const newItemId = allWorks[allWorks.length - 1 ].id + 1;
            const newVolunteerWork = {
                id: newItemId,
                name: document.getElementById('title').value,
                description: document.getElementById('description').value,
                date: document.getElementById('date').value,
                img: 'https://i.imgur.com/81s47f5.jpg'
            }

            // Send the newly constructed event to the database
            fetch('https://young-ocean-27000.herokuapp.com/addWork', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(newVolunteerWork)
            })
            .then( res => res.json())
            .then( data => {
                console.log('Data posted to database')
            })

            // Warn the user to not use the same data to create a post.
            alert('Added to the database. Please re visit the page to add a new work.')

            // Prevent page reload after form submission
            e.preventDefault()
    }
    return (
        <div>
            <h2 style={{marginBottom: '20px', marginTop: '25px'}}>Add Event</h2> 
            <Form style={style} onSubmit={handleFormSubmit}>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Event Title</Form.Label>
                        <Form.Control type="text" placeholder="Event Title" id="title" required />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Event Date</Form.Label>
                        <Form.Control type="date" placeholder=""  id="date"/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter Description" id="description" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" placeholder="Enter Imgur Link" disabled/>
                    </Form.Group>
                </Form.Row>
                    <Button style={{marginLeft: '88%'}} variant="primary" type="submit">Submit</Button>
                
            </Form>
        </div>
    );
};

export default AddVolunteerWork;