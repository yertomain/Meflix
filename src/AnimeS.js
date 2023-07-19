import React from 'react';

function AnimeS() {
  const users = [
    {
      id: 1,
      name: "bleach ",
      image:
        "https://upload.wikimedia.org/wikipedia/en/7/72/Bleachanime.png",
      informacion: "/Bleach",
    },
    {
      id: 2,
      name: "sugar apple fairy tale",
      image:
        "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/170488a734dade8ddbcc1ccb4055da2b.jpe",
      informacion: "/Sugarapple",
    },
    {
      id: 3,
      name: "Spy kyoshitsu",
      image: "https://cdn.myanimelist.net/images/anime/1866/131844l.jpg?_gl=1*10c91cv*_ga*MTA5MjA5MDMyNy4xNjg5NTQ0MDI3*_ga_26FEP9527K*MTY4OTU1NjkzMC4yLjAuMTY4OTU1NjkzMC42MC4wLjA.",
      informacion: "/Spykyoshitsu",
    },
    {
      id: 4,
      name: "Pandora hearts",
      image:
        "https://images.cdn2.buscalibre.com/fit-in/360x360/63/37/6337cbac44af9bff2831d04b957a8313.jpg",
      informacion: "/Pandorahearts",
    },
    {
      id: 5,
      name: "killing bites",
      image:
        "https://picfiles.alphacoders.com/172/thumb-172347.jpg",
      informacion: "/Killinbites",
    },
    {
      id: 6,
      name: "chainsaw man",
      image:
        "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/ea075b926e1073f4eb016bff8cdb434c.jpe",
      informacion: "/Chainsawan",
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

export default AnimeS