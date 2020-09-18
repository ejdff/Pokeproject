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
            const canvas = document.getElementById('poke_pic')
            const ctx = canvas.getContext("2d")
            const canvas2 = document.getElementById('poke_info')
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
                ctx2.font = "bold 16px sans-serif"
                ctx2.fillText('Name: ' + data.name,80,30)
                ctx2.fillText('Type: ' + poke_type[0] + '/' + poke_type[1],80,60)
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
            <img src= "http://gran4u.xtgem.com/Pokedex.png" className= 'pokedex_bck'></img>
            <div className='img_cont'>
                <canvas className= 'poke_pic' id= 'poke_pic'></canvas>
                <canvas className= 'poke_info' id= 'poke_info'></canvas>
            </div>
            

        </div>
    )
}

export default PokeData