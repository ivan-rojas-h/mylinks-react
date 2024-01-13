import React from "react";
import '../styles/Content.css'
import Header from "./Header";
import LinksList from './LinksList'

function Content() {
  return (
    <div className="content">
      <Header />
      <p className='content__description'>
        Soy ingeniero informático titulado de la Universidad Tecnológica de Chile INACAP. Actualmente estoy haciendo un gran cambio de mi carrera como profesional pasando de SOPORTE TI a DESARROLLADOR WEB. Aquí prodrás encontrar todos mis enlaces de interés. !Bienvenid@!
      </p>
      <LinksList 
        groupTitle='Redes profesionales' 
        groupType='job'
      />
      <LinksList 
        groupTitle='Redes sociales' 
        groupType='social'
      />
      <LinksList 
        groupTitle='Contacto' 
        groupType='contact'
      />
    </div>
  );
}

export default Content;