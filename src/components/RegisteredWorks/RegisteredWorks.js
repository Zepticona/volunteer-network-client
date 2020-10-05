import React from 'react';
import classes from './registeredWorks.module.css'
const RegisteredWorks = (props) => {

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
        <div className={classes.wrapingContainer}>
            <div className={classes.cardImg}>
                <img src={props.workInfo.imgLink} alt=""/>
            </div>
            <div className={classes.cardContent}>
                <h5>{props.workInfo.volunteerWork}</h5>
                <p>{props.workInfo.date}</p>
                <button onClick={(e) => deleteWorkHandler(e, `${props.workInfo._id}`)}>Cancel</button>
            </div>
        </div>
    );
};

export default RegisteredWorks;