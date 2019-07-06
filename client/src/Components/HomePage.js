import React, { Component } from 'react';
import AppBar from './Homepage/PrimarySearchAppBar';
import LeftNav from './Homepage/LeftNavigation';
import Footer from './Footer';

class Homepage extends Component {

    render() {
        return (
            <div>
                <AppBar />
                <LeftNav />
                <Footer/>
            </div>
        );
    };
}
export default Homepage;