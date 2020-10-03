import React from 'react';
import { Container } from 'react-bootstrap';
import AllWorks from '../AllWorks/AllWorks';
import NavigationBar from '../NavigationBar/NavigationBar';
import SearchBar from '../SearchBar/SearchBar';
import classes from './home.module.css'
const Home = () => {
    return (
        <Container className={classes.wrappingContainer}>
            <img className={classes.background} src={require('../../assets/logos/bacgkround.jpg')} alt=""/>
            <NavigationBar></NavigationBar>
            <SearchBar></SearchBar>
            <AllWorks></AllWorks>
        </Container>
            
        
    );
};

export default Home;