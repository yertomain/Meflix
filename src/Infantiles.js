import React from 'react';

function Infantiles() {
  const users = [
    {
      id: 1,
      name: "mavka guardian del bosque",
      image:
        "https://es.web.img2.acsta.net/r_1920_1080/pictures/23/05/03/22/11/1130421.jpg",
        informacion:"Mavka",
    },
    {
      id: 2,
      name: "krakens y sirenas",
      image:
        "https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster/2/2/0/1/41022-4-esl-CO/3d624bce4cb6-k_s_cineco_2-poster_480x670.jpg",
        informacion:"/Krakens",
    },
    {
      id: 3,
      name: "Coraline",
      image: "https://raisingchildren.net.au/__data/assets/image/0031/49972/coraline.jpg",
      informacion:"/Coraline",
    },
    {
      id: 4,
      name: "Encanto",
      image:
        "https://www.aceprensa.com/wp-content/uploads/2021/11/Cartel-Encanto.jpg",
        informacion:"/Encanto",
    },
    {
      id: 5,
      name: "super mario bros la pelicula",
      image:
        "http://cinemadryn.com/files/films/2078/POSTERMARIOBROSS.jpg",
        informacion:"/Mario",
    },
    {
      id: 6,
      name: "Espiritu indomable",
      image:
        "https://i.linio.com/p/f048061acea3bd2ce94d0f9f1b4383ee-product.webp",
        informacion:"/Spirit",
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

export default Infantiles