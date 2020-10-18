import search_img from "./searchimg"

async function render(data){
    console.log(data)
    if(data.length>2){
        let type_names_length1 = data[0].pokemon.length
        let type_names_length2 = data[1].pokemon.length
        let type_names_length3 = data[2].pokemon.length
    
        let random1= Math.floor(Math.random()*type_names_length1)
        let random2= Math.floor(Math.random()*type_names_length2)
        let random3= Math.floor(Math.random()*type_names_length3)

        let poke0= data[0].pokemon[random1].pokemon
        let poke1 = data[1].pokemon[random2].pokemon
        let poke2 = data[2].pokemon[random3].pokemon
    
        let name0 = poke0.name
        let name1 = poke1.name
        let name2 = poke2.name

        let img0 = search_img(poke0.url, poke1.url, poke2.url)
        
        
        document.getElementById('0name').innerHTML = name0
        document.getElementById('1name').innerHTML = name1
        document.getElementById('2name').innerHTML = name2

        
        

    }else{
        let type_names_length1 = data[0].pokemon.length
        let type_names_length2 = data[1].pokemon.length
        
    
        let random1= Math.floor(Math.random()*type_names_length1)
        let random2= Math.floor(Math.random()*type_names_length2)
        
    
        let name0 = data[0].pokemon[random1].pokemon.name
        let name1 = data[1].pokemon[random2].pokemon.name
        
    
        document.getElementById('0name').innerHTML = name0
        document.getElementById('1name').innerHTML = name1
        
    }
    

}

export default render