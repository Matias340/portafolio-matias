import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import { Link, animateScroll as scroll } from 'react-scroll'
import InfoIcon from '@mui/icons-material/Info';
import { BuildTwoTone, ContactMailTwoTone, EmojiObjectsTwoTone } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../imagenes/Apple.jpg';
import IconButton from '@mui/material/IconButton';
import { Divider, Drawer, ListItem, ListItemIcon } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { makeStyles } from "tss-react/mui";

const links = [
  {
    id: "about",
    text: 'Inicio',
    icon: <InfoIcon fontSize='large'/>
  },
  {
    id: "skills",
    text: 'Conocimientos',
    icon: <EmojiObjectsTwoTone fontSize='large'/>
  },
  {
    id: "work",
    text: 'Mis Proyectos',
    icon: <BuildTwoTone fontSize='large'/>
  },
  {
    id: "contact",
    text: 'Contacto',
    icon: <ContactMailTwoTone fontSize='large'/>
  },
]

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { classes } = useStyles();

   const scrollToTop = () => {
      scroll.scrollToTop()
   }

  return (
    <>
    <AppBar className={classes.root} position='sticky'>
       <Toolbar className={classes.toolbar}>
           <img 
               src={logo} 
               className={classes.logo} 
               alt='Logo'
               onClick={scrollToTop}
            />
           <List className={classes.menu}>
               {
                 links.map(({ id, text }, index) => (
                    <Link key={index} to={id} spy={true} activeClass="active" smooth={true} duration={500} offset={-70}>{text}</Link>
                 ))
               }
           </List>
           <IconButton className={classes.menuButton} edge='end' onClick={()=>setOpen(!open)}>
             <MenuIcon fontSize='large' />
           </IconButton>
       </Toolbar>
    </AppBar>
    <Drawer anchor='right' open={open} onClose={()=>setOpen(false)}>
    
         <ArrowBackIcon className={classes.cancelButton} onClick={ () =>setOpen(false) }/>
     
    <Divider />
      {
        links.map(({id, text, icon}, index) => (
             <Link key={index}
                   className={classes.sidebar}
                   to={id}
                   spy={true}
                   activeClass="active"
                   smooth={true}
                   offset={-70}
             >
               <ListItem component='h5'>
                  <span>
                     <ListItemIcon>
                        {icon}
                     </ListItemIcon>
                  </span>{text}
               </ListItem>
             </Link>
          ))
      } 
    </Drawer>
    </>
  )
}

const useStyles = makeStyles()((theme) => ({
  root: {
     backgroundColor: "#000",
     top: 0,
     left: 0,
     right: 0,
     zIndex: 999,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems:'center',
  },
  logo: {
    height: '3.5rem',
    objectFit: 'contain',
    marginRight: '220px',
    "&:hover": {
       cursor: 'pointer'
    },
    [theme.breakpoints.up('sm')]: {
      marginRight: '90px',
    },
  },
  menu:{
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
  },
   
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
  },
    
    "& a": {
      color: '#fff',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      marginLeft: theme.spacing(10),
    },
    "& a:hover": {
       cursor: 'pointer',
       paddingBottom: '5px',
       borderBottom: '2px solid #fff',
    }
  },
  menuButton: {
     display: 'none',
     [theme.breakpoints.down('sm')]: {
        display: 'block',
        color: '#fff',
        position: 'absolute',
        top: 0,
        right: 10,
     },
     [theme.breakpoints.down('md')]: {
      display: 'block',
      color: '#fff',
      position: 'absolute',
      top: 0,
      right: 10,
   },
  },
  cancelButton: {
    color: '#000',
    position: 'absolute',
    cursor: 'pointer',
    marginTop: '10px',
    left: 10,
  },
  sidebar: {
    width: '50vw',
    [theme.breakpoints.down('sm')]:{
       width: '70vw',
    },
    [theme.breakpoints.down('md')]:{
      width: '60vw',
   },
    "& h5": {
       margin: theme.spacing(10, 0, 0, 0),
       fontSize: '1.4rem',
       color: '#333',
       fontWeight: "bold",
    },
    "& h5:hover": {
      color: 'tomato',
      cursor: 'pointer'
    }
  }
}));

export default Navbar