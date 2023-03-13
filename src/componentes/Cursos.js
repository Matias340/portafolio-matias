import React from 'react'
import udemy from '../imagenes/udemy2.png';
import { Typography, Card, CardMedia } from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';
import { makeStyles } from "tss-react/mui";

const Cursos = () => {
    const { classes } = useStyles();
    const cursos = [
        {  
          src: udemy,
          title: 'Master en Javascript, jquery, angular, nodesJS',
        },
        {  
            src: udemy,
            title: 'Javacript moderno guia definitiva',
        },  
         
      ]

  return (
    <div className={classes.espacio}>
    <Typography className={classes.titulo} variant='h4'>Cursos y Estudios</Typography>
     {
       cursos.map(({ src, title}, index) => (
         <Card className={classes.card} elevation={3} sx={{ display: 'flex', marginBottom: '50px', marginTop: '30px' }}>
            <CardMedia>
            <img src={src} alt={title} className={classes.customlogo} />
            </CardMedia>
            <Typography className={classes.texto} style={{ paddingBottom: '5px', paddingTop: '5px',  paddingRight: '20px', alignItems: 'center', justifyContent: 'center', display: 'flex', width: '170px' }} variant='h8' component='h3'>
                {title}
            </Typography>
        </Card>       
        ))
     }

     <Typography className={classes.tituloSkills} variant='h4' style={{ marginTop: '80px' }}>
        Experiencia Laboral
     </Typography>
     <Card  className={classes.card} elevation={3} sx={{ paddingBottom: '5px', paddingTop: '5px', display: 'flex', marginTop: '50px' }}>
            <CardMedia>
              <ComputerIcon className={classes.customIcon}/>
            </CardMedia>
            <Typography style={{ paddingRight: '20px', alignItems: 'center', justifyContent: 'center', display: 'flex', width: '220px' }} variant='h8' component='h3'>
                desarrollador front-end en react desde 2020
            </Typography>
        </Card>     
    </div>
  )
}

const useStyles = makeStyles()((theme) => ({
    customlogo: {
       width: '180px',
       height: '80px',
       marginTop: '10px',
       marginRight: '20px',
       [theme.breakpoints.down('sm')]: {
         width: '140px',
       },
       [theme.breakpoints.down('md')]: {
        width: '180px',
      }
    },
    customIcon: {
       width: '120px',
       height: '60px',
       marginTop: '8px',
       marginBottom: '8px',
       marginRight: '20px',
       
    },
    espacio: {
       [theme.breakpoints.down('sm')]:{
          marginBottom: '40px',
       }
    },
    card: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center'
    },
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  texto: {
    [theme.breakpoints.down('md')]: {
      fontSize: '15px',
    }
  },
 }));

export default Cursos