import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import AppBar from './Homepage/PrimarySearchAppBar';
// import AllEvents from './Dashboard/AllEvents';
import { Grid, Box } from '@material-ui/core';
import LeftNav from './Homepage/LeftNavigation';
// import Carousel from './Homepage/Carousel';
// import Drawer from '@material-ui/core/Drawer';
import MailIcon from '@material-ui/icons/Mail';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
class Homepage extends Component {

    render() {
        return (
            <div>
                <AppBar />
                <Grid container spacing={2}>
                    <Grid item >
                        <List>
                            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
            </div>
        );
    };
}
export default Homepage;