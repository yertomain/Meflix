import React from 'react';
import Slideshow from './Slideshow2';
import { TextoSlide} from './Slideshow2';
import { Slide } from './Slideshow2';


function Carrusel2() {
  return (
    <main>
      <p className='p'>Últimas películas</p>
      <Slideshow>
        <Slide>
          <a href="/Transformer">
            <img
              src="https://static.cinepolis.com/img/peliculas/42397/1/1/42397.jpg"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
            <a href="/Transformer"><p>hola</p></a>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="/Mavka">
            <img
              src="https://es.web.img3.acsta.net/r_1920_1080/pictures/23/05/09/14/23/0965023.jpg"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
          <a href="/Mavka"><p>hola</p></a>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="/Fate">
            <img
              src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/891b0f53ea2958c6911636bd3c2d6b7d.jpe"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
          <a href="/Fate"><p>hola</p></a>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="/Birdbox ">
            <img
              src="https://img.buzzfeed.com/buzzfeed-static/static/2019-01/9/18/asset/buzzfeed-prod-web-03/sub-buzz-15951-1547077378-1.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
          <a href="/Birdbox"><p>hola</p></a>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="/Girlin13room">
            <img
              src="https://ntvb.tmsimg.com/assets/p22751738_v_h8_aa.jpg?w=1280&h=720"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
          <a href="/Girlin13room"><p>hola</p></a>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="/Ipman">
            <img
              src="https://facinema.com/wp-content/uploads/2023/05/Official-Poster-for-Donnie-Yens-IP-MAN-5-1456x2048.png"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
          <a href="/Ipman"><p>hola</p></a>
          </TextoSlide>
        </Slide>
      </Slideshow>
    </main>
  )
}

export default Carrusel2