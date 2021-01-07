import React from "react";
import Icon from "./Icon";
import Medialibrary from "./Medialibrary";
import Personas from "./Personas";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import Typography from "@material-ui/core/Typography";
import DonutSmallIcon from "@material-ui/icons/DonutSmall";
import HorizontalSplitIcon from "@material-ui/icons/HorizontalSplit";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    boxShadow: "none",
    backgroundColor: "none",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    position: "fixed",
    bottom: 10,
    left: 20,
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    paddingLeft:24,
    paddingRight:24,
    paddingBottom:10,
    paddingTop:20,
    backgroundColor: "white",
    borderRadius: 90,
    maxWidth: 75,
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -225,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    backgroundColor: "inherit",
  },
  toolhead: {
    backgroundColor: "white",
    boxShadow: "none",
    border: "none",
  },
  list: {
    padding: "0",
    borderRadius: 0,
  },
  divide: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    width: 24 + " !important",
    marginBottom: 15 + " !important",
  },
  para: {
    marginTop: 10,
    marginBottom: 10,
  },
  parafirst: {
    marginBottom: 10,
  },
  librarytxt: {
    paddingLeft: 10,
    fontWeight: "bold",
  },
  collapsetxt:{
    fontSize:14,
    color:'black',
  },
  lefticon:{
    // paddingLeft:10,
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <p className={classes.librarytxt}>Library</p>
        <List className={classes.list}>
          <Icon />
        </List>

        <List className={classes.list}>
          <Personas />
        </List>
        <List className={classes.list}>
          <Medialibrary />
        </List>
        <div className={classes.drawerHeader}>
           
          <IconButton onClick={handleDrawerClose}>
          
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
            {/* <ChevronLeftIcon  className={classes.lefticon}/> <p className={classes.collapsetxt}>Collapse </p> */}
          </IconButton>
          <p>Collapse</p>
        </div>
      </Drawer>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph className={classes.parafirst}>
          <DonutSmallIcon
            cursor="pointer"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          />
        </Typography>
        <Divider
          className={classes.divide}
          className={clsx(classes.menuButton, open && classes.hide)}
        />
        <Typography paragraph className={classes.para}>
          <TouchAppIcon
            cursor="pointer"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          />
        </Typography>
        <Divider
          className={classes.divide}
          className={clsx(classes.menuButton, open && classes.hide)}
        />
        <Typography paragraph className={classes.para}>
          <HorizontalSplitIcon
            cursor="pointer"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          />
        </Typography>
        <Divider
          className={classes.divide}
          className={clsx(classes.menuButton, open && classes.hide)}
        />
        <Typography paragraph className={classes.para}>
          <DoubleArrowIcon
            cursor="pointer"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          />
        </Typography>
        
      </main>
    </div>
    
  );
}
