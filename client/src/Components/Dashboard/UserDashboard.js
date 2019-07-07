import React, { Component } from 'react';
import PeaUserCard from '../lib/PeaUserCard';

export default class AllEvents extends Component {
    constructor() {
        super();
        this.state = {
            Profile: {}
        }
    }
    componentDidMount() {
        let currentUser = JSON.parse(localStorage.getItem('currentActiveUserProfile'));
        // this.setState({ profile: currentUser });
        console.log(currentUser);
    }

    render() {
        return (
            <div>
                <h1>User Dashboard</h1>
    <PeaUserCard
                    cover={
                        'https://images.unsplash.com/photo-1470549638415-0a0755be0619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                    }
                    image={
                        'https://images.unsplash.com/photo-1456379771252-03388b5adf1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
                    }
                    name={'Maria Garcia'}
                    tag={'@MaryMary'}
                    location={'Houston'}
                    bio={'A senior year student, passionate in web design.'}
                />
            </div>
        )
    }
}

