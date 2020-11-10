import React from 'react'

import { makeStyles } from '@material-ui/styles';
import { ListItem, Link, Breadcrumbs } from '@material-ui/core';

import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from '@material-ui/core/Typography';

import HomeIcon from '@material-ui/icons/Home';
import PaymentIcon from '@material-ui/icons/Payment';
import BarChartIcon from '@material-ui/icons/BarChart';


const useStyles = makeStyles((theme) => ({
    minW: {
        minWidth: "0px"
    },
    padZero: {
        padding: "0px"
    },
    colorWhite: {
        color: "#aaaaaa",
    },
    selectedColor: {
        color: "#ffffff"
    }
}));


export const BreadComp = () => {

    const classes = useStyles();

    return (
        <div>
            <Breadcrumbs style={{ paddingBottom: '5px' }} aria-label="breadcrumb" className={classes.colorWhite}>
                <ListItem button className={classes.padZero}>
                    <ListItemIcon className={classes.minW} >
                        <Link color="inherit" href="/">
                            <HomeIcon fontSize="small" className={classes.colorWhite} />
                        </Link>
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button className={classes.padZero}>
                    <ListItemIcon className={classes.minW}>
                        <Link color="inherit" href="/">
                            <PaymentIcon fontSize="small" className={classes.colorWhite} />
                        </Link>
                    </ListItemIcon>
                    <ListItemText primary="Orders" />
                </ListItem>
                <ListItem button className={classes.padZero}>
                    <ListItemIcon className={classes.minW}>
                        <Typography color="inherit">
                            <BarChartIcon fontSize="small" className={classes.colorWhite} />
                        </Typography>
                    </ListItemIcon>
                    <ListItemText primary="Reports" />
                </ListItem>
            </Breadcrumbs >
        </div>
    )
}
