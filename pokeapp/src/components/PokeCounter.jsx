import React, { Component } from 'react'
import { useState, useEffect } from 'react';
import Poketry from './Poketry'


const PokeCounter = (props) =>{
    const data = props.info;
    if(props.info === undefined){
        console.log('El Barto1')
    }
    else if(props.info.length === 0){
        console.log('Estas aqui1')
    }
    else{
        console.log(data)
        const type_url = data.types[0].type.url
        const info1 = async () => {
            let f1 = await fetch(type_url)
            let resp = await f1.json();
            
            console.log(resp)
        }
        info1()
        
        
    }
    return(
        <div>
            <h1>El nombre es {data.name}</h1>
            
        
        </div>
    )
}

export default PokeCounter