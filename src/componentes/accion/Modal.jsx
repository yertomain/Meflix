import React from 'react'
import { useState } from 'react';
import Ventanamodal from '../Ventanamodal'
import { styled } from 'styled-components';
import ReactPlayer from 'react-player';
import { VscPlay,VscHeartFilled,VscBookmark } from "react-icons/vsc";

function Modal() {
    const [estadoModal1, setEstadoModal1] = useState(false);
  return (
    <div className='div_botones-vid'>
    <ContenedorBotones>
    
    <Boton className='boton' onClick={()=> setEstadoModal1(!estadoModal1)}><VscPlay/> Play</Boton>
    </ContenedorBotones>
    <Ventanamodal
    estado={estadoModal1}
    cambiarEstado={setEstadoModal1}
    mostrarHeader={false}
    mostrarOverlay={false}
    posicionModal="end"
    padding="10px"
    >
        <Contenido>
            <ReactPlayer
             url="https://www.youtube.com/watch?v=v0d0id78XdE"
             margin="top"
             width="100%"
             min-height="80%"
             controls
             playing
             volume="0.5"
             loop
            />
        </Contenido>
    </Ventanamodal>

</div>
  )
}
const ContenedorBotones = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
gap:20px;

`;

const Boton = styled.button`
display:block;
padding:10px 30px;
border-radius:100px;
color:#fff;
border:none;
backgeound:#1766DC;
cursor:pointer;
font-family:'Roboto', sans-serif;
font-weight:500;
transition:.3s ease all;
position:absolute;

&:hover{
    background:#0066FF;
}
`;

const Contenido=styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding: 10px;
height:95%;
margin:top;

`;

export default Modal