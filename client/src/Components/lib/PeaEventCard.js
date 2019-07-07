import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// import PeaIcon from "./PeaIcon";
// import PeaAvatar from "./PeaAvatar";
import Icon from '@material-ui/core/Icon';
import Button from "@material-ui/core/Button";
import { Divider, Box } from "@material-ui/core";
import {Link as RLink} from 'react-router-dom';

// import AmountMoneyIcon from "@material-ui/icons/AttachMoney";
const PeaEventCard = ({ image, name, range, time, images, category, venue, id }) => (
  <Card className={"PeaEventCard-root"}>
    <CardMedia
      className={"MuiCardMedia-root"}
      image={image}
      style={{ height: "150px" }}
    >
      {/* {range && (
        <div className={"MuiCardTag-root"}>
          <PeaIcon size={"small"} color={"white"} icon={"location_on"} />{" "}
          {range}
        </div>
      )} */}
    </CardMedia>
    <CardContent className={"MuiCardContent-root"}>
      <Grid container spacing={1} alignContent={'center'}>
        <Grid item>
          <Typography className={"MuiTypography--heading alignCenter"} align="center">{name}</Typography>
        </Grid>
      </Grid>
      <Box m={1}><Divider /></Box>
      <Grid container spacing={1}>
        <Grid item>
          <Icon color={"primary"}>event</Icon>
        </Grid>
        <Grid item>
          <Typography color={"textSecondary"} variant={"caption"} gutterBottom>
            {time}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item>
          <Icon color={"secondary"}>attach_money</Icon>
        </Grid>
        <Grid item>
          <Typography color={"textSecondary"} variant={"caption"} gutterBottom>
            {category}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1} >
        <Grid item>
          <Icon color={"error"}>location_on</Icon>
        </Grid>
        <Grid item>
          <Typography color={"textSecondary"} variant={"caption"} gutterBottom>
            {venue}
          </Typography>
        </Grid>
      </Grid>
      <Grid container alignItems={"center"} >
        <Grid item>
          <RLink to={"/event/"+id} style={{textDecoration:'none'}}>
          <Button size="small" variant="contained" color="primary" >
            Buy
          </Button>
          </RLink>
          <Button size="small" color="primary">
            More Info
          </Button>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

PeaEventCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  range: PropTypes.string,
  time: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string)
};
PeaEventCard.defaultProps = {
  range: "",
  images: []
};
PeaEventCard.metadata = {
  name: "Pea Event Card"
};
PeaEventCard.codeSandbox = "https://codesandbox.io/s/zljn06jmq4";

export default PeaEventCard;
