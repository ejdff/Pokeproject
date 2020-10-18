import React from 'react';
import '../src/css/App.css';
import '../src/css/PokeDex.css';
import '../src/css/PokeCounter.css';
import PokeDex from './components/PokeDex'
import PokeData from './components/PokeData';


function App() {
  return (
    <div className="App">
      <div className='red_band'>
          <b className='header_title'>POKEMON WORLD</b>
        </div>
      <div className='black_band'></div>
      <div className='white_band'>
        <div className= 'header_info'>Home</div>
        <div className= 'header_info'>PokeDex</div>
        <div className= 'header_info'>Regions</div>
        <div className= 'header_info'>My Team</div>
      </div>
      <div className='comp_container'>
        <div className= 'poke_info'>
          <PokeDex></PokeDex>
        </div>
        <div className='other_info'>
          <PokeData></PokeData>
        </div>
      </div>
    </div>
  );
}

export default App;
