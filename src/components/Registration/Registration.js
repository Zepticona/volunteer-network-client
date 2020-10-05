import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import classes from './registration.module.css'

const Registration = () => {
    const [loggedInUser, setloggedInUser] = useContext(UserContext)
    const id = useParams();
    let imgUrl;

    // Fetching the selected volunteering work using route parameter
    fetch(`https://young-ocean-27000.herokuapp.com/allWorks/${id.workId}`)
    .then( res => res.json())
    .then( data => {
        document.getElementById('volunteerWork').value = data.name;
        imgUrl = data.img;
    })

    // Handling Click on Registration Button
    const registrationHandler = () => {
        // Prepare Bulk Data Containing logged in user info and the selected volunteering work
        const userInfo = {
            fullName : document.getElementById('name').value,
            email : document.getElementById('email').value,
            date : document.getElementById('date').value,
            description : document.getElementById('description').value,
            volunteerWork : document.getElementById('volunteerWork').value,
            volunteerWorkId: id.workId,
            imgLink: imgUrl
        }
        
        // Posting/Sending user data to the database
        fetch(`https://young-ocean-27000.herokuapp.com/addUsers`, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(userInfo)
        })
        .then( res => res.json())
        .then( data => console.log(data))
        console.log(userInfo)
    }
    return (
            <div className={classes.wrappingContainer}>
            <Link to='/home'>
                <img className={classes.siteLogo} src={require(`../../assets/logos/siteLogo.png`)} alt=""/>
            </Link>
            <div className={classes.loginBox} >
                <h4>Register as a Volunteer</h4>
                <input type="text" placeholder="Full Name" id="name" value={loggedInUser.name} />
                <input type="text" placeholder="Username or Email" id="email" readOnly value={loggedInUser.email} />
                <input type="date" placeholder="Date" id="date" required/>
                <input type="text" placeholder="Description" id="description" />
                <input readOnly type="text" id="volunteerWork" />
                <Link to="/testingRoute">
                    <button onClick={registrationHandler}>Registration</button>
                </Link>
            </div >
        </div>
    );
};

export default Registration;

// onClick={registrationHandler}