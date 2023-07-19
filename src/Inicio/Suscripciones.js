import React from 'react';
import "./Suscripciones.css";
import Modal31 from './Modal31'

function Suscripciones() {
    return (
        <>
            <div className='me'>
                <h1>Precios Meflix</h1>
            </div>
            <div className='container'>
                <div className='div-container'>
                    <div className='div-p'>
                        <p>Basico  $15.000/Mes</p>
                        <p>Meflix originales</p>
                        <p>Cambia de plan o cancela en cualquier momento</p>
                        <strike>Stream 65+en vivo </strike>
                        <strike>Canales de televisión</strike>
                        <Modal31 />
                    </div>
                </div>
                <div className='div-container'>
                    <div className='div-p'>
                        <p>Premium  $40.000/Mes</p>
                        <p>Meflix originales</p>
                        <p>Cambia de plan o cancela en cualquier momento</p>
                        <p>Stream 65+en vivo </p>
                        <strike>Canales de televisión</strike>
                        <Modal31 />
                    </div>
                </div>
                <div className='div-container'>
                    <div className='div-p'>
                        <p>VVIP  $100.000/Mes</p>
                        <p>Meflix originales</p>
                        <p>Cambia de plan o cancela en cualquier momento</p>
                        <p>Stream 65+en vivo </p>
                        <p>Canales de televisión</p>
                        <Modal31 />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Suscripciones