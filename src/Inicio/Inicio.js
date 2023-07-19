import React from 'react';
import Carrusel1 from './Carrusel1';
import Carrusel2 from './Carrusel2';
import Carrusel3 from './Carrusel3';
import Carrusel4 from './Carrusel4'
import Carrusel5 from './Carrusel5';
import Suscripciones from './Suscripciones';
import "./Inicio.css";

function Inicio() {
  return(
    <div className='div__car'>
      <Carrusel1/>
      <Carrusel2/>
      <Carrusel3/>
      <Carrusel4/>
      <Carrusel5/>
      <Suscripciones/>
    </div>
  );
}

      export default Inicio