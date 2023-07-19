import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import "./Menu.css";

function Menu() {
  return (
    <>
      <nav>
        <ul className='menu-horizontal'>
          <li><a href="/Menu">Inicio</a></li>
              <li><a href="/AccionP">Accion</a></li>
              <li><a href="/Infantiles">Infantiles</a></li>
              <li><Link to="/Terror">Terror</Link></li>
              <li><Link to="/AnimeS">Anime</Link></li>
              <li><Link to="/Animadas">Animadas</Link></li>
          <li><Link to="/">Salir</Link></li>
        </ul>
      </nav>
      <div className='pene'>
            <Outlet />
          </div>
    </>
  )
}

export default Menu