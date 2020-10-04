import React from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";
import AddVolunteerWork from '../AddVolunteerWork/AddVolunteerWork';
import AllRegisteredUsers from '../AllRegisteredUsers/AllRegisteredUsers';

const AdminInfos = () => {
    return (
            <Switch>
                <Route path="/adminPanel/allRegisteredUsers">
                    <AllRegisteredUsers></AllRegisteredUsers>
                </Route>
                <Route path="/adminPanel/addVolunteerWork">
                    <AddVolunteerWork></AddVolunteerWork>
                </Route>
            </Switch>
    );
};

export default AdminInfos;