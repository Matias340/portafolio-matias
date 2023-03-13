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
                <div>
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
                  </div>   
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
     color: '#fff',
     [theme.breakpoints.up('md')]: {
      minHeight: "45vh",
   },
   [theme.breakpoints.down('md')]: {
    minHeight: "15vh",
 },
  },
  
  sectionContent: {
    maxWidth: '90vw',
    margin: '0 auto',
    padding: theme.spacing(5),
    
    
  },
  grid: {
    marginTop: theme.spacing(8),
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    minWidth: 345,
    minHeight: 175,  
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