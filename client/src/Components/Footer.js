import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '30vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
    },
    footer: {
        padding: theme.spacing(2),
        marginTop: 'auto',
        backgroundColor: '#2E3B55',
        color: 'white'
    },
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1">Site is developed by @prabhnith</Typography>
                </Container>
            </footer>
        </div>
    );
}