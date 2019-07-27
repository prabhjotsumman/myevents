import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TodayIcon from '@material-ui/icons/Today';
import NextWeekIcon from '@material-ui/icons/NextWeek';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { Grid, Typography, Button } from '@material-ui/core';

import CompanyFilter from "./CompanyFilter";
// import AllEvents from '../Dashboard/AllEvents';

const drawerWidth = 150;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  margin: 10,
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
    <Grid item xs={2} md={2} lg={2}>
      {/* <div className={classes.toolbar} /> */}
      <br />
      <Grid item>
        <Typography align="center" color="primary">Filters</Typography>
      </Grid>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon><TrendingUpIcon /></ListItemIcon>
          <ListItemText primary={"All Events"} />
        </ListItem>
        <ListItem button>
          <ListItemIcon><TodayIcon /></ListItemIcon>
          <ListItemText primary={"Today"} />
        </ListItem>
        <ListItem button>
          <ListItemIcon><NextWeekIcon /></ListItemIcon>
          <ListItemText primary={"Tommorrow"} />
        </ListItem>
        <ListItem button>
          <ListItemIcon><WatchLaterIcon /></ListItemIcon>
          <ListItemText primary={"Later"} />
        </ListItem>
      </List>
      <Divider/>
      <Grid item style={{ margin: '10px' }}>
        <Typography align="center" color="primary" gutterBottom>Price Range</Typography>
        <Button variant="outlined" size="small" className={classes.margin}>
          0-500
        </Button>
        <Button variant="outlined" size="small" className={classes.margin}>
          500-1000
        </Button>
        <Button variant="outlined" size="small" className={classes.margin}>
          >2000
        </Button>
      </Grid>
      <Divider/>
      <CompanyFilter />
    </Grid>
  );
}