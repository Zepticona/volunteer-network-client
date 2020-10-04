import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './adminNavPanel.module.css'

const AdminNavPanel = () => {
    return (
        <div className={classes.wrappingContainer}>
            <Link to="/home"><img src={require('../../assets/logos/siteLogo.png')} className={classes.siteLogo} alt=""/></Link>
            <Link to="/adminPanel/allRegisteredUsers" className={classes.volunteerReg}><FontAwesomeIcon icon={faUserFriends} /> Volunteer Register List</Link>
            <Link to="/adminPanel/addVolunteerWork" className={classes.volunteerAdd}><FontAwesomeIcon icon={faPlus} /> Add Volunteer Work</Link>     
        </div>
    );
};

export default AdminNavPanel;

// <i class="fas fa-user-friends"></i>