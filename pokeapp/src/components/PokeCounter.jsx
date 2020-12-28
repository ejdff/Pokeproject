import React, { Component } from 'react'
import { useState, useEffect } from 'react';



const PokeCounter = (props) =>{
    const data = props.info;
    console.log(data)
    const strong = data[0]
    const weak = data[1]
    console.log(strong)
    console.log(weak)
    //Canvas set
     if(strong === undefined){
         setTimeout(console.log('waiting'),1000)
    }
    else if(strong.length === 0){
        setTimeout(console.log('waiting'),1000)
    }
    else if(strong.length>2){
        const img0 = strong[0].sprites.front_default
        const canvas0 = document.getElementById('0img')
        const ctx0 = canvas0.getContext("2d")

        const img1 = strong[1].sprites.front_default
        const canvas1 = document.getElementById('1img')
        const ctx1 = canvas1.getContext("2d")

        const img2 = strong[2].sprites.front_default
        const canvas2 = document.getElementById('2img')
        const ctx2 = canvas2.getContext("2d")

        if(img0 & img1 & img2 === undefined){
        }
        else{
            //Creating new Image Object
            const pkmon_strong0 = new Image()
            pkmon_strong0.setAttribute('src',img0)
            if(pkmon_strong0.complete === true){
                pkmon_strong0.addEventListener('load',dibujar)
            }else{
                setTimeout(()=>{
                    pkmon_strong0.setAttribute('src',img0)
                    pkmon_strong0.addEventListener('load',dibujar)
                },1000)
            }
            

            const pkmon_strong1 = new Image()
            pkmon_strong1.setAttribute('src',img1)
            if(pkmon_strong1.complete === true){
                pkmon_strong1.addEventListener('load',dibujar)
            }else{
                setTimeout(()=>{
                    pkmon_strong1.setAttribute('src',img1)
                    pkmon_strong1.addEventListener('load',dibujar)
                },1000)
            }
            

            const pkmon_strong2 = new Image()
            pkmon_strong2.setAttribute('src',img2)
            if(pkmon_strong2.complete === true){
                pkmon_strong2.addEventListener('load',dibujar)
            }else{
                setTimeout(()=>{
                    pkmon_strong2.setAttribute('src',img2)
                    pkmon_strong2.addEventListener('load',dibujar)
                },1000)
            }
            

            function dibujar(){
                ctx0.clearRect(0,0, canvas0.width, canvas0.height)
                ctx1.clearRect(0,0, canvas1.width, canvas1.height)
                ctx2.clearRect(0,0, canvas2.width, canvas2.height)

                ctx0.drawImage(pkmon_strong0,0,0, canvas0.width, canvas0.height)
                ctx1.drawImage(pkmon_strong1,0,0, canvas1.width, canvas1.height)
                ctx2.drawImage(pkmon_strong2,0,0, canvas2.width, canvas2.height)
            }
                
                
            document.getElementById('0name').innerHTML = strong[0].name
            document.getElementById('1name').innerHTML = strong[1].name
            document.getElementById('2name').innerHTML = strong[2].name

            document.getElementById('0type').innerHTML = strong[0].types[0].type.name
            document.getElementById('1type').innerHTML = strong[1].types[0].type.name
            document.getElementById('2type').innerHTML = strong[2].types[0].type.name
        }


        
    }
    else if(strong.length === 2){
        const img0 = strong[0].sprites.front_default
        const canvas0 = document.getElementById('0img')
        const ctx0 = canvas0.getContext("2d")

        const img1 = strong[1].sprites.front_default
        const canvas1 = document.getElementById('1img')
        const ctx1 = canvas1.getContext("2d")

        const canvas2 = document.getElementById('2img')
        const ctx2 = canvas2.getContext("2d")

        if(img0 & img1 === undefined){
        }
        else{
            //Creating new Image Object
            const pkmon_strong0 = new Image()
            pkmon_strong0.setAttribute('src',img0)
            if(pkmon_strong0.complete === true){
                pkmon_strong0.addEventListener('load',dibujar)
            }else{
                setTimeout(()=>{
                    pkmon_strong0.setAttribute('src',img0)
                    pkmon_strong0.addEventListener('load',dibujar)
                },1000)
            }
            

            const pkmon_strong1 = new Image()
            pkmon_strong1.setAttribute('src',img1)
            if(pkmon_strong1.complete === true){
                pkmon_strong1.addEventListener('load',dibujar)
            }else{
                setTimeout(()=>{
                    pkmon_strong1.setAttribute('src',img1)
                    pkmon_strong1.addEventListener('load',dibujar)
                },1000)
            }

                

            function dibujar(){
                ctx0.clearRect(0,0, canvas0.width, canvas0.height)
                ctx1.clearRect(0,0, canvas1.width, canvas1.height)
                ctx2.clearRect(0,0, canvas2.width, canvas0.height)    
            
                ctx0.drawImage(pkmon_strong0,0,0, canvas0.width, canvas0.height)
                ctx1.drawImage(pkmon_strong1,0,0, canvas1.width, canvas1.height)
            }
                
            document.getElementById('0name').innerHTML = strong[0].name
            document.getElementById('1name').innerHTML = strong[1].name
            document.getElementById('2name').innerHTML = ''

            document.getElementById('0type').innerHTML = strong[0].types[0].type.name
            document.getElementById('1type').innerHTML = strong[1].types[0].type.name
            document.getElementById('2type').innerHTML = ''
        }
    }
    else{
        const img0 = strong[0].sprites.front_default
        const canvas0 = document.getElementById('0img')
        const ctx0 = canvas0.getContext("2d")

        const canvas1 = document.getElementById('1img')
        const ctx1 = canvas1.getContext("2d")

        const canvas2 = document.getElementById('2img')
        const ctx2 = canvas2.getContext("2d")

        if(img0 === undefined){
        }
        else{
            //Creating new Image Object
            const pkmon_strong0 = new Image()
            pkmon_strong0.setAttribute('src',img0)
            if(pkmon_strong0.complete === true){
                pkmon_strong0.addEventListener('load',dibujar)
            }else{
                setTimeout(()=>{
                    pkmon_strong0.setAttribute('src',img0)
                    pkmon_strong0.addEventListener('load',dibujar)
                },1000)
            }
                

            function dibujar(){
                ctx0.clearRect(0,0, canvas0.width, canvas0.height)
                ctx1.clearRect(0,0, canvas1.width, canvas0.height)
                ctx2.clearRect(0,0, canvas2.width, canvas0.height)

                ctx0.drawImage(pkmon_strong0,0,0, canvas0.width, canvas0.height)
                
            }
                
                
            document.getElementById('0name').innerHTML = strong[0].name
            document.getElementById('1name').innerHTML = ''
            document.getElementById('2name').innerHTML = ''

            document.getElementById('0type').innerHTML = strong[0].types[0].type.name
            document.getElementById('1type').innerHTML = ''
            document.getElementById('2type').innerHTML = ''
        }
        
        
    }

    if(weak === undefined){
    }
    else if(weak.length === 0){
    }
    else if(weak.length>2){
        const img3 = weak[0].sprites.front_default
        const canvas3 = document.getElementById('3img')
        const ctx3 = canvas3.getContext("2d")

        const img4 = weak[1].sprites.front_default
        const canvas4 = document.getElementById('4img')
        const ctx4 = canvas4.getContext("2d")

        const img5 = weak[2].sprites.front_default
        const canvas5 = document.getElementById('5img')
        const ctx5 = canvas5.getContext("2d")

        if(img3 & img4 & img5 === undefined){
        }
        else{
            //Creating new Image Object
            const pkmon_weak0 = new Image()
            pkmon_weak0.setAttribute('src',img3)
            if(pkmon_weak0.complete === true){
                pkmon_weak0.addEventListener('load',dibujar)
            }else{
                setTimeout(()=>{
                    pkmon_weak0.setAttribute('src',img3)
                    pkmon_weak0.addEventListener('load',dibujar)
                },1000)
            }
            

            const pkmon_weak1 = new Image()
            pkmon_weak1.setAttribute('src',img4)
            if(pkmon_weak1.complete === true){
                pkmon_weak1.addEventListener('load',dibujar)
            }else{
                setTimeout(()=>{
                    pkmon_weak1.setAttribute('src',img4)
                    pkmon_weak1.addEventListener('load',dibujar)
                },1000)
            }
            

            const pkmon_weak2 = new Image()
            pkmon_weak2.setAttribute('src',img5)
            if(pkmon_weak2.complete === true){
                pkmon_weak2.addEventListener('load',dibujar)
            }else{
                setTimeout(()=>{
                    pkmon_weak2.setAttribute('src',img5)
                    pkmon_weak2.addEventListener('load',dibujar)
                },1000)
            }
            

            function dibujar(){
                ctx3.clearRect(0,0, canvas3.width, canvas3.height)
                ctx4.clearRect(0,0, canvas4.width, canvas4.height)
                ctx5.clearRect(0,0, canvas5.width, canvas5.height)
            
                ctx3.drawImage(pkmon_weak0,0,0, canvas3.width, canvas3.height)
                ctx4.drawImage(pkmon_weak1,0,0, canvas4.width, canvas4.height)
                ctx5.drawImage(pkmon_weak2,0,0, canvas5.width, canvas5.height)
            }
                
                
            document.getElementById('3name').innerHTML = weak[0].name
            document.getElementById('4name').innerHTML = weak[1].name
            document.getElementById('5name').innerHTML = weak[2].name

            document.getElementById('3type').innerHTML = weak[0].types[0].type.name
            document.getElementById('4type').innerHTML = weak[1].types[0].type.name
            document.getElementById('5type').innerHTML = weak[2].types[0].type.name
        }
        
    }
    else if(strong.length === 2){
        const img3 = weak[0].sprites.front_default
        const canvas3 = document.getElementById('3img')
        const ctx3 = canvas3.getContext("2d")

        const img4 = strong[1].sprites.front_default
        const canvas4 = document.getElementById('4img')
        const ctx4 = canvas4.getContext("2d")

        const canvas5 = document.getElementById('5img')
        const ctx5 = canvas5.getContext("2d")

        if(img3 & img4 === undefined){
        }
        else{
            //Creating new Image Object
            const pkmon_weak0 = new Image()
            pkmon_weak0.setAttribute('src',img3)
            if(pkmon_weak0.complete === true){
                pkmon_weak0.addEventListener('load',dibujar)
            }else{
                setTimeout(()=>{
                    pkmon_weak0.setAttribute('src',img3)
                    pkmon_weak0.addEventListener('load',dibujar)
                },1000)
            }
            

            const pkmon_weak1 = new Image()
            pkmon_weak1.setAttribute('src',img4)
            if(pkmon_weak1.complete === true){
                pkmon_weak1.addEventListener('load',dibujar)
            }else{
                setTimeout(()=>{
                    pkmon_weak1.setAttribute('src',img4)
                    pkmon_weak1.addEventListener('load',dibujar)
                },1000)
            }

                

            function dibujar(){
                ctx3.clearRect(0,0, canvas3.width, canvas3.height)
                ctx4.clearRect(0,0, canvas4.width, canvas4.height)
                ctx5.clearRect(0,0, canvas5.width, canvas5.height)    
            
                ctx3.drawImage(pkmon_weak0,0,0, canvas3.width, canvas3.height)
                ctx4.drawImage(pkmon_weak1,0,0, canvas4.width, canvas4.height)
                    
                    
                    
            }
                
                
            document.getElementById('3name').innerHTML = weak[0].name
            document.getElementById('4name').innerHTML = weak[1].name
            document.getElementById('5name').innerHTML = ''

            document.getElementById('3type').innerHTML = weak[0].types[0].type.name
            document.getElementById('4type').innerHTML = weak[1].types[0].type.name
            document.getElementById('5type').innerHTML = ''
        }
        
    }
    else{
        const img3 = weak[0].sprites.front_default
        const canvas3 = document.getElementById('3img')
        const ctx3 = canvas3.getContext("2d")

        const canvas4 = document.getElementById('4img')
        const ctx4 = canvas4.getContext("2d")

        const canvas5 = document.getElementById('5img')
        const ctx5 = canvas5.getContext("2d")

        if(img3 === undefined){
        }
        else{
            //Creating new Image Object
            const pkmon_weak0 = new Image()
            pkmon_weak0.setAttribute('src',img3)
            if(pkmon_weak0.complete === true){
                pkmon_weak0.addEventListener('load',dibujar)
            }else{
                setTimeout(()=>{
                    pkmon_weak0.setAttribute('src',img3)
                    pkmon_weak0.addEventListener('load',dibujar)
                },1000)
            }
            
            function dibujar(){
                ctx3.clearRect(0,0, canvas3.width, canvas3.height)
                ctx4.clearRect(0,0, canvas4.width, canvas4.height)
                ctx5.clearRect(0,0, canvas5.width, canvas5.height)

                ctx3.drawImage(pkmon_weak0,0,0, canvas3.width, canvas3.height)
                
            }
                
                
            document.getElementById('3name').innerHTML = weak[0].name
            document.getElementById('4name').innerHTML = ''
            document.getElementById('5name').innerHTML = ''

            document.getElementById('3type').innerHTML = weak[0].types[0].type.name
            document.getElementById('4type').innerHTML = ''
            document.getElementById('5type').innerHTML = ''
        }
        
    }
        

    return(
        <div>
            <h1>Strong Against</h1>
            <div className= 'strong_container'>
                <div className='poke_strong_card'>
                    <div className= 'poke_strong_name' id='0type'></div>
                    <canvas className='poke_strong_img' id='0img'></canvas>
                    <div className= 'poke_strong_name' id='0name'></div>
                </div>
                <div className='poke_strong_card'>
                    <div className= 'poke_strong_name' id='1type'></div>
                    <canvas className='poke_strong_img' id='1img'></canvas>
                    <div className= 'poke_strong_name' id='1name'></div>
                </div>
                <div className='poke_strong_card'>
                    <div className= 'poke_strong_name' id='2type'></div>
                    <canvas className='poke_strong_img' id='2img'></canvas>
                    <div className= 'poke_strong_name' id='2name'></div>
                </div>
            </div>

            <h1>Weak Against</h1>
            <div className= 'strong_container'>
                <div className='poke_strong_card'>
                    <div className= 'poke_strong_name' id='3type'></div>
                    <canvas className='poke_strong_img' id='3img'></canvas>
                    <div className= 'poke_strong_name' id='3name'></div>
                </div>
                <div className='poke_strong_card'>
                    <div className= 'poke_strong_name' id='4type'></div>
                    <canvas className='poke_strong_img' id='4img'></canvas>
                    <div className= 'poke_strong_name' id='4name'></div>
                </div>
                <div className='poke_strong_card'>
                    <div className= 'poke_strong_name' id='5type'></div>
                    <canvas className='poke_strong_img' id='5img'></canvas>
                    <div className= 'poke_strong_name' id='5name'></div>
                </div>
            </div>
            
        
        </div>
    )
}

export default PokeCounter