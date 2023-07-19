import React from 'react'
import { useState } from 'react';
import Ventanamodal from '../Ventanamodal';
import { styled } from 'styled-components';
import ReactPlayer from 'react-player';
import { VscPlay,VscHeartFilled,VscBookmark } from "react-icons/vsc";

export default function Modal17() {
    const [estadoModal17, setEstadoModal17] = useState(false);
  return (
    <div className='div_botones-vid'>
    <ContenedorBotones>
    
    <Boton className='boton' onClick={()=> setEstadoModal17(!estadoModal17)}><VscPlay/> Play</Boton>
    </ContenedorBotones>
    <Ventanamodal
    estado={estadoModal17}
    cambiarEstado={setEstadoModal17}
    mostrarHeader={false}
    mostrarOverlay={false}
    posicionModal="end"
    padding="0px"
    >
        <Contenido>
            <ReactPlayer
             url="https://www.youtube.com/watch?v=53_QT4NSB48"
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

