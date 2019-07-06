import React, { Component } from 'react';
import AppBar from './Homepage/PrimarySearchAppBar';
// import LeftNav from './Homepage/LeftNavigation';

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
        let eventsArray = JSON.parse(localStorage.getItem('EventsArray'));
        console.log(eventsArray);
        let eventInfo = eventsArray.filter(function (item) {
            return item._id === eventID;
        });
        this.setState({ eventID, eventInfo });


    }

    render(props) {
        return (
            <>
                <AppBar />
                <h1>I'm single event</h1>
                <p>My Id is {this.state.eventID}</p>
                <p>My Id is {JSON.stringify(this.state.eventInfo)}</p>
            </>
        )
    }
}