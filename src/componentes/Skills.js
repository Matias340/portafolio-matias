import React from 'react'
import { makeStyles } from "tss-react/mui";
import Tecnologias from './Tecnologias';
import Cursos from './Cursos';


const Skills = ({title, id}) => {
  const { classes } = useStyles();
  return (
    <div className={classes.section}>
       <div className={classes.sectionContent} id={id}>
      <div className={classes.subsection}>  
         <Cursos />
         <Tecnologias />
      </div>    
       </div> 
    </div>
  )
}

const useStyles = makeStyles()((theme) => ({
  section: {
     minHeight: "70vh",
     marginTop: '70px',
     [theme.breakpoints.down('md')]:{
      minHeight: "20vh",
    },
    [theme.breakpoints.up('md')]:{
      minHeight: "20vh",
    }
  },
  subsection: {
    display: 'flex', 
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]:{
      display: 'block'
    },
  }
}));

export default Skills