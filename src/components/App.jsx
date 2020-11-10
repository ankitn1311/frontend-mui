import './App.css';

import React from 'react';
import clsx from 'clsx';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import {
  Tab,
  Tabs,
} from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import EcoIcon from '@material-ui/icons/Eco';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ListItemComp from './ListItemComp';
import SearchIcon from "@material-ui/icons/Search";
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import PersonIcon from '@material-ui/icons/Person';
import TableComp from './TableComp';
import { BreadComp } from './BreadComp';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0D3C61"
    },
    secondary: {
      main: "#4CAF50"
    }
  }
});

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px 8px 16px 0px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const App = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Container maxWidth="lg">
            <Toolbar className={classes.toolbar}>
              <Grid container direction="column" justify="flex-start" >
                <Grid container item direction="row" alignItems="center" justify="space-between">
                  <Grid item>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                      Payments
                </Typography>
                  </Grid>
                  <Grid item>
                    <IconButton color="inherit">
                      <SearchIcon />
                    </IconButton>
                    <IconButton color="inherit">
                      <PersonIcon />
                    </IconButton>
                    <IconButton color="inherit">
                      <SettingsApplicationsIcon />
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid item>
                  <BreadComp />
                </Grid>
                <Grid item>
                  <Divider />
                </Grid>
                <Grid item>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                    style={{ paddingTop: '20px' }}
                  >
                    <Tab style={{ color: '#4CAF50' }} label="PENDING" {...a11yProps(0)} />
                    <Tab label="SUBMITTED" {...a11yProps(1)} />
                    <Tab label="CONFIRMED" {...a11yProps(2)} />
                    <Tab label="FAILED" {...a11yProps(3)} />
                  </Tabs>
                </Grid>
              </Grid>
            </Toolbar>
          </Container>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <EcoIcon style={{ fontSize: "50px", color: '#0B79D0' }} />
            <Typography variant="h6" style={{ fontWeight: '600' }}>
              <span style={{ color: '#0B79D0' }}>UI </span>Dashboard
            </Typography>
          </div>
          <Divider />
          <List>
            <ListItemComp />
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {/* <Orders /> */}
                <TableComp />
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
