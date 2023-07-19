import React from 'react'
import { useState } from 'react';
import Ventanamodal from '../Ventanamodal';
import { styled } from 'styled-components';
import ReactPlayer from 'react-player';
import { VscPlay,VscHeartFilled,VscBookmark } from "react-icons/vsc";

export default function Modal21() {
    const [estadoModal21, setEstadoModal21] = useState(false);
  return (
    <div>
    <ContenedorBotones>
    
    <Boton onClick={()=> setEstadoModal21(!estadoModal21)}><VscPlay/> Play</Boton>
    <Boton><VscBookmark/></Boton>
    <Boton><VscHeartFilled/></Boton>
    </ContenedorBotones>
    <Ventanamodal
    estado={estadoModal21}
    cambiarEstado={setEstadoModal21}
    mostrarHeader={false}
    mostrarOverlay={false}
    posicionModal="end"
    padding="0px"
    >
        <Contenido>
            <ReactPlayer
             url="https://www.youtube.com/watch?v=e61w70E8UUw"
             margin="top"
             width="100%"
             height="50%"
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
margin:top;

`;

