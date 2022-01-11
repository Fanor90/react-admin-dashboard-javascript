import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyle = makeStyles((theme) => ({
    offset: theme.mixins.toolbar, 
    menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
    }));
 
  
  const Navbar = () => {
    const classes = useStyle();
  
  return (
    <div >
      <AppBar color="inherit">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            DevFanor
          </Typography>
          <Button variant="text" color="inherit">
        buton
      </Button>
      <Button variant="text" color="inherit" >
        buton
      </Button>
          <Button variant="contained" color="inherit">Login</Button>
          
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  );
}
export default Navbar