import React from 'react'
import { Button, Typography, } from '@mui/material';
import pdf from '../imagenes/cv.pdf';
import fondo from '../imagenes/fondo.jpg';
import { makeStyles } from "tss-react/mui";
import react from '../imagenes/react.png';
import Javascript from '../imagenes/javascript.png';
import node from '../imagenes/node.png';

const About = ({ id }) => {
 const { classes } = useStyles();
 
  return (
    <div className={classes.section}>
       <div className={classes.sectioncontent} id={id}>
         <Typography style={{ paddingTop: '80px', color: '#fff' }} variant='h3'>
            Hola
         </Typography>
         <Typography style={{ paddingTop: '20px', color: '#fff' }} variant='h3'>
            mi nombre es Matias Andres
         </Typography>
         <Typography style={{ paddingTop: '40px', color: '#fff' }} variant='h5'>
            soy desarrollador front-end en react y javascript
         </Typography>
         <Typography style={{ paddingTop: '40px', color: '#fff' }} variant='h5'>
            Tecnologias que uso:
         </Typography>
         <div style={{ marginTop: '10px' }}>
            <img src={react} alt='react' className={classes.customlogo}/>
            <img src={Javascript} alt='javascript' className={classes.customlogo}/>
            <img src={node} alt='node' className={classes.customlogo}/>
         </div>
              <Button variant="outlined" className={classes.pdfButton}>
                <a href={pdf} download='CV Matias Andres.pdf'>
                Descargar CV
                </a>
              </Button>
       </div> 
    </div>
  )
}

const useStyles = makeStyles()((theme) => ({
   section: {
      minHeight: "85vh",
      backgroundImage: `url(${fondo})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
      height: '50px',
      overflow: 'hidden',
      [theme.breakpoints.down('md')]: {
         minHeight: "650px",
      },
      [theme.breakpoints.up('sm')]: {
         minHeight: "600px",
      },
      [theme.breakpoints.up('md')]: {
         height: '600px',
         
      },
   },
   sectioncontent: {
      maxWidth: '220vh',
      margin: '0 auto',
      backgroundColor: 'rgba(0,0,0,0.8)',
      [theme.breakpoints.down('sm')]: {
         maxWidth: '50vh',
         height: '1000px',
      },
      [theme.breakpoints.down('md')]: {
         maxWidth: '190vh',
         height: '1400px',
      },
      [theme.breakpoints.up('md')]: {
         height: '1500px',
      }
   },
   pdfButton: {
      marginTop: '50px',
      marginBottom: '140px',
      border: '1px solid #fff',
      padding: '10px',
     '& a': {
        color: '#fff',
        textDecoration: 'none',
     },
     '& a:hover': {
        borderBottom: '1px solid #fff',
     }
   },
   customlogo: {
      width: '150px',
      [theme.breakpoints.down('sm')]: {
        width: '70px',
      }
   },
 }));
 

export default About