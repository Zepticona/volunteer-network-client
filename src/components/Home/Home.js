import React from 'react';
import { Container } from 'react-bootstrap';
import AllWorks from '../AllWorks/AllWorks';
import NavigationBar from '../NavigationBar/NavigationBar';
import SearchBar from '../SearchBar/SearchBar';
import classes from './home.module.css'
const Home = () => {
    return (
        <Container className={classes.wrappingContainer}>
            <img className={classes.background} src={'https://i.imgur.com/THtpcgX.jpg'} alt=""/>
            <NavigationBar></NavigationBar>
            <SearchBar></SearchBar>
            <AllWorks></AllWorks>
        </Container>
            
        
    );
};

export default Home;
 // {require('../../assets/logos/bacgkround.jpg')}

// <a href="https://imgur.com/THtpcgX"><img src="https://i.imgur.com/THtpcgX.jpg" title="source: imgur.com" /></a>