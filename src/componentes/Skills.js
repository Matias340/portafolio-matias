import React from 'react'
import { Typography } from '@mui/material'
import { makeStyles } from "tss-react/mui";
import Tecnologias from './Tecnologias';


const Skills = ({title, id}) => {
  const { classes } = useStyles();
  return (
    <div className={classes.section}>
       <div className={classes.sectionContent} id={id}>
         <Typography variant='h3' style={{ marginBottom: '80px' }}>{title}</Typography>
         <Tecnologias />
       </div> 
    </div>
  )
}

const useStyles = makeStyles()((theme) => ({
  section: {
     minHeight: "70vh",
     marginTop: '70px'
  },
}));

export default Skills