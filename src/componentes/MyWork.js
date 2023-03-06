import React from 'react'
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import Link from '@mui/material/Link';
import { makeStyles } from "tss-react/mui";
import mockData from '../mockData';

const MyWork = ({ title, id }) => {
  const { classes } = useStyles()
  return (
    <div className={classes.section}>
       <div className={classes.sectionContent} id={id}>
         <Typography variant='h3'>{title}</Typography>
         <Grid containerc className={classes.grid}>
           {
             mockData.map(({ title, image }, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>  
                  <Card className={classes.card}>
                     <CardMedia image={image} className={classes.caratula} />
                     <CardContent>
                        <Typography style={{ fontSize: '25px', fontWeight: 'bold' }}>
                           {title}
                        </Typography>
                        <Link href="/ecommerce" underline="none" className={classes.linkRef} target='_blank' rel='noopener noreferrer'>
                            ver proyecto
                        </Link>  
                     </CardContent>
                  </Card>
                </Grid>  
             ))
           }
         </Grid>
       </div> 
    </div>
  )
}

const useStyles = makeStyles()((theme) => ({
  section: {
     minHeight: "75vh",
     marginTop: '70px',
     backgroundColor: '#000',
     color: '#fff'
  },
  sectionContent: {
    maxWidth: '90vw',
    margin: '0 auto',
    padding: theme.spacing(5),
  },
  grid: {
    marginTop: theme.spacing(5),
  },
  card: {
    maxWidth: 345,
    minHeight: 275,
    marginLeft: '440px',
  },
  caratula: {
    height: 0,
    paddingTop: '56.25%',
  },
  linkRef: {
    color: '#000',
    '&:hover': {
      borderBottom: '2px solid #000',
      paddingBottom: '5px',
      cursor:'pointer'
   },
  }
}));

export default MyWork