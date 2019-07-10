import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as RLink } from 'react-router-dom';
// import Snackbar from '../Snackbar';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function SignUpSide(props) {
    const classes = useStyles();
    // const [disableRegisterButton, setdisableRegisterButton] = React.useState(false);
    // const [requiredValueFilled, setrequiredValueFilled] = React.useState(false);
    // const [formError, setformError] = React.useState(false);

    // const disableButton = (e) => {
    //     setformError(true);
    //     e.preventDefault();
    //     setdisableRegisterButton(true);
    //     const formData = new FormData(e.target);
    //     var obj = {};
    //     formData.forEach((value, key) => {
    //         if (!value)
    //             setrequiredValueFilled(false);
    //         obj[key] = value;
    //     });
    //     if (!requiredValueFilled) {
    //         setformError(true);
    //     }
    //     props.onRegister(e);
    // }
    return (
        <Container component="main" maxWidth="xs">

            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
        </Typography>
                {/* {(formError) &&
                    (
                        <Snackbar variant="error" open={true} message="Form fields are required" />
                    )} */}
                <form className={classes.form} noValidate onSubmit={props.onRegister}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="name"
                                name="name"
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="organisationName"
                                label="Organisation Name"
                                name="organisationName"
                                autoComplete="organisationName"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="mobile"
                                label="Mobile"
                                name="mobile"
                                autoComplete="mobile"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    // disabled={disableRegisterButton}
                    // onClick={disableButton}
                    >
                        Register
          </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <RLink to="/signin" variant="body2">
                                Already have an account? Sign in
              </RLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}