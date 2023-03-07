import React from 'react'
import { Button, Typography, } from '@mui/material';
import pdf from '../imagenes/cv.pdf';
import fondo from '../imagenes/fondo.jpg';
import { makeStyles } from "tss-react/mui";

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
         minHeight: "95vh",
      },
      [theme.breakpoints.up('md')]: {
         minHeight: "80vh",
      }
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
         maxWidth: '90vh',
         height: '1000px',
      },
      [theme.breakpoints.up('md')]: {
         height: '1500px',
      }
   },
   pdfButton: {
      marginTop: '100px',
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
   }
 }));
 

export default About