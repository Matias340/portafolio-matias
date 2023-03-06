import React, { useRef } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { makeStyles } from "tss-react/mui";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import emailjs from '@emailjs/browser';


const Contact = ({id}) => {
  const { classes } = useStyles();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_or5r4pq', 'template_cllx9pq', form.current, 'nI9moK4-p0FOnX_O1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
<div className={classes.section}>
  <div className={classes.sectionContent} id={id}>
  <div className={classes.root}>
  <div className={classes.titleChoices}>
  <Typography variant='h5'>CONTACTO GMAIL</Typography>
  </div>
    <form className={classes.form} noValidate autoComplete='off' ref={form} onSubmit={sendEmail}>
      <TextField style={{ marginBottom: '40px', marginLeft: '40px', marginRight: '40px' }} label='Nombre' type="text" name="user_name" />
      <TextField style={{ marginBottom: '40px', marginLeft: '40px', marginRight: '40px' }} label='Email' type="email" name="user_email" />
      <TextField style={{ marginBottom: '40px', marginLeft: '40px', marginRight: '40px' }} label='Escribe un mensaje' name="message" />
      <Button color='secondary' variant='contained' type="submit" value="Send">Enviar</Button>
    </form>
    </div>
  </div>
  <div className={classes.titulo}>
  <Typography variant='h5'>Tambien puedes contactarme por aqui</Typography>
  </div>
  <ArrowDownwardIcon style={{fontSize:'50px'}}/>
  <div className={classes.green}>
  <a target='_blank' rel='noopener noreferrer' className={classes.whatsapp} href='https://wa.link/3a0v8j'>Contacto<WhatsAppIcon style={{ marginLeft: '10px' }} /></a> 
  </div>
</div>  
  )
}

const useStyles = makeStyles()((theme) => ({
  section: {
     minHeight: "90vh",
     marginTop: '20px',
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'flex-start',
     alignItems: 'center',
  },
  root:{
     border: '1px solid #202020',
     borderRadius: '7px',
     marginTop: theme.spacing(4),
     color: '#000',
     fontSize: '1.2rem',
     width: '700px',
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'space-between',
     paddin: theme.spacing(4),
     '& button': {
        backgroundColor: '#186FEC',
        color: '#fff',
        fontWeight: 900,
        fontSize: '1.2rem',
        justifyContent: 'center',
        textDecoration: 'none',
     },
     "& button:hover": {
        cursor: 'pointer',
        backgroundColor: '#186FEC',
        color: '#fff',
     },
     [theme.breakpoints.down('sm')]: {
      width: '300px',
   },
   [theme.breakpoints.down('md')]: {
    width: '300px',
 },
  },
  sectionContent: {
     maxWidth: '80vw',
  },
  titleChoices: {
    '& h5': {
       marginBottom: theme.spacing(6),
       marginTop: theme.spacing(4)
    }
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  green:{
    marginTop: '10px',
    marginBottom: '40px',
    background: '#0E810C',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '20px',
    paddingRight: '20px',
    borderRadius: '10px'
  },
  whatsapp:{
    textDecoration: 'none',
    fontSize: '30px',
    color: '#fff',
  },
  titulo: {
    marginTop: '20px', 
    marginBottom: '10px',
  }
}));

export default Contact