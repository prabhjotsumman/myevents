import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
// import AssignmentIcon from "@material-ui/icons/Assignment";
import List from "@material-ui/core/List";
// import { makeStyles } from "@material-ui/core/styles";

export default class MainListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      highlighted: false
    };
  }
  handleListItemClick = (event, index, drawerItem) => {
    // console.log(index, drawerItem);
    this.setState({ selectedIndex: index });
    this.props.loadSelectedComponent(drawerItem);
  };
  render() {
    return (
      <List>
        <ListItem
          button
          selected={this.state.selectedIndex === 0}
          onClick={event => this.handleListItemClick(event, 0, "Dashboard")}
          //   loadSelectedComponent={() => "Dashboard"}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem
          button
          selected={this.state.selectedIndex === 1}
          onClick={event => this.handleListItemClick(event, 1, "Add New Event")}
          //   loadSelectedComponent={() => "Add New Event"}
        >
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Add New Event" />
        </ListItem>
        <ListItem
          button
          selected={this.state.selectedIndex === 2}
          onClick={event => this.handleListItemClick(event, 2, "All Events")}
        >
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="All Events" />
        </ListItem>
        <ListItem
          button
          selected={this.state.selectedIndex === 3}
          onClick={event => this.handleListItemClick(event, 3, "Profile")}
        >
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem
          button
          selected={this.state.selectedIndex === 4}
          onClick={event => this.handleListItemClick(event, 4, "Settings")}
        >
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    );
  }
}
