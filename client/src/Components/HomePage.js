import React, { Component } from 'react';
import AppBar from './Homepage/PrimarySearchAppBar';
import LeftNav from './Homepage/LeftNavigation';

class Homepage extends Component {

    render() {
        return (
            <div>
                <AppBar />
                <LeftNav />
            </div>
        );
    };
}
export default Homepage;