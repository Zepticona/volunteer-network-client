import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import classes from './searchBar.module.css'
const SearchBar = () => {
    return (
        <div className={classes.wrappingContainer}>
            <h2>I GROW BY HELPING PEOPLE IN NEED</h2>
            <InputGroup className={classes.inputGroupWrapper}>
                <FormControl
                placeholder="Search..."
                aria-label="SearchBox"
                aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="primary">SEARCH</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
};

export default SearchBar;