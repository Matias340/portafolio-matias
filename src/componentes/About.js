import React from 'react'
import { Button, Typography, } from '@mui/material';
import pdf from '../imagenes/cv.pdf';
import fondo from '../imagenes/fondo.jpg';
import { makeStyles } from "tss-react/mui";

const About = ({ title, id }) => {
 const { classes } = useStyles();
 
  return (
    <div className={classes.section}>
       <div className={classes.sectioncontent} id={id}>
         <Typography style={{ paddingTop: '80px', color: '#fff' }} variant='h3'>{title}</Typography>
              <Button>
                <a href={pdf} download='CV Matias Andres.pdf'>
                Download CV
                </a>
              </Button>
       </div> 
    </div>
  )
}

const useStyles = makeStyles()((theme) => ({
   section: {
      minHeight: "120vh",
      backgroundImage: `url(${fondo})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',

   },
   sectioncontent: {
      maxWidth: '120vh',
      margin: '0 auto',
      [theme.breakpoints.down('sm')]: {
         maxWidth: '50vh'
      },
      [theme.breakpoints.down('md')]: {
         maxWidth: '60vh'
      }
   },
   pdfButton: {
      position: 'absolute',
      bottom: '20rem',
      left: '18rem',
      [theme.breakpoints.down('sm')]: {
        bottom: '2.5rem',
        right: '1rem',
        padding: theme.spacing(2),
      },
      backgroundColor: '#000',
      padding: theme.spacing(3),
      "& a": {
         color: '#fff',
         fontWeight: 900,
         textDecoration: 'none',
      },
      "& a:hover": {
         borderBottom: '2px solid #fff',
      },
   }
 }));
 

export default About