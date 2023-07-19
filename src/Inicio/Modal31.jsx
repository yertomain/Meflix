import React from 'react'
import { useState } from 'react';
import Ventanamodal from '../componentes/Ventanamodal';
import { styled } from 'styled-components';
import "./Modal.css"


export default function Modal31() {
  const [estadoModal31, setEstadoModal31] = useState(false);
  return (
    <div className='modal'>
      <ContenedorBotones>

        <Boton onClick={() => setEstadoModal31(!estadoModal31)}>Ingresar</Boton>
      </ContenedorBotones>
      <Ventanamodal
        estado={estadoModal31}
        cambiarEstado={setEstadoModal31}
        titulo=''
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal="end"
        padding="0px"
      >
        
          <Contenido>
            <label >Usuario</label>
            <input type="text" />
            <label > e-mail </label>
            <input type="email" />
            <label >Contraseña</label>
            <input type="password" />
            <label >Confirmarcontraseña</label>
            <input type="password" />
            <button>Registrarse</button>
          </Contenido>
      </Ventanamodal>

    </div>
  )
}
const ContenedorBotones = styled.div`
padding:40px;
display:flex;
flex-wrap:wrap;
justify-content:center;
gap:20px;


`;

const Boton = styled.button`
display:block;
padding:10px 30px;
border-radius:100px;
color:#000;
border:none;
background:#1766DC;
cursor:pointer;
font-family:'Roboto', sans-serif;
font-weight:500;
transition:.3s ease all;
position:absolute;

&:hover{
    background:#9B9B9B;
}
`;

const Contenido = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:top;
color:#000;

`;

