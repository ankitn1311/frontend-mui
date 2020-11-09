import React from 'react'
import { Divider, Grid, Drawer, IconButton, Typography, makeStyles, List, ListItem } from '@material-ui/core'
import SearchIcon from "@material-ui/icons/Search";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import PersonIcon from '@material-ui/icons/Person';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import EcoIcon from '@material-ui/icons/Eco';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';


const menuElements = ["Home", "Customers", "Payments"];

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    pR: {
        paddingRight: "100px"
    },
    headerPadding: {
        padding: "10px"
    }
  }))

const Menu = () => {

    const classes = useStyles;

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
           <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper
            }}
            anchor="left"
            >
            <Grid container direction="row">
                <EcoIcon/>
                <Typography variant="h6" className={classes.headerPadding}>UI Dashboard</Typography>
            </Grid>
            <Divider />
            <Grid container direction="row" justify="space-evenly">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <IconButton>
                    <PersonIcon />
                </IconButton>
                <IconButton>
                    <SettingsApplicationsIcon />
                </IconButton>
            </Grid>
            <Divider />
            <List >
            {menuElements.map((text, index) => (
                <ListItem button key={text} className={classes.pR}>
                <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
                </ListItem>
            ))}
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                    <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Management" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div">
                <ListItem button className={classes.nested}>
                    <ListItemText secondary="Products" />
                </ListItem>
                <ListItem button className={classes.nested}>
                    <ListItemText secondary="Orders" />
                </ListItem>
                </List>
            </Collapse>
            </List>
        </Drawer> 
        </>
    )
}

export default Menu;