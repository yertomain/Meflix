import React from 'react';
import "./AccionP.css";

function AccionP() {
  const users = [
    {
      id: 1,
      name: "Transformers: el despertar de las bestias",
      image:
        "https://img.asmedia.epimg.net/resizer/emc03ABBjMKuxN6XZcuHETvv3gE=/976x549/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/25IAY3O4ZVF4LPEHALL2C7Y4YU.jpg",
      informacion: "/Transformer",
    },
    {
      id: 2,
      name: "Don cochecito y los caballeros templarios",
      image:
        "https://ver-peliculas-online.org/wp-content/uploads/2023/07/xNWSKYJtFR66zX6CeMSijQC4C0q.jpg",
      informacion: "/Doncochecito",
    },
    {
      id: 3,
      name: "Flash",
      image: "https://e0.pxfuel.com/wallpapers/816/188/desktop-wallpaper-flash-dc-comics-the-flash.jpg",
      informacion: "/Flash",
    },
    {
      id: 4,
      name: "John Wick 4",
      image:
        "https://res.cloudinary.com/dsrrzdwzq/image/upload/c_scale,w_848,h_1247/f_auto,q_auto/v1684892005/john-wick-4-nuevas-imagenes-y-posters-de-la-wick-week-poster.jpg?_i=AA",
      informacion: "/Johnwick",
    },
    {
      id: 5,
      name: "unos suegros de armas tomar",
      image:
        "https://losinterrogantes.com/wp-content/uploads/2023/07/unos-suegros-de-armas-tomar-netflix-cartel-640x800.jpg",
      informacion: "/Suegrosarmas",
    },
    {
      id: 6,
      name: "guardianes de la galaxia vol 3",
      image:
        "https://i0.wp.com/cuatrobastardos.com/wp-content/uploads/2022/12/317511478_6136919753037942_5154973047292760321_n.jpg?w=1080&ssl=1",
      informacion: "/Guardianesgalaxia",
    },
  ];
  return users.map((user, i) => {
    return (
        <section className='img__div' key={i}>
          <a href={user.informacion}>
            <img className='img__juegos' src={user.image} alt="sorry not img" />
          </a>
        </section>
      /*  <p>
         <a href={user.informacion}>
           {user.name}
         </a>
       </p> */
    );
  });
}

export default AccionP