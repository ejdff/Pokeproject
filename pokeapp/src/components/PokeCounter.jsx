import React, { Component } from 'react'
import { useState, useEffect } from 'react';

import search_counter from './search_counter'
import render from './render'


const PokeCounter = (props) =>{
    const data = props.info;
    let type_url = []
    if(props.info === undefined){
        console.log('El Barto1')
    }
    else if(props.info.length === 0){
        console.log('Estas aqui1')
    }
    else{
        console.log(data)
        type_url = data.types[0].type.url
        const info1 = async () => {
            let f1 = await fetch(type_url)
            let resp = await f1.json();
            let doble_damage_to = resp.damage_relations.double_damage_to.map(value=> [value.name, value.url]) 
            search_counter(doble_damage_to).then((data)=>{render(data)})
 
        }
        info1()
        
        
    }
    return(
        <div>
            <h1>El nombre es {data.name}</h1>
            <h1>Strong Against</h1>
            <div className= 'strong_container'>
                <div className='poke_strong_card'>
                    <canvas className='poke_strong_img' id='0img'></canvas>
                    <div className= 'poke_strong_name' id='0name'></div>
                </div>
                <div className='poke_strong_card'>
                    <canvas className='poke_strong_img' id='1img'></canvas>
                    <div className= 'poke_strong_name' id='1name'></div>
                </div>
                <div className='poke_strong_card'>
                    <canvas className='poke_strong_img' id='2img'></canvas>
                    <div className= 'poke_strong_name' id='2name'></div>
                </div>
            </div>
            
        
        </div>
    )
}

export default PokeCounter