import React from 'react'
import { Container, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { makeStyles } from "tss-react/mui";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const { classes } = useStyles();
 
  return (
    <footer className={classes.footer}>
    <Divider /> 
      <Container>
        <Typography style={{ marginTop: '80px', marginBottom: '40px', color: '#fff' }} variant="h6" align="center" gutterBottom>
          Todos los derechos reservados
        </Typography>
        <Typography variant="subtitle1" align="center">
           <FacebookIcon style={{ marginRight: '40px', fontSize: '35px', color: '#fff' }} />
           <TwitterIcon style={{ marginRight: '40px', fontSize: '35px', color: '#fff' }} />
           <InstagramIcon style={{ fontSize: '35px', color: '#fff' }} />
        </Typography>
      </Container>
    </footer>
  )
}

const useStyles = makeStyles()((theme) => ({
    footer: {
        backgroundColor: '#000',
        height: '250px'
      },
  }));

export default Footer