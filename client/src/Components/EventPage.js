import React, { Component } from 'react';
import AppBar from './Homepage/PrimarySearchAppBar';
import { Grid, Typography, Button, Icon, Box } from '@material-ui/core';
import Paper from './Paper';

export default class EventPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eventID: undefined,
            eventInfo: undefined
        }
    }
    componentDidMount() {
        const { eventID } = this.props.match.params;
        this.setState({ eventID });
        let eventsArray = JSON.parse(localStorage.getItem('EventsArray'));
        let eventInfo = eventsArray.filter(function (item) {
            return item._id === eventID;
        });
        this.setState({ eventInfo });
        console.log(eventInfo);
    }

    render() {
        return (
            <>
                <AppBar position="fixed" />
                <div style={{ flexGrow: 1, backgroundColor: '#dedede' }}>
                    <Grid
                        container
                        direction="column"
                        justify="space-between"
                        alignItems="center"
                        style={{ minHeight: '100vh' }}
                    >
                        <Grid item>
                            <img src="https://picsum.photos/1100/400" alt="poster" style={{ width: '100%', height: 'auto' }} />
                            {
                                (this.state.eventInfo) ? (
                                    <>
                                        <Paper>
                                            <Grid container justify="space-between" alignItems="flex-end">
                                                <Grid item >
                                                    <Typography variant="h4" gutterBottom>{this.state.eventInfo[0].eventName}</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Button size="large" variant="contained" color="primary">Book</Button>
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={1} >
                                                <Grid item>
                                                    <Icon color={"error"}>location_on</Icon>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant={"subtitle1"} gutterBottom>
                                                        {this.state.eventInfo[0].eventVenue}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Icon color={"primary"}>event</Icon>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant={"subtitle1"} gutterBottom>
                                                        {this.state.eventInfo[0].eventStartDate}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Icon color={"primary"}>access_time</Icon>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant={"subtitle1"} gutterBottom>
                                                        {this.state.eventInfo[0].eventStartTime}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                        <Box m={2}></Box>
                                        <Grid container spacing={3}>
                                            <Grid item xs={2} sm={2} md={2} >
                                                <Paper>
                                                    <Typography gutterBottom variant="subtitle2">About Speaker(s) </Typography>
                                                    <Typography gutterBottom variant="body1">Speaker Name</Typography>
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={7} sm={7} md={7}>
                                                <Paper>
                                                    <Typography gutterBottom variant="subtitle2">Description </Typography>
                                                    <Typography gutterBottom variant="body1">{this.state.eventInfo[0].eventDescription}</Typography>
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={3} sm={3} md={3}>
                                                <Paper>
                                                    <Typography gutterBottom variant="subtitle2">Venue </Typography>
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </>
                                ) : ""
                            }
                        </Grid>
                    </Grid>
                </div>
            </>
        )
    }
}