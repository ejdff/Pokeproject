import React, { useState, useEffect } from 'react';
import PokeCounter from './PokeCounter'
import PokeDex from './PokeDex';

class PokeData extends React.Component {
    state = {
        id: 6,
        back:[],
        back1: [],
        back2: []
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
        
            let name0 = poke0.name
            let name1 = poke1.name
            let name2 = poke2.name

            const response4 = await fetch(poke0.url)
            const pokemon4 = await response4.json()

            const response5 = await fetch(poke1.url)
            const pokemon5 = await response5.json()

            const response6 = await fetch(poke2.url)
            const pokemon6 = await response6.json()

            this.setState({
                back2: [pokemon4, pokemon5, pokemon6]
            })

            console.log(this.back2)
    
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
            
        
            let name0 = poke0.name
            let name1 = poke1.name
            

            const response4 = await fetch(poke0.url)
            const pokemon4 = await response4.json()

            const response5 = await fetch(poke1.url)
            const pokemon5 = await response5.json()
            this.setState({
                back2: [pokemon4, pokemon5]
            })
            
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
        
            let name0 = poke0.name
            let name1 = poke1.name
            let name2 = poke2.name

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
            
        
            let name0 = poke0.name
            let name1 = poke1.name
            

            const response4 = await fetch(poke0.url)
            const pokemon4 = await response4.json()

            const response5 = await fetch(poke1.url)
            const pokemon5 = await response5.json()

            this.setState({
                back2: [pokemon4, pokemon5]
            })
            
            
        }
        else{
            const response1 = await fetch(doble_damage_to[0][1])
            const pokemon1 = await response1.json()

            const final = [pokemon1]
            this.setState({
                back1: final
            })
            
            let type_names_length1 = final[0].pokemon.length
            
            
        
            let random1= Math.floor(Math.random()*type_names_length1)
            
            

            let poke0= final[0].pokemon[random1].pokemon
            
            
        
            let name0 = poke0.name
            
            

            const response4 = await fetch(poke0.url)
            const pokemon4 = await response4.json()

            

            this.setState({
                back2: [pokemon4]
            })
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
        
        return(
            <div>
                <input type='text' placeholder= 'Enter pokemon Id' id='text_input1' className='input_text'></input>
                <button type ='button' onClick = {this.handleClick} className='input_buton'>go!</button>
                <PokeCounter info = {back2}></PokeCounter>
                <PokeDex info= {back}></PokeDex>
            </div>
            
        )
      
    }
    
  }


export default PokeData