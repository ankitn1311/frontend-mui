import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {
  Breadcrumbs,
  Container,
  Grid,
  IconButton,
  Link,
  Tab,
  Tabs
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import SearchIcon from "@material-ui/icons/Search";
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import PaymentIcon from '@material-ui/icons/Payment';
import BarChartIcon from '@material-ui/icons/BarChart';

const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  alignS: {
    alignSelf: "flex-end"
  }
}));

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`
    };
}

function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
}

const Header = () => {

    const classes = useStyles;
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <Container maxWidth="lg">
                <Toolbar>
                    <Grid container direction="column" justify="flex-start">
                    <Grid container item direction="row" justify="space-between">
                        <Grid item>
                        <Typography variant="h6" wrap className={classes.alignS}>
                            Payments
                        </Typography>
                        </Grid>
                        <Grid item>
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
                    </Grid>
                    <Grid item>
                        <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" href="/" onClick={handleClick}>
                        <HomeIcon />Home
                        </Link>
                        <Link
                            color="inherit"
                            href="/getting-started/installation/"
                            onClick={handleClick}
                        >
                            <PaymentIcon/>Orders
                        </Link>
                        <Typography color="textPrimary"><BarChartIcon/>Reports</Typography>
                        </Breadcrumbs>
                    </Grid>
                    <Grid item>
                        <Divider />
                    </Grid>
                    <Grid item>
                        <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="simple tabs example"
                        >
                        <Tab color="textSecondary" label="Pending" {...a11yProps(0)} />
                        <Tab label="SUBMITTED" {...a11yProps(1)} />
                        <Tab label="CONFIRMED" {...a11yProps(2)} />
                        <Tab label="FAILED" {...a11yProps(3)} />
                        </Tabs>
                    </Grid>
                    </Grid>
                </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Header;