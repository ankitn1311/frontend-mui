import React from 'react'
import { Divider, Grid, Drawer, IconButton, Typography, makeStyles, List, ListItem } from '@material-ui/core'
import SearchIcon from "@material-ui/icons/Search";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import PaymentIcon from '@material-ui/icons/Payment';
import PersonIcon from '@material-ui/icons/Person';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import EcoIcon from '@material-ui/icons/Eco';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';


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
                <Typography variant="h6">UI Dashboard</Typography>
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
                <ListItem button className={classes.nested}>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
                </ListItem>
                <ListItem button className={classes.nested}>
                <ListItemIcon>
                     <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Customers" />
                </ListItem>
                <ListItem button className={classes.nested}>
                <ListItemIcon>
                     <PaymentIcon />
                </ListItemIcon>
                <ListItemText primary="Payments" />
                </ListItem>
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