import React from 'react';
import Slideshow from './Slideshow2';
import { TextoSlide} from './Slideshow2';
import { Slide } from './Slideshow2';


function Carrusel4() {
  return (
    <main>
      <p className='p'>Últimos dibujos animados</p>
      <Slideshow>
        <Slide>
          <a href="/Krakens">
            <img
              src="https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster/2/2/0/1/41022-4-esl-CO/3d624bce4cb6-k_s_cineco_2-poster_480x670.jpg"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
          <a href="/Krakens"><p>hola</p></a>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="/Pandorahearts">
            <img
              src="https://images.cdn2.buscalibre.com/fit-in/360x360/63/37/6337cbac44af9bff2831d04b957a8313.jpg"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
          <a href="/Pandorahearts"><p>hola</p></a>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="/Despiertacarlo">
            <img
              src="https://images.martincid.com/wp-content/uploads/2023/06/kNfgnkczmgrp6Bj9D8hoeCh2lJK-480x720.jpg?strip=all&lossy=1&ssl=1"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
          <a href="/Despiertacarlo"><p>hola</p></a>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="/Spykyoshitsu">
            <img
              src="https://cdn.myanimelist.net/images/anime/1866/131844l.jpg?_gl=1*1pk550i*_ga*MTA5MjA5MDMyNy4xNjg5NTQ0MDI3*_ga_26FEP9527K*MTY4OTU0NDA0Ni4xLjAuMTY4OTU0NDA0OC41OC4wLjA."
              alt="no imagen"
            />
          </a>
          <TextoSlide>
          <a href="/Spykyoshitsu"><p>hola</p></a>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="/Futurama">
            <img
              src="https://www.infobae.com/new-resizer/OycxunpoHrevHaxdqzZqnYUCCsY=/768x1024/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/2KSMS7XFVVHOZM2YXJOUQR7AV4.png"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
          <a href="/Futurama"><p>hola</p></a>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="/Lossimpson">
            <img
              src="https://r2.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fs3.abcstatics.com%2Fmedia%2Fcapitulos%2F000%2F026%2F939%2Fmarge-virtual-1.jpg&nuevoancho=150&medio=abc"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
          <a href="//Lossimpson"><p>hola</p></a>
          </TextoSlide>
        </Slide>
      </Slideshow>
    </main>
  )
}

export default Carrusel4