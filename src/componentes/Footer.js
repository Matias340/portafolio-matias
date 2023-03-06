import React from 'react'
import { Container, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { makeStyles } from "tss-react/mui";


const Footer = () => {
  const { classes } = useStyles();
 
  return (
    <footer className={classes.footer}>
    <Divider /> 
      <Container>
        <Typography style={{ marginTop: '30px', marginBottom: '20px', color: '#fff' }} variant="h6" align="center" gutterBottom>
          Todos los derechos reservados
        </Typography>
      </Container>
    </footer>
  )
}

const useStyles = makeStyles()((theme) => ({
    footer: {
        backgroundColor: '#000',
        height: '100px'
      },
  }));

export default Footer