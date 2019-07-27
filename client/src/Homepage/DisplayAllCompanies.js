import React, { Component } from 'react';
import { Divider, Grid } from '@material-ui/core';

import AllEvents from '../Dashboard/AllEvents';
import Title from '../Components/Title';
import events from '../apis/events';

export default class DisplayAllCompanies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: []
        }
    }

    fetchAllEvents() {
        events.get("/getAllEvents")
            .then(json => json.data)
            .then(eventsArray => {
                localStorage.setItem('EventsArray', JSON.stringify(eventsArray.data));
                this.setState({ Events: eventsArray.data });
            });
    }
    fetchAllCompanies() {
        events.get("/getAllCompanies")
            .then(json => json.data)
            .then(data => {
                localStorage.setItem('CompaniesArray', JSON.stringify(data.data));
                this.setState({ companies: data.data });
            });
    }
    componentDidMount() {
        this.fetchAllEvents();
        this.fetchAllCompanies();
    }
    render() {
        return (
            <Grid container spacing={2}>
                {
                    (this.state.companies) &&
                    (
                        this.state.companies.map(company =>
                            <Grid item key={company}>
                                <Title>{company}</Title>
                                <AllEvents company={company} count={5} />
                                <Divider />
                            </Grid>
                        )
                    )
                }
            </Grid>
        )
    }
}