import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import Menu from './Menu';
import Header from './Header';
import { CssBaseline, Grid } from '@material-ui/core';
import Content from './Content';

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
      <Content />
    </div>
  )
}

export default App;