import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Login from "./Login/Login";
import Menu from './Inicio/Menu';
import Inicio from './Inicio/Inicio';
import AccionP from './AccionP';
import Infantiles from  './Infantiles'
import Terror from './Terror';
import AnimeS from './AnimeS';
import Animadas from './Animadas';
import Transformer from './Transformer';
import Krakens from './Krakens';
import Skinamarink from './Skinamarink';
import Directordinner from './Directordinner';
import Mavka from './Mavka';
import Birdbox from './Birdbox';
import Girlin13room from './Girlin13room';
import Ipman from './Ipman';
import Bleach from './Bleach';
import Moongirl from './Moongirl';
import Sugarapple from './Sugarapple';
import Nosvemosenmi19 from './Nosvemosenmi19';
import S548day from './S548day';
import Pandorahearts from './Pandorahearts';
import Spykyoshitsu from './Spykyoshitsu';
import Futurama from './Futurama';
import Lossimpson from './Lossimpson';
import Huyeconejo from './Huyeconejo';
import Guardianesgalaxia from './Guardianesgalaxia';
import Lineadepuntos from './Lineadepuntos';
import Killingbites from './Killingbites';
import Spirit from './Spirit';
import Chainsawman from './Chainsawman';
import Doncochecito from './Doncochecito';
import Flash from './Flash';
import Johnwick from './Johnwick';
import Suegroarmas from './Suegroarmas';
import Coraline from './Coraline';
import Encanto from './Encanto';
import Mario from './Mario';
import Phineasyferb from './Phineasyferb'
import It from './It';
import Elgrito from "./Elgrito";
import Exorcismodeemily from './Exorcismodeemily';


function Todo() {
  return (
    <Routes>
      <Route path='/' Component={Login} />
     <Route path='/' element={<Menu/>}>
     <Route path='/Menu' element={<Inicio/>}/>
     <Route path='/AccionP' element={<AccionP/>}/>
     <Route path='/Infantiles' element={<Infantiles/>}/>
     <Route path='/Terror' element={<Terror/>}/>
     <Route path='/AnimeS' element={<AnimeS/>}/>
     <Route path='/Animadas' element={<Animadas/>}/>
     <Route path='/Transformer' element={<Transformer/>}/>
     <Route path='/Krakens' element={<Krakens/>}/>
     <Route path='/Skinamarink' element={<Skinamarink/>}/>
     <Route path='/Directordinner' element={<Directordinner/>}/>
     <Route path='/Mavka' element={<Mavka/>}/>
     <Route path='/Birdbox' element={<Birdbox/>}/>
     <Route path='/Girlin13room' element={<Girlin13room/>}/>
     <Route path='/Ipman' element={<Ipman/>}/>
     <Route path='/Bleach' element={<Bleach/>}/>
     <Route path='/Moongirl' element={<Moongirl/>}/>
     <Route path='/Sugarapple' element={<Sugarapple/>}/>
     <Route path='/Nosvemosenmi19' element={<Nosvemosenmi19/>}/>
     <Route path='/S548day' element={<S548day/>}/>
     <Route path='/Pandorahearts' element={<Pandorahearts/>}/>
     <Route path='/Spykyoshitsu' element={<Spykyoshitsu/>}/>
     <Route path='/Futurama' element={<Futurama/>}/>
     <Route path='/Lossimpson' element={<Lossimpson/>}/>
     <Route path='/Huyeconejo' element={<Huyeconejo/>}/>
     <Route path='/Guardianesgalaxia' element={<Guardianesgalaxia/>}/>
     <Route path='/Lineadepuntos' element={<Lineadepuntos/>}/>
     <Route path='/Killingbites' element={<Killingbites/>}/>
     <Route path='/Spirit' element={<Spirit/>}/>
     <Route path='/Chainsawman' element={<Chainsawman/>}/>
     <Route path='/Doncochecito' element={<Doncochecito/>}/>
     <Route path='/Flash' element={<Flash/>}/>
     <Route path='/Johnwick' element={<Johnwick/>}/>
     <Route path='/Suegroarmas' element={<Suegroarmas/>}/>
     <Route path='/Coraline' element={<Coraline/>}/>
     <Route path='/Encanto' element={<Encanto/>}/>
     <Route path='/Mario' element={<Mario/>}/>
     <Route path='/It' element={<It/>}/>
     <Route path='/Elgrito' element={<Elgrito/>}/>
     <Route path='/Exorcismodeemily' element={<Exorcismodeemily/>}/>
     <Route path='/Phineasyferb' element={<Phineasyferb/>}/>
     </Route>
    </Routes>
  )
}

export default Todo