import React from 'react';
import Slideshow from './Slideshow1';
import { TextoSlide } from './Slideshow1';
import { Slide } from './Slideshow1';
import { VscDebugStart } from "react-icons/vsc";
import "./Carrusel1.css"



function Carrusel1() {
  return (
    <main>
      <Slideshow>
        <Slide>
          <a href='/Transformer'>
            <img
              src="https://img.asmedia.epimg.net/resizer/emc03ABBjMKuxN6XZcuHETvv3gE=/976x549/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/25IAY3O4ZVF4LPEHALL2C7Y4YU.jpg"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
            <a href="/Transformer"><button><VscDebugStart />Play</button></a>
            <p className='descuento'>15% descuento</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="/Krakens">
            <img
              src="https://cdn.mallmarina.cl/mallmarina/uploads/2023/06/GM-GRAFICA-850x480-1.jpg"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
            <a href="/Krakens"><button><VscDebugStart />Play</button></a>
            <p className='descuento'>15% descuento</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="/Blackclover">
            <img
              src="https://e.radio-grpp.io/normal/2022/12/02/075907_1354836.jpg"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
            <a href="/Blackclover"><button><VscDebugStart />Play</button></a>
            <p className='descuento'>15% descuento</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="/Skinamarink">
            <img
              src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/01/Skinamarink-Horizontal-copy-scaled-1.jpg?resize=1200%2C675&quality=50&strip=all&ssl=1"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
            <a href="/Skinamarink"><button><VscDebugStart />Play</button></a>
            <p className='descuento'>15% descuento</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="/Hijanovia">
            <img
              src="https://tvnotiblog.com/cinews/wp-content/uploads/2023/06/Daughter-of-the-Bride-Pelicula-750x420.jpg"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
            <a href="/Hijanovia"><button><VscDebugStart />Play</button></a>
            <p className='descuento'>15% descuento</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="/Directordinner">
            <img
              src="https://i0.wp.com/thesportsgrail.com/wp-content/uploads/2022/12/The-Director-Who-Buys-Me-Dinner-Episode-5-6-Release-Date-And-Streaming-Guide.jpg?fit=1280%2C720&ssl=1"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
              <a href="/Directordinner"><button className='button'><VscDebugStart />Play</button></a>
              <p className='descuento'>15% descuento</p>
          </TextoSlide>
        </Slide>

      </Slideshow>
    </main>
  )
}

export default Carrusel1