import React from 'react'
import Navbar from '../componentes/Navbar';
import Skills from '../componentes/Skills';
import MyWork from '../componentes/MyWork';
import About from '../componentes/About';
import Contact from '../componentes/Contact';
import Footer from '../componentes/Footer';

const HomePages = () => {
  return (
    <div>
      <Navbar />
      <About id="about"/>
      <Skills title="Habilidades y Conocimientos" id="skills" />
      <MyWork title="Proyectos de muestra" id="work" />
      <Contact title="Contacto" id="contact" />
      <Footer />
    </div>
  )
}

export default HomePages