import React from 'react';
import { Link, useParams } from 'react-router-dom';
import classes from './registration.module.css'

const Registration = () => {
    const workId = useParams()
    console.log(workId)
    return (
            <div className={classes.wrappingContainer}>
            <Link to='/home'>
                <img className={classes.siteLogo} src={require(`../../assets/logos/siteLogo.png`)} alt=""/>
            </Link>
            <form className={classes.loginBox} >
                <h4>Register as a Volunteer</h4>
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Username or Email" />
                <input type="date" placeholder="Date" />
                <input type="text" placeholder="Description" />
                <input disabled type="text" value="this will be dynamic data" />
                <button type="submit">Registration</button>
            </form >
        </div>
    );
};

export default Registration;