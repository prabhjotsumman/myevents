import React, { Component } from 'react';
import AllEvents from '../Dashboard/AllEvents';
import { Divider, Grid } from '@material-ui/core';
import Title from '../Title';

export default class DisplayAllCompanies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: []
        }
    }

    fetchAllEvents() {
        fetch(`http://localhost:3001/getAllEvents/`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(json => json.data)
            .then(eventsArray => {
                // console.log(eventsArray);
                localStorage.setItem('EventsArray', JSON.stringify(eventsArray));
                this.setState({ Events: eventsArray });
            });
    }
    componentDidMount() {
        this.fetchAllEvents();
        // let eventsArray = JSON.parse(localStorage.getItem('eventsArray'));
        fetch(`http://localhost:3001/getAllCompanies`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(json => json.data)
            .then(data => {
                console.log(data);
                this.setState({ companies: data });
            });
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
                                <AllEvents company={company} />
                                <Divider />
                            </Grid>
                        )
                    )
                }
            </Grid>
        )

    }
}