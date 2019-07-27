import React, { Component } from 'react';
import { Grid, Typography, Divider } from '@material-ui/core';
import PeaUserCard from '../Components/PeaUserCard';
import AllEvents from './AllEvents';

export default class UserDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Profile: { name: '', organisationName: '' },
            eventsArray: [],
        }
    }
    componentDidMount() {
        let currentUser = JSON.parse(localStorage.getItem('currentActiveUserProfile'));
        let eventsArray = JSON.parse(localStorage.getItem('eventsArray'));
        
        this.setState({ Profile: currentUser });
        this.setState({ eventsArray });
        // console.log("In User Dashboard : ",this.props.company)
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
                        bio={'Event Organiser at ' + this.props.company}
                    />
                </Grid>
                <Divider />
                <Grid item>
                    <Typography variant="h5" gutterBottom>Upcoming Events</Typography>
                    <AllEvents count={4} company={this.props.company} />
                </Grid>
            </Grid>
        )
    }
}

