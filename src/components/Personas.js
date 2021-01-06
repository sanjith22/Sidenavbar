import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Avatar from "@material-ui/core/Avatar";
import WebIcon from "@material-ui/icons/Web";
import Divider from "@material-ui/core/Divider";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 240,
  },
  head: {
    boxShadow: "none",
    width: 240,
    borderTop: "solid 1px #9b9b9b",
    borderRadius: "0!important",
    margin: 0 + " !important",
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
  avttar: {
    display: "inline-flex",
  },
  add: {
    fontSize: 16,
    justifyContent: "right!important",
    textAlign: "right!important",
    marginLeft: 45,
  },
}));

export default function Personas() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className={classes.head}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            <WebIcon className={classes.webicons} />
            <span className={classes.headtext}>PERSONAS</span>
            <AddOutlinedIcon className={classes.add} />
          </Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails className={classes.textwidth}>
          <Typography className={classes.textwidth}>
            <div className={classes.imges}>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className={classes.avttar}
              />
              <Avatar
                alt="Travis Howard"
                src="/static/images/avatar/2.jpg"
                className={classes.avttar}
              />
              <Avatar
                alt="Cindy Baker"
                src="/static/images/avatar/3.jpg"
                className={classes.avttar}
              />
              <Avatar
                alt="Travis Howard"
                src="/static/images/avatar/2.jpg"
                className={classes.avttar}
              />
              <Avatar
                alt="Cindy Baker"
                src="/static/images/avatar/3.jpg"
                className={classes.avttar}
              />
              <Avatar
                alt="Travis Howard"
                src="/static/images/avatar/2.jpg"
                className={classes.avttar}
              />
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
