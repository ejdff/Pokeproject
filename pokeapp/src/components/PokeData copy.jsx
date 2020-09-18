import React, { createElement } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import pokedex from '../imgs/pokedex1.png'




const PokeData = () =>{
    const pokedata = async(id) => {
        const pokeinfo = []
        try {
            //Data Calling
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
            const data = await res.json();
            pokeinfo.push(data)
            
            //Data procesing
            let number_of_types = data.types.length
            let poke_type=[]
            poke_type = data.types.map(value=>value.type.name)
            
            console.log(data)
            
            //Getting canvas from html
            const canvas = document.getElementById('poke_dex')
            const ctx = canvas.getContext("2d")

            //Generating new images object to draw on canvas
            const pkdex = new Image()
            const pkmon = new Image()
            pkdex.src = "http://gran4u.xtgem.com/Pokedex.png"
            pkmon.src = data.sprites.front_default
            pkdex.addEventListener('load',dibujar)
            pkmon.addEventListener('load',dibujar)
            
            //Draw function over canvas
            function dibujar(){
                ctx.drawImage(pkdex,0,0,canvas.width,canvas.height)
                ctx.drawImage(pkmon,25,25)
                ctx.font = "bold 12px sans-serif"
                ctx.fillText(data.name,180,60)
                ctx.fillText(poke_type[0] + '/' + poke_type[1],180,80)
            }

            
            

        } catch (error) {
            console.log('error')
        }
    }

    const [pokemon,setPokemon]= useState(()=>{
        const initialState = pokedata(6)

    })
    const handleChange = (e)=> {
        let event = document.getElementById('text_input').value
        let new_poke = pokedata(event)

    }

    

    return(
        <div className='pokedata'>
            <div className= 'user_input'>
                <input type='text' placeholder= 'Enter id' id='text_input' className='input_text'></input>
                <button type ='button' onClick = {handleChange} className='input_buton'>go!</button>
            </div>
            <div className='img_cont'>
                <img src= "http://gran4u.xtgem.com/Pokedex.png" className= 'pokedex_bck'></img>
                <canvas className= 'poke_dex' id= 'poke_dex'></canvas>
            </div>
            

        </div>
    )
}

export default PokeData