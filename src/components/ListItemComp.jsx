import React from 'react';
import { Divider, Grid, Drawer, IconButton, Typography, makeStyles, List, ListItem } from '@material-ui/core'
import SearchIcon from "@material-ui/icons/Search";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import PaymentIcon from '@material-ui/icons/Payment';
import PersonIcon from '@material-ui/icons/Person';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';

const useStyles = makeStyles((theme) => ({
    nested: {
        paddingLeft: theme.spacing(4),
    }
}))


const ListItemComp = () => {
    const classes = useStyles;

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
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
        </>
    )
}

export default ListItemComp;