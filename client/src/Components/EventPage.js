import React, { Component } from 'react';
import AppBar from './Homepage/PrimarySearchAppBar';
import { Grid, Typography, Button, Icon } from '@material-ui/core';
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
                                ) : ""
                            }
                        </Grid>
                    </Grid>
                </div>
            </>
        )
    }
}