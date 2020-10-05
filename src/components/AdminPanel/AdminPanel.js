import React from 'react';
import { Container } from 'react-bootstrap';
import AdminInfos from '../AdminInfos/AdminInfos';
import AdminNavPanel from '../AdminNavPanel/AdminNavPanel';
import classes from './adminPanel.module.css'

const AdminPanel = () => {
    return (
        <Container>
            <div className={classes.wrappingContainer}>
                <div className={classes.adminNavigationPanel}>
                    <AdminNavPanel></AdminNavPanel>
                </div>
                <div className={classes.adminInfoPanel}>
                    <AdminInfos></AdminInfos>
                </div>
            </div>
        </Container>
    );
};

export default AdminPanel;