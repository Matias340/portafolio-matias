import React from 'react'
import udemy from '../imagenes/udemy.png';
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
    <div>
    <Typography variant='h4'>Cursos y Estudios</Typography>
     {
       cursos.map(({ src, title}, index) => (
         <Card sx={{ display: 'flex', marginBottom: '50px', marginTop: '30px' }}>
            <CardMedia>
            <img src={src} alt={title} className={classes.customlogo} />
            </CardMedia>
            <Typography style={{ paddingTop: '25px', paddingRight: '20px', alignItems: 'center', justifyContent: 'center', display: 'flex', width: '170px' }} variant='h8' component='h3'>
                {title}
            </Typography>
        </Card>       
        ))
     }

     <Typography variant='h4' style={{ marginTop: '80px' }}>
        Experiencia Laboral
     </Typography>
     <Card sx={{ display: 'flex', marginTop: '50px' }}>
            <CardMedia>
              <ComputerIcon className={classes.customIcon}/>
            </CardMedia>
            <Typography style={{ paddingRight: '20px', alignItems: 'center', justifyContent: 'center', display: 'flex', width: '220px' }} variant='h8' component='h3'>
                10 meses de experiencia como desarrollador front-end en react
            </Typography>
        </Card>     
    </div>
  )
}

const useStyles = makeStyles()((theme) => ({
    customlogo: {
       width: '120px',
       height: '70px',
       marginTop: '18px',
       marginRight: '20px',
       [theme.breakpoints.down('sm')]: {
         width: '70px',
       }
    },
    customIcon: {
       width: '120px',
       height: '60px',
       marginTop: '8px',
       marginBottom: '8px',
       marginRight: '20px',
       
    }
 }));

export default Cursos