import React, { Component } from "react";
import EventCard from "../EventCard";
import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";

export default class AllEvents extends Component {
  constructor() {
    super();
    this.state = {
      Events: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:3001/getAllEvents", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => json.data)
      .then(eventsArray => {
        console.log(eventsArray);
        this.setState({ Events: eventsArray });
      });
  }
  render() {
    return (
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={3}
        item
      >
        <Grid spacing={2} item>
          <EventCard />
        </Grid>
        <Grid spacing={2} item>
          <EventCard />
        </Grid>
        <Grid spacing={2} item>
          <EventCard />
        </Grid>
        <Grid spacing={2} item>
          <EventCard />
        </Grid>
        <Grid spacing={2} item>
          <EventCard />
        </Grid>
        <Grid spacing={2} item>
          <EventCard />
        </Grid>
        <Grid spacing={2} item>
          <EventCard />
        </Grid>
        <Grid spacing={2} item>
          <EventCard />
        </Grid>
      </Grid>
    );
  }
}