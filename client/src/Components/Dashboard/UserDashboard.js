import React, { Component } from 'react';
import PeaUserCard from '../lib/PeaUserCard';
import { Grid, Typography, Divider } from '@material-ui/core';
import Paper from '../Paper';
import AllEvents from './AllEvents';

export default class UserDashboard extends Component {
    constructor() {
        super();
        this.state = {
            Profile: { name: '', organisationName: '' },
            eventsArray: []
        }
    }
    componentDidMount() {
        let currentUser = JSON.parse(localStorage.getItem('currentActiveUserProfile'));
        this.setState({ Profile: currentUser });
        console.log(currentUser);

        let eventsArray = JSON.parse(localStorage.getItem('eventsArray'));
        this.setState({ eventsArray });
    }

    render() {
        return (
            <Grid container spacing={3} direction="column">
                <Grid item >
                    <PeaUserCard
                        cover={
                            'https://images.unsplash.com/photo-1470549638415-0a0755be0619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                        }
                        image={
                            'https://images.unsplash.com/photo-1456379771252-03388b5adf1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
                        }
                        name={this.state.Profile.name}
                        tag={'@' + this.state.Profile.name}
                        location={'Houston'}
                        bio={'Event Organiser at ' + this.state.Profile.organisationName}
                    />
                </Grid>
                <Divider/>
                <Grid item>
                        <Typography variant="h5" gutterBottom>Upcoming Events</Typography>
                        <AllEvents count={4} />
                </Grid>
            </Grid>

        )
    }
}

