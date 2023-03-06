import React from 'react'
import { makeStyles } from "tss-react/mui";
import Tecnologias from './Tecnologias';
import Cursos from './Cursos';


const Skills = ({title, id}) => {
  const { classes } = useStyles();
  return (
    <div className={classes.section}>
       <div className={classes.sectionContent} id={id}>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>  
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
     marginTop: '70px'
  },
}));

export default Skills