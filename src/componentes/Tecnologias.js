import React from 'react'
import javascript from '../imagenes/javascript.png';
import css from '../imagenes/css.png';
import html from '../imagenes/html.png';
import node from '../imagenes/node.png';
import react from '../imagenes/react.png';
import { Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { Paper, Typography } from '@mui/material';
import { makeStyles } from "tss-react/mui";
import StarRating from './StarRating';

const Tecnologias = () => {
  const { classes } = useStyles();
  const skills = [
    {  
      year: '2019',
      src: javascript,
      title: 'Javascript',
      stars: 4,
    },
    {  
        year: '2019',
        src: html,
        title: 'Html',
        stars: 5,
      },  
      {  
        year: '2019',
        src: css,
        title: 'Css',
        stars: 5,
      },
      {  
        year: '2019',
        src: react,
        title: 'React',
        stars: 4,
      },
      {  
        year: '2019',
        src: node,
        title: 'Node',
        stars: 4,
      },
  ]


  return (
    <Timeline align='left'>
     {
       skills.map(({year, src, title, stars}, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent>
                 <Typography variant='h6' color='textSecondary'>
                   {year}
                 </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                 <img src={src} alt={title} className={classes.customlogo} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                 <Paper elevation={3} className={classes.paper}>
                    <Typography variant='h6' component='h1'>
                      {title}
                    </Typography>
                   <StarRating stars={stars} />
                 </Paper>
              </TimelineContent>
            </TimelineItem>
        ))
     }
    </Timeline> 
  )
}

const useStyles = makeStyles()((theme) => ({
   customlogo: {
      width: '95px',
      [theme.breakpoints.down('sm')]: {
        width: '70px',
      }
   },
   paper: {
      padding: '6px 16px',
      maxWidth: '170px',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '140px',
      }
   }
}));

export default Tecnologias