import React from 'react';
import { Link } from 'react-router-dom';
import classes from './singleWork.module.css'
const SingleWork = (props) => {
    return (
        <Link to={`/registration/${props.volunteeringWork.id}`}>
            <div className={classes.wrappingContainer}>
                <div className={classes.cardImage}>
                    <img src={require('../../assets/images/babySit.png')} alt=""/>
                </div>
                <div className={classes.cardContent}>
                <p>{props.volunteeringWork.name}</p>
                </div>
            </div>
        </Link>
        
    );
};

export default SingleWork;