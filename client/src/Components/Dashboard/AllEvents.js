import React, { Component } from "react";
import EventCard from "../EventCard";
import Grid from "@material-ui/core/Grid";

export default class AllEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Events: []
    };
  }
  componentDidMount() {
    fetch(`http://localhost:3001/getAllEvents/${this.props.company}`, {
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
        localStorage.setItem('EventsArray',JSON.stringify(eventsArray));
        this.setState({ Events: eventsArray });
      });
  }
  render() {
    const days = [
      "Sun",
      "Mon",
      "Tues",
      "Wed",
      "Thurs",
      "Fri",
      "Sat"
    ];

    return (
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={3}
      >
        {this.state.Events
          ?
          this.state.Events
            .splice(0,this.props.count)
            .map(eventdata => (
              <Grid item key={eventdata._id}>
                <EventCard
                  name={eventdata.eventName}
                  time={
                    days[new Date(eventdata.eventStartDate).getDay()] + ", " + eventdata.eventStartDate + ", " + eventdata.eventStartTime}
                  category={eventdata.eventCategory}
                  venue={eventdata.eventVenue}
                  id={eventdata._id}
                />
              </Grid>
            ))
          : ""}
      </Grid>
    );
  }
}

AllEvents.defaultProps = {
  count: 50,
  company: ''
};