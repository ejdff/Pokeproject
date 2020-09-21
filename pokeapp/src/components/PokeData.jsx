import React, { createElement } from 'react'
import { useState } from 'react';
import PokeCounter from './PokeCounter';


const PokeData = () =>{
    const pokedatacall = async(id) => {
        
        try {
            //Data Calling
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
            const data = await res.json();
            
            //Extracting pokemon type
            let number_of_types = data.types.length
            let poke_type=[]
            poke_type = data.types.map(value=>value.type.name)

            // Extracting random moves

            function random(){
                let moves_num = data.moves.length
                return Math.floor(Math.random()*moves_num) 
            }

            let moves = [data.moves[random()].move.name,data.moves[random()].move.name,data.moves[random()].move.name]
            console.log(data)
            
            //Getting canvas from html
            const canvas = document.getElementById('poke_pic')
            const ctx = canvas.getContext("2d")
            const canvas2 = document.getElementById('pokedex_info')
            const ctx2 = canvas2.getContext("2d")

            //Generating new images object to draw on canvas
            const pkmon = new Image()
            pkmon.setAttribute('src',data.sprites.front_default)
            pkmon.addEventListener('load',dibujar)
            
            //Draw function over canvas
            function dibujar(){
                ctx.clearRect(0,0, canvas.width, canvas.height)
                ctx.drawImage(pkmon,0,0, canvas.width, canvas.height)
                ctx2.clearRect(0,0, canvas.width, canvas.height)
                ctx2.font = "bold 14px sans-serif"
                ctx2.fillText('Name: ' + data.name,80,20)
                if(poke_type[1]=== undefined){
                    ctx2.fillText('Type: ' + poke_type[0],80,50)
                }
                else{
                    ctx2.fillText('Type: ' + poke_type[0] + '/' + poke_type[1],80,50)
                }
                ctx2.fillText('Move 1: ' + moves[0],80,80)
                ctx2.fillText('Move 2: ' + moves[1],80,110)
                ctx2.fillText('Move 3: ' + moves[2],80,140)
                
            }
            

        } catch (error) {
            alert('No existe ese pokemon')
        }
    }

    const [pokemon,setPokemon]= useState(()=>{
        const initialState = pokedatacall(6)

    })
    const handleChange = (e)=> {
        let event = document.getElementById('text_input').value
        let new_poke = pokedatacall(event)
    }


    return(
        <div className='pokedata'>
            <div className= 'user_input'>
                <div className='img_cont'>
                <img src= "http://gran4u.xtgem.com/Pokedex.png" className= 'pokedex_bck'></img>
                    <canvas className= 'poke_pic' id= 'poke_pic'></canvas>
                    <canvas className= 'pokedex_info' id= 'pokedex_info'></canvas>
                </div>
                <input type='text' placeholder= 'Enter pokemon Id' id='text_input' className='input_text'></input>
                <button type ='button' onClick = {handleChange} className='input_buton'>go!</button>
                
            </div>
        </div>
        
    )
}

export default PokeData