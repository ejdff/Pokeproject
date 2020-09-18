import React from 'react';
import './App.css';
import PokeData from './components/PokeData'


function App() {
  return (
    <div className="App">
      <div className='user_menu'>
        <div className= 'user_tag'>
          <img src='https://image.flaticon.com/icons/svg/188/188978.svg' className= 'user_img'></img>
          <div className = 'user_name'>Emanuel</div>
        </div>
        <ul className= 'user_info'>
          <li>Main team</li>
          <li>Regions</li>
          <li>Stats</li>
          <li>Known Pokemons</li>
        </ul>
      </div>
      <div className= 'poke_info'>
        <div className= 'pokedex_header'></div>
        <PokeData></PokeData>
      </div>
      <div className='other_info'>
        <ul className='news'>
          <h1>News</h1>
          <li>Team Rocket attacks all over the region</li>
          <li>Pokemon WorldChampionship ranks</li>
          <li>New poketech developed</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
