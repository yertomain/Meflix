import React from 'react';

function Animadas() {
  const users = [
    {
      id: 1,
      name: "la chica luna de marvel y el dinosaurio diablo",
      image:
        "https://cdn.sincroguia.tv/uploads/programs/l/a/-/xla-chica-luna-de-marvel-y-el-dinosaurio-diablo-1151309_SPA-43.jpg.pagespeed.ic.GQ01iJCxq-.webp",
      informacion: "/Moongirl",
    },
    {
      id: 2,
      name: "futurama ",
      image:
        "https://www.infobae.com/new-resizer/OycxunpoHrevHaxdqzZqnYUCCsY=/768x1024/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/2KSMS7XFVVHOZM2YXJOUQR7AV4.png",
      informacion: "/Futurama",
    },
    {
      id: 3,
      name: "Los simpson",
      image: "https://r2.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fs3.abcstatics.com%2Fmedia%2Fcapitulos%2F000%2F026%2F939%2Fmarge-virtual-1.jpg&nuevoancho=150&medio=abc",
      informacion: "/Lossimpson",
    },
    {
      id: 4,
      name: "Cortar por la linea de puntos",
      image:
        "https://marmotacinefila.files.wordpress.com/2023/05/cortar-por-la-linea-de-puntos-amigos.jpg",
      informacion: "/Lineadepuntos",
    },
    {
      id: 5,
      name: "¡Despierta carlo!",
      image:
        "https://images.martincid.com/wp-content/uploads/2023/06/kNfgnkczmgrp6Bj9D8hoeCh2lJK-480x720.jpg?strip=all&lossy=1&ssl=1",
      informacion: "/Despiertacarlo",
    },
    {
      id: 6,
      name: "Phineas y ferb",
      image:
        "https://r3.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fs1.abcstatics.com%2Fmedia%2Fseries%2F000%2F002%2F389%2Fphineas-y-ferb-1.jpg&nuevoancho=150&medio=abc",
      informacion: "/Phineasyferb",
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

export default Animadas