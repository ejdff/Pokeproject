import React, { useState, useEffect } from 'react';
import PokeCounter from './PokeCounter'
import PokeData from './PokeData';

class Poketry extends React.Component {
    state = {
        id: 6,
        back:[]
    }
    
    async componentDidMount(){
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.id}/`);
        let data = await res.json();
        this.setState({
            back: data
        })

    }

    async pokecall(id){
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        let data = await res.json();
        this.setState({
            back: data
        })
    }

    handleClick = () => {
        let event = document.getElementById('text_input1').value
        this.pokecall(event)
        
    }


    render(){
        
        const {id} = this.state
        const name = this.state.back.name
        const {back} = this.state
        
        return(
            <div>
                <input type='text' placeholder= 'Enter pokemon Id' id='text_input1' className='input_text'></input>
                <button type ='button' onClick = {this.handleClick} className='input_buton'>go!</button>
                <PokeCounter info = {back}></PokeCounter>
                <PokeData info= {back}></PokeData>
            </div>
            
        )
      
    }
    
  }


export default Poketry