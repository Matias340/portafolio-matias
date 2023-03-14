import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from "tss-react/mui";
import { ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Navbar = () => {
  const { classes } = useStyles();  
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
          >
            <LocalMallIcon />
          </IconButton>
          <div className={classes.grow} />
          <Typography className={classes.title} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hello Guest
          </Typography>
          <div className={classes.button}>
          <Button variant='outlined'>
             <strong>Sign In</strong>
          </Button>
          <IconButton aria-label='show cart items' color='inherit'>
             <Badge badgeContent={2} color='secondary'>
               <ShoppingCart fontSize='large' />
             </Badge>
          </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      </div>
  );
}

const useStyles = makeStyles()((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: '7rem',
    },
    appBar: {
       boxShadow: 'none'
    },
    grow:{
      flexGrow: 1,
    },
    button: {
      marginLeft: theme.spacing(2),
    },
    imagen: {
       marginRight: '10px',
       height: '1rem',
    },
  }));

export default Navbar;