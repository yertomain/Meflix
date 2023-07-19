import React from 'react';

function Terror() {
  const users = [
    {
      id: 1,
      name: "It",
      image:
        "https://images.cdn2.buscalibre.com/fit-in/360x360/2e/00/2e004a40fd5c55013d75b50fa02a951e.jpg",
      informacion: "/It",
    },
    {
      id: 2,
      name: "El grito",
      image:
        "https://www.arte7.com.uy/Imgn/01_img/2005Mayo/Elgritob.jpg",
      informacion: "/Elgrito",
    },
    {
      id: 3,
      name: "el exorcismo de emily rose ",
      image: "https://i.blogs.es/40d309/emilyrose/1366_2000.jpg",
      informacion: "/Exorcismodeemily",
    },
    {
      id: 4,
      name: "skinamarink",
      image:
        "https://moviefilms.com.uy/wp-content/uploads/2023/02/Skinamrink_Arte14x20-copia.jpg",
      informacion: "/Skinamarink",
    },
    {
      id: 5,
      name: "huye conejo huye",
      image:
        "https://www.nacionflix.com/__export/1688154261366/sites/debate/img/2023/06/30/huye-conejo-huye-pelicula-netflix.jpg_599322722.jpg",
      informacion: "/Huyeconejo",
    },
    {
      id: 6,
      name: "bird box ",
      image:
        "https://darkregions.com/cdn/shop/products/bird-box-front-600px_2048x.jpg?v=1538068872",
      informacion: "/Birdbox",
    },
  ];
  return users.map((user, i) => {
    return (
      <section className='img__div' key={i}>
          <a href={user.informacion}>
            <img className='img__juegos' src={user.image} alt="sorry not img" />
          </a>
        </section>
    );
  });
}

export default Terror