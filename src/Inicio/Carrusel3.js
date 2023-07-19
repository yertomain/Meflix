import React from 'react';
import Slideshow from './Slideshow2';
import { TextoSlide} from './Slideshow2';
import { Slide } from './Slideshow2';


function Carrusel3() {
  return (
    <main>
      <p className='p'>Últimas series</p>
      <Slideshow>
        <Slide>
          <a href="/Veranoenamore">
            <img
              src="https://i0.wp.com/elgeneracionalpost.com/wp-content/uploads/2022/06/Portada-1.jpg?resize=696%2C928&ssl=1"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
          <a href="/Veranoenamore"><p>hola</p></a>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="/Bleach">
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/bleach_tybw_-_star_4e8a8fd5.jpeg?region=0,1650,2989,1679&width=768"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
          <a href="/Bleach"><p>hola</p></a>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="/Moongirl">
            <img
              src="https://cdn.sincroguia.tv/uploads/programs/l/a/-/xla-chica-luna-de-marvel-y-el-dinosaurio-diablo-1151309_SPA-43.jpg.pagespeed.ic.GQ01iJCxq-.webp"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
          <a href="/Moongirl"><p>hola</p></a>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="/Sugarapple">
            <img
              src="https://images.cdn3.buscalibre.com/fit-in/360x360/ea/2b/ea2ba51a04fd2142b5c15d0ed6242dc1.jpg"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
          <a href="/Sugarapple"><p>hola</p></a>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="/Nosvemosenmi19">
            <img
              src="https://img.betaseries.com/DrAFn_SiX9rrHmQLXJDYq7MGw0U=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fa4a36c204d50a348cde4510f804aeabd.jpg"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
          <a href="/Nosvemosenmi19"><p>hola</p></a>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="/S548day">
            <img
              src="https://images.martincid.com/wp-content/uploads/2023/06/yqoJ698uVgN056N2dCRqRyPPJyx-480x720.jpg?strip=all&lossy=1&ssl=1"
              alt="no imagen"
            />
          </a>
          <TextoSlide>
          <a href="/S548day"><p>hola</p></a>
          </TextoSlide>
        </Slide>
      </Slideshow>
    </main>
  )
}

export default Carrusel3