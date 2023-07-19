import React from 'react';
import Slideshow from './Slideshow1';
import { TextoSlide} from './Slideshow1';
import { Slide } from './Slideshow1';
import { VscDebugStart } from "react-icons/vsc";


function Carrusel5() {
  return (
    <main>
      <Slideshow>
        <Slide>
          <a href="/Huyeconejo">
            <img
              src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/06/sarah-snook-lily-latorre-run-rabbit-run-645b4d4dc3f7b-scaled.jpg?resize=1200%2C675&quality=50&strip=all&ssl=1"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
          <a href="/Huyeconejo"><button><VscDebugStart />Play</button></a>
            <p className='descuento'>15% descuento</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="/Guardianesgalaxia">
            <img
              src="https://phantom-marca-mx.unidadeditorial.es/9c8e702fca5b5df0fd87c59848871f6f/resize/660/f/webp/mx/assets/multimedia/imagenes/2023/06/08/16862499863006.jpg"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
          <a href="/Guardianesgalaxia"><button><VscDebugStart />Play</button></a>
            <p className='descuento'>15% descuento</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="/Lineadepuntos">
            <img
              src="https://marmotacinefila.files.wordpress.com/2023/05/cortar-por-la-linea-de-puntos-amigos.jpg"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
          <a href="/Lineadepuntos"><button><VscDebugStart />Play</button></a>
            <p className='descuento'>15% descuento</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="/killingbites">
            <img
              src="https://wallpapercave.com/wp/wp3856703.jpg"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
          <a href="/killingbites"><button><VscDebugStart />Play</button></a>
            <p className='descuento'>15% descuento</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="/Spirit">
            <img
              src="https://cdn.playpilot.tech/c467b272d66b11ed9e1e0a58a9feac02/src/img?optimizer=image&quality=75&width=320&aspect_ratio=2%3A3"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
          <a href="/Spirit"><button><VscDebugStart />Play</button></a>
            <p className='descuento'>15% descuento</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="/Chainsawman">
            <img
              src="https://i.blogs.es/d6fb9a/chainsaw-man/1366_2000.jpeg"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
          <a href="/Chainsawman"><button><VscDebugStart />Play</button></a>
            <p className='descuento'>15% descuento</p>
          </TextoSlide>
        </Slide>
      </Slideshow>
    </main>
  )
}

export default Carrusel5