import React from 'react';
import AppBar from './Homepage/PrimarySearchAppBar';
import LeftNav from './Homepage/LeftNavigation';
import Footer from './Footer';
import AllEvents from './Dashboard/AllEvents';
import { makeStyles } from '@material-ui/core/styles';
// import { Grid } from '@material-ui/core';

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
                    <AllEvents />
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Homepage;