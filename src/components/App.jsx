import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import Menu from './Menu';
import Header from './Header';
import { CssBaseline } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  alignS: {
    alignSelf: "flex-end"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  tableMargin: {
    marginTop: "150px"
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  },
  table: {
    minWidth: 700
  }
}))

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}> 
      <Menu />
      <CssBaseline />
      <Header />
    </div>
  )
}

export default App;