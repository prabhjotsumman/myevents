import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import EventIcon from '@material-ui/icons/Event';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl } from '@material-ui/core';
import events from '../apis/events';

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

function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let currentUser = JSON.parse(localStorage.getItem('currentActiveUserProfile'));
    let obj = {};
    if(currentUser){
        let organisationName = currentUser.organisationName;
        obj.eventOrganisation = organisationName;
    }
    formData.forEach((value, key) => { obj[key] = value });
    // let json = JSON.stringify(obj);
    console.log(obj);
    events.post("/addNewEvent",obj);
}

export default function AddNewEvent() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        eventCategory: '',
        name: 'hai',
    });
    function handleChange(event) {
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <EventIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Event
        </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="eventName"
                                name="eventName"
                                variant="outlined"
                                required
                                fullWidth
                                id="eventName"
                                label="Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="eventDescription"
                                label="Description"
                                name="eventDescription"
                                autoComplete="eventDescription"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="eventStartDate"
                                label="Start Date"
                                type="date"
                                name="eventStartDate"
                                defaultValue="2019-07-10"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="eventStartTime"
                                name="eventStartTime"
                                label="Start Time"
                                type="time"
                                variant="outlined"
                                defaultValue="10:30"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300, // 5 min
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="eventEndDate"
                                label="End Date"
                                type="date"
                                name="eventEndDate"
                                defaultValue="2019-07-10"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="eventEndTime"
                                name="eventEndTime"
                                label="End Time"
                                type="time"
                                variant="outlined"
                                defaultValue="12:30"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300, // 5 min
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="venue"
                                label="Venue"
                                // type="text"
                                name="eventVenue"
                                defaultValue="Den"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel htmlFor="eventCategory">
                                    Category
                                </InputLabel>
                                <Select
                                    value={values.eventCategory}
                                    onChange={handleChange}
                                    name="eventCategory"
                                    fullWidth
                                    input={<OutlinedInput id="eventCategory" label="Category" />}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={"Workshop"}>Workshop</MenuItem>
                                    <MenuItem value={"Cultural Fest"}>Cultural Fest</MenuItem>
                                    <MenuItem value={"Summit"}>Summit</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="eventAmount"
                                label="Amount"
                                type="number"
                                id="eventAmount"
                                autoComplete="Amount"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Add Event
          </Button>
                </form>
            </div>
        </Container>
    );
}