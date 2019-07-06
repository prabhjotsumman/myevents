import React, { Component } from "react";
import EventCard from "../EventCard";
import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
// import { Link as RLink } from "react-router-dom";
// import { Typography } from "@material-ui/core";
// import AmountMoneyIcon from '@material-ui/icons/AttachMoney';

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
        localStorage.setItem('EventsArray',JSON.stringify(eventsArray));
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
        item
      >
        {this.state.Events
          ? this.state.Events.map(eventdata => (
              <Grid item key={eventdata._id}>
                <EventCard
                  name={eventdata.eventName}
                  // people={PEOPLE}
                  range={Math.floor(Math.random() * (10)) +"."+ Math.floor(Math.random() * (10)) +" km"}
                  time={
                    days[new Date(eventdata.eventStartDate).getDay()] +
                    ", " +
                    eventdata.eventStartDate +
                    ", " +
                    eventdata.eventStartTime
                  }
                  category={eventdata.eventCategory}
                  venue={eventdata.eventVenue}
                  id={eventdata._id}
                  // endDay={days[(new Date(eventdata.eventEndDate)).getDay()]}
                  // images={[AVATAR, AVATAR, AVATAR, AVATAR, AVATAR]}
                />
                
                
              </Grid>
            ))
          : ""}
      </Grid>
    );
  }
}
