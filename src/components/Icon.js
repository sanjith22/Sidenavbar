import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import WebIcon from "@material-ui/icons/Web";
import TouchAppOutlinedIcon from "@material-ui/icons/TouchApp";
import ToysOutlinedIcon from "@material-ui/icons/Toys";
import TrackChangesOutlinedIcon from "@material-ui/icons/TrackChanges";
import TrafficOutlinedIcon from "@material-ui/icons/Traffic";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 240,
    display: "flex",
  },
  head: {
    boxShadow: "none",
    width: 240,
    borderTop: "solid 1px #9b9b9b",
    borderRadius: 0 + " !important",
    margin: 0 + " !important",
  },
  accro: {
    marginTop: 0 + " !important",
    marginBottom: 0 + " !important",
    minHeight: "0!important",
  },
  accroexp: {
    margin: "0!important",
    minHeight: "0!important",
  },
  headtext: {
    paddingLeft: 10,
    fontSize: 14,
  },
  webicons: {
    fontSize: 20,
  },
  imges: {
    width: 200,

    "& > *": {
      margin: theme.spacing(1),
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    display: "flex",
  },
  textwidth: {
    borderRadius: 0,
  },
  search: {
    fontSize: 16,
    justifyContent: "flex-end",
    textAlign: "right!important",
    marginLeft: 88,
  },
}));

export default function Icon() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className={classes.head}>
        <AccordionSummary
          className={classes.accro}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            <WebIcon className={classes.webicons} />
            <span className={classes.headtext}>ICON</span>
            <SearchIcon className={classes.search} />
          </Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails className={classes.textwidth}>
          <Typography className={classes.textwidth}>
            <div className={classes.imges}>
              <TouchAppOutlinedIcon />
              <ToysOutlinedIcon />
              <TrackChangesOutlinedIcon />
              <TrafficOutlinedIcon />
              <TouchAppOutlinedIcon />
              <ToysOutlinedIcon />
              <TrackChangesOutlinedIcon />
              <TrafficOutlinedIcon />
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
