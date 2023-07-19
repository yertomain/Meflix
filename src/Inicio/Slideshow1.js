import React, { useRef} from "react";
import { VscChevronLeft,VscChevronRight } from "react-icons/vsc";
import { styled } from "styled-components";
const Slideshow = ({children}) => {
  const slideshow = useRef(null);
  
  const siguiente = () => {
    if (slideshow.current.children.length > 0) {
      const primerElemento = slideshow.current.children[0];

      slideshow.current.style.transition = `300ms ease-out all`;

      const tamañoSlide = slideshow.current.children[0].offsetWidth;

      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      const transicion = () => {
        slideshow.current.style.transition = `none`;
        slideshow.current.style.transform = `translateX(0)`;

        slideshow.current.appendChild(primerElemento);
        slideshow.current.removeEventListener("transitionend", transicion);
      };
      slideshow.current.addEventListener("transitionend", transicion);
    }
  };

  const anterior = () => {
    console.log("Anterior");
    if (slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      );

      slideshow.current.style.transition = "none";

      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `300ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };


  return (
    <ContenedorPrinciopal>
      <ContenedorSlideshow ref={slideshow}>
       {children}
      </ContenedorSlideshow>
      <Controles>
        <Boton onClick={anterior}>
          <VscChevronLeft/>
        </Boton>
        <Boton derecho onClick={siguiente}>
          <VscChevronRight/>
        </Boton>
      </Controles>
    </ContenedorPrinciopal>
  );
};
const ContenedorPrinciopal = styled.div`
  position: relative;
  width: 85%;
  margin-top: 20px;
  margin-left: 100px;
  overflow: hidden;
`;

const ContenedorSlideshow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
`;

const Slide = styled.div`
  min-width: 90%;
  overflow: hidden;
  transition: 0.3s ease all;
  z-index: 10;
  margin: auto;
  max-height: 650px;
  margin-left: 56px;
  position: relative;

  img {
    width: 100%;
    tex-aling: center; 
    height: 350px;
    vertical-align: top;
    overflow: hidden;
    transition-duration: 1s;
    overflow: hidden;
  }
  img:hover {
    opacity: 75%;
  }
  @media screen and (max-width: 900px) {
    min-width: 780px;
    img:hover {
    transform: scale(.9);
  }
  }
`;
const TextoSlide = styled.div`
  min-width: 520px;
  background: ${props => props.colorFondo ? props.colorFondo : 'rgba(0,0,0,.5)'};
  color: ${props => props.colorTexto ? props.colorTexto : 'white'};
  width: 100%;
  text-align: center;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  font-size: 25px;


 @media screen and (max-width: 900px) {
    position: absolute;
    background: ${props => props.colorFondo ? props.colorFondo : '#000'};
  }
`;
const Controles = styled.div`
  position: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
`;
const Boton = styled.button`
  pointer-events: all;
  color: black;
  background: none;
  outline: none;
  border: none;
  filter: drop-shadow(3px 1px black);
  width: 50px;
  height: 100%;
  text-align: center;
  position: absolute;
  overflow: hidden;
  transition: 0.3s ease all;
  font-size: 50px;
  

  &:hover {
    background: darkgray;
  

  path{
    filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px white)' : 'drop-shadow(2px 0px 0px white)'};
  }
}
  ${props => props.derecho ? 'right:0' : 'left:0'}
`;
export {Slide,TextoSlide}
export default Slideshow;