import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '../Homepage/PrimarySearchAppBar';
import LeftNav from '../Homepage/LeftNavigation';
import DisplayAllCompanies from '../Homepage/DisplayAllCompanies';
import Footer from './Footer';
// import AllEvents from './Dashboard/AllEvents';
// import Title from './Title';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

function Homepage() {
    const classes = useStyles();
    
    return (
        <>
            <AppBar />
            <div className={classes.root}>
                <LeftNav />
                <main className={classes.content}>
                    <DisplayAllCompanies/>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Homepage;