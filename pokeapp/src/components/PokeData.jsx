import React, { useState, useEffect } from 'react';
import PokeCounter from './PokeCounter'
import PokeDex from './PokeDex';

class PokeData extends React.Component {
    state = {
        id: 6,
        back:[],
        back1: [],
        back2: [],
        back3: []
    }
    
    async componentDidMount(){
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.id}/`);
        let data = await res.json();
        this.setState({
            back: data
        })

        let type_url = data.types[0].type.url
        let f1 = await fetch(type_url)
        let resp = await f1.json();
        
        //Array de Strong vs
        let doble_damage_to = resp.damage_relations.double_damage_to.map(value=> [value.name, value.url])
        let final = []

        


        if(doble_damage_to.length>2){

            const response1 = await fetch(doble_damage_to[0][1])
            const pokemon1 = await response1.json()
    
            const response2 = await fetch(doble_damage_to[1][1])
            const pokemon2 = await response2.json()
    
            const response3 = await fetch(doble_damage_to[2][1])
            const pokemon3 = await response3.json()

            const final = [pokemon1,pokemon2,pokemon3]

            this.setState({
                back1: final
            })
            
            let type_names_length1 = final[0].pokemon.length
            let type_names_length2 = final[1].pokemon.length
            let type_names_length3 = final[2].pokemon.length
            
        
            let random1= Math.floor(Math.random()*type_names_length1)
            let random2= Math.floor(Math.random()*type_names_length2)
            let random3= Math.floor(Math.random()*type_names_length3)
            

            let poke0= final[0].pokemon[random1].pokemon
            let poke1 = final[1].pokemon[random2].pokemon
            let poke2 = final[2].pokemon[random3].pokemon
            
        

            const response01 = await fetch(poke0.url)
            const pokemon01 = await response01.json()

            const response02 = await fetch(poke1.url)
            const pokemon02 = await response02.json()

            const response03 = await fetch(poke2.url)
            const pokemon03 = await response03.json()


            this.setState({
                back2: [pokemon01, pokemon02, pokemon03]
            })

    
    
        }else{
            const response1 = await fetch(doble_damage_to[0][1])
            const pokemon1 = await response1.json()
    
            const response2 = await fetch(doble_damage_to[1][1])
            const pokemon2 = await response2.json()
    
            
    
            const final = [pokemon1,pokemon2]
            this.setState({
                back1: final
            })
            
            let type_names_length1 = final[0].pokemon.length
            let type_names_length2 = final[1].pokemon.length
            
        
            let random1= Math.floor(Math.random()*type_names_length1)
            let random2= Math.floor(Math.random()*type_names_length2)
            

            let poke0= final[0].pokemon[random1].pokemon
            let poke1 = final[1].pokemon[random2].pokemon

            const response4 = await fetch(poke0.url)
            const pokemon4 = await response4.json()

            const response5 = await fetch(poke1.url)
            const pokemon5 = await response5.json()
            this.setState({
                back2: [pokemon4, pokemon5]
            })
            
        }

        //Array de Weak vs
        let doble_damage_from = resp.damage_relations.double_damage_from.map(value=> [value.name, value.url])
        let final1 = []

        if (doble_damage_from.length>2){
            const response4 = await fetch(doble_damage_from[0][1])
            const pokemon4 = await response4.json()
        
            const response5 = await fetch(doble_damage_from[1][1])
            const pokemon5 = await response5.json()
        
            const response6 = await fetch(doble_damage_from[2][1])
            const pokemon6 = await response6.json()

            const final1 = [pokemon4,pokemon5,pokemon6]

            let type_names_length4 = final1[0].pokemon.length
            let type_names_length5 = final1[1].pokemon.length
            let type_names_length6 = final1[2].pokemon.length

            let random4= Math.floor(Math.random()*type_names_length4)
            let random5= Math.floor(Math.random()*type_names_length5)
            let random6= Math.floor(Math.random()*type_names_length6)

            let poke4= final1[0].pokemon[random4].pokemon
            let poke5 = final1[1].pokemon[random5].pokemon
            let poke6 = final1[2].pokemon[random6].pokemon

            const response04 = await fetch(poke4.url)
            const pokemon04 = await response04.json()

            const response05 = await fetch(poke5.url)
            const pokemon05 = await response05.json()

            const response06 = await fetch(poke6.url)
            const pokemon06 = await response06.json()

            this.setState({
                back3: [pokemon04, pokemon05, pokemon06]
            })
        }
        else{
            const response4 = await fetch(doble_damage_from[0][1])
            const pokemon4 = await response4.json()
        
            const response5 = await fetch(doble_damage_from[1][1])
            const pokemon5 = await response5.json()

            const final1 = [pokemon4,pokemon5]

            let type_names_length4 = final1[0].pokemon.length
            let type_names_length5 = final1[1].pokemon.length

            let random4= Math.floor(Math.random()*type_names_length4)
            let random5= Math.floor(Math.random()*type_names_length5)

            let poke4= final1[0].pokemon[random4].pokemon
            let poke5 = final1[1].pokemon[random5].pokemon

            const response04 = await fetch(poke4.url)
            const pokemon04 = await response04.json()

            const response05 = await fetch(poke5.url)
            const pokemon05 = await response05.json()

        }
        


    }

    async pokecall(id){
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        let data = await res.json();
        this.setState({
            back: data
        })

        let type_url = data.types[0].type.url
        let f1 = await fetch(type_url)
        let resp = await f1.json();

        //Strong vs
        let doble_damage_to = resp.damage_relations.double_damage_to.map(value=> [value.name, value.url])
        let final = []

        if(doble_damage_to.length>2){

            const response1 = await fetch(doble_damage_to[0][1])
            const pokemon1 = await response1.json()
    
            const response2 = await fetch(doble_damage_to[1][1])
            const pokemon2 = await response2.json()
    
            const response3 = await fetch(doble_damage_to[2][1])
            const pokemon3 = await response3.json()
    
            const final = [pokemon1,pokemon2,pokemon3]
            this.setState({
                back1: final
            })
            
            let type_names_length1 = final[0].pokemon.length
            let type_names_length2 = final[1].pokemon.length
            let type_names_length3 = final[2].pokemon.length
        
            let random1= Math.floor(Math.random()*type_names_length1)
            let random2= Math.floor(Math.random()*type_names_length2)
            let random3= Math.floor(Math.random()*type_names_length3)

            let poke0= final[0].pokemon[random1].pokemon
            let poke1 = final[1].pokemon[random2].pokemon
            let poke2 = final[2].pokemon[random3].pokemon
        

            const response4 = await fetch(poke0.url)
            const pokemon4 = await response4.json()

            const response5 = await fetch(poke1.url)
            const pokemon5 = await response5.json()

            const response6 = await fetch(poke2.url)
            const pokemon6 = await response6.json()

            this.setState({
                back2: [pokemon4, pokemon5, pokemon6]
            })

            
    
        }else if(doble_damage_to.length === 2){
            const response1 = await fetch(doble_damage_to[0][1])
            const pokemon1 = await response1.json()
    
            const response2 = await fetch(doble_damage_to[1][1])
            const pokemon2 = await response2.json()

            const final = [pokemon1,pokemon2]
            this.setState({
                back1: final
            })
            
            let type_names_length1 = final[0].pokemon.length
            let type_names_length2 = final[1].pokemon.length
            
        
            let random1= Math.floor(Math.random()*type_names_length1)
            let random2= Math.floor(Math.random()*type_names_length2)
            

            let poke0= final[0].pokemon[random1].pokemon
            let poke1 = final[1].pokemon[random2].pokemon
         
            const response4 = await fetch(poke0.url)
            const pokemon4 = await response4.json()

            const response5 = await fetch(poke1.url)
            const pokemon5 = await response5.json()

            this.setState({
                back2: [pokemon4, pokemon5]
            })
            
            
        }
        else if(doble_damage_to.length === 1){
            const response1 = await fetch(doble_damage_to[0][1])
            const pokemon1 = await response1.json()

            const final = [pokemon1]
            this.setState({
                back1: final
            })
            
            let type_names_length1 = final[0].pokemon.length
            let random1= Math.floor(Math.random()*type_names_length1)
            
            let poke0= final[0].pokemon[random1].pokemon

            

            const response4 = await fetch(poke0.url)
            const pokemon4 = await response4.json()

        
            this.setState({
                back2: [pokemon4]
            })
        }
        else{
            const canvas0 = document.getElementById('0img')
            const ctx0 = canvas0.getContext("2d")

            const canvas1 = document.getElementById('1img')
            const ctx1 = canvas1.getContext("2d")

            const canvas2 = document.getElementById('2img')
            const ctx2 = canvas2.getContext("2d")
            
            function dibujar(){
                ctx0.clearRect(0,0, canvas0.width, canvas0.height)
                ctx1.clearRect(0,0, canvas1.width, canvas1.height)
                ctx2.clearRect(0,0, canvas2.width, canvas2.height)
            }

            document.getElementById('0name').innerHTML = ''
            document.getElementById('1name').innerHTML = ''
            document.getElementById('2name').innerHTML = ''

            dibujar()
        }

        //Weak vs
        let doble_damage_from = resp.damage_relations.double_damage_from.map(value=> [value.name, value.url])
        let final1 = []
        if(doble_damage_from.length>2){
            const response4 = await fetch(doble_damage_from[0][1])
            const pokemon4 = await response4.json()
        
            const response5 = await fetch(doble_damage_from[1][1])
            const pokemon5 = await response5.json()
        
            const response6 = await fetch(doble_damage_from[2][1])
            const pokemon6 = await response6.json()

            const final1 = [pokemon4,pokemon5,pokemon6]

            let type_names_length4 = final1[0].pokemon.length
            let type_names_length5 = final1[1].pokemon.length
            let type_names_length6 = final1[2].pokemon.length

            let random4= Math.floor(Math.random()*type_names_length4)
            let random5= Math.floor(Math.random()*type_names_length5)
            let random6= Math.floor(Math.random()*type_names_length6)

            let poke4= final1[0].pokemon[random4].pokemon
            let poke5 = final1[1].pokemon[random5].pokemon
            let poke6 = final1[2].pokemon[random6].pokemon

            const response04 = await fetch(poke4.url)
            const pokemon04 = await response04.json()

            const response05 = await fetch(poke5.url)
            const pokemon05 = await response05.json()

            const response06 = await fetch(poke6.url)
            const pokemon06 = await response06.json()

            this.setState({
                back3: [pokemon04, pokemon05, pokemon06]
            })

            
    
        }else if(doble_damage_from.length === 2){
            const response4 = await fetch(doble_damage_from[0][1])
            const pokemon4 = await response4.json()
        
            const response5 = await fetch(doble_damage_from[1][1])
            const pokemon5 = await response5.json()
        

            const final1 = [pokemon4,pokemon5]

            let type_names_length4 = final1[0].pokemon.length
            let type_names_length5 = final1[1].pokemon.length
            

            let random4= Math.floor(Math.random()*type_names_length4)
            let random5= Math.floor(Math.random()*type_names_length5)
            

            let poke4= final1[0].pokemon[random4].pokemon
            let poke5 = final1[1].pokemon[random5].pokemon
            

            const response04 = await fetch(poke4.url)
            const pokemon04 = await response04.json()

            const response05 = await fetch(poke5.url)
            const pokemon05 = await response05.json()


            this.setState({
                back3: [pokemon04, pokemon05]
            })
            
            
        }
        else if(doble_damage_from.length === 1){
            const response4 = await fetch(doble_damage_from[0][1])
            const pokemon4 = await response4.json()
        
            

            const final1 = [pokemon4]

            let type_names_length4 = final1[0].pokemon.length
            

            let random4= Math.floor(Math.random()*type_names_length4)
            

            let poke4= final1[0].pokemon[random4].pokemon
            

            const response04 = await fetch(poke4.url)
            const pokemon04 = await response04.json()

            this.setState({
                back3: [pokemon04]
            })
        }
        else{
            const canvas3 = document.getElementById('3img')
            const ctx3 = canvas3.getContext("2d")

            const canvas4 = document.getElementById('1img')
            const ctx4 = canvas4.getContext("2d")

            const canvas5 = document.getElementById('2img')
            const ctx5 = canvas5.getContext("2d")
            
            function dibujar(){
                ctx3.clearRect(0,0, canvas3.width, canvas3.height)
                ctx4.clearRect(0,0, canvas4.width, canvas4.height)
                ctx5.clearRect(0,0, canvas5.width, canvas5.height)
            }

            document.getElementById('3name').innerHTML = ''
            document.getElementById('4name').innerHTML = ''
            document.getElementById('5name').innerHTML = ''

            dibujar()
        }
    }

    handleClick = () => {
        let event = document.getElementById('text_input1').value
        this.setState({
            id: event
        })
        this.pokecall(event)
        
    }


    render(){
        
        const {id} = this.state
        const name = this.state.back.name
        const {back} = this.state
        const {back2} = this.state
        const {back3} = this.state
        
        return(
            <div>
                <div className='input_box'>
                    <input type='text' placeholder= 'Enter pokemon Id' id='text_input1' className='input_text'></input>
                    <button type ='button' onClick = {this.handleClick} className='input_buton'>go!</button>
                </div>
                
                <PokeCounter info = {[back2, back3]}></PokeCounter>
                <PokeDex info= {back}></PokeDex>
            </div>
            
        )
      
    }
    
  }


export default PokeData