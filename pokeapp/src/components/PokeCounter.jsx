import React, { Component } from 'react'
import { useState, useEffect } from 'react';



const PokeCounter = (props) =>{
    const data = props.info;
    console.log(data)
    //Canvas set
    if(props.info === undefined){
    }
    else if(props.info.length === 0){
    }
    else if(props.info.length>2){
        const img0 = data[0].sprites.front_default
        const canvas0 = document.getElementById('0img')
        const ctx0 = canvas0.getContext("2d")

        const img1 = data[1].sprites.front_default
        const canvas1 = document.getElementById('1img')
        const ctx1 = canvas1.getContext("2d")

        const img2 = data[2].sprites.front_default
        const canvas2 = document.getElementById('2img')
        const ctx2 = canvas2.getContext("2d")


        //Creating new Image Object
        const pkmon_strong0 = new Image()
        pkmon_strong0.setAttribute('src',img0)
        pkmon_strong0.addEventListener('load',dibujar)

        const pkmon_strong1 = new Image()
        pkmon_strong1.setAttribute('src',img1)
        pkmon_strong1.addEventListener('load',dibujar)

        const pkmon_strong2 = new Image()
        pkmon_strong2.setAttribute('src',img2)
        pkmon_strong2.addEventListener('load',dibujar)

        function dibujar(){
            ctx0.clearRect(0,0, canvas0.width, canvas0.height)
            ctx1.clearRect(0,0, canvas1.width, canvas1.height)
            ctx2.clearRect(0,0, canvas2.width, canvas2.height)
        
            ctx0.drawImage(pkmon_strong0,0,0, canvas0.width, canvas0.height)
            ctx1.drawImage(pkmon_strong1,0,0, canvas1.width, canvas1.height)
            ctx2.drawImage(pkmon_strong2,0,0, canvas2.width, canvas2.height)
        }
            
            
        document.getElementById('0name').innerHTML = data[0].name
        document.getElementById('1name').innerHTML = data[1].name
        document.getElementById('2name').innerHTML = data[2].name
    }
    else if(props.info.length === 2){
        const img0 = data[0].sprites.front_default
        const canvas0 = document.getElementById('0img')
        const ctx0 = canvas0.getContext("2d")

        const img1 = data[1].sprites.front_default
        const canvas1 = document.getElementById('1img')
        const ctx1 = canvas1.getContext("2d")

        const canvas2 = document.getElementById('2img')
        const ctx2 = canvas2.getContext("2d")

        //Creating new Image Object
        const pkmon_strong0 = new Image()
        pkmon_strong0.setAttribute('src',img0)
        pkmon_strong0.addEventListener('load',dibujar)

        const pkmon_strong1 = new Image()
        pkmon_strong1.setAttribute('src',img1)
        pkmon_strong1.addEventListener('load',dibujar)

            

        function dibujar(){
            ctx0.clearRect(0,0, canvas0.width, canvas0.height)
            ctx1.clearRect(0,0, canvas1.width, canvas1.height)
            ctx2.clearRect(0,0, canvas2.width, canvas0.height)    
        
            ctx0.drawImage(pkmon_strong0,0,0, canvas0.width, canvas0.height)
            ctx1.drawImage(pkmon_strong1,0,0, canvas1.width, canvas1.height)
                
                
                
        }
            
            
        document.getElementById('0name').innerHTML = data[0].name
        document.getElementById('1name').innerHTML = data[1].name
        document.getElementById('2name').innerHTML = ''
    }
    else{
        const img0 = data[0].sprites.front_default
        const canvas0 = document.getElementById('0img')
        const ctx0 = canvas0.getContext("2d")

        const canvas1 = document.getElementById('1img')
        const ctx1 = canvas1.getContext("2d")

        const canvas2 = document.getElementById('2img')
        const ctx2 = canvas2.getContext("2d")


        //Creating new Image Object
        const pkmon_strong0 = new Image()
        pkmon_strong0.setAttribute('src',img0)
        pkmon_strong0.addEventListener('load',dibujar)


            

        function dibujar(){
            ctx0.clearRect(0,0, canvas0.width, canvas0.height)
            ctx1.clearRect(0,0, canvas1.width, canvas0.height)
            ctx2.clearRect(0,0, canvas2.width, canvas0.height)

            ctx0.drawImage(pkmon_strong0,0,0, canvas0.width, canvas0.height)
            
        }
            
            
        document.getElementById('0name').innerHTML = data[0].name
        document.getElementById('1name').innerHTML = ''
        document.getElementById('2name').innerHTML = ''
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

            <h1>Weak Against</h1>
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