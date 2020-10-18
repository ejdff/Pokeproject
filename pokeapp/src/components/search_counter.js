async function search_counter(data){
    
    if(data.length>2){

        const response1 = await fetch(data[0][1])
        const pokemon1 = await response1.json()

        const response2 = await fetch(data[1][1])
        const pokemon2 = await response2.json()

        const response3 = await fetch(data[2][1])
        const pokemon3 = await response3.json()

        const final = [pokemon1,pokemon2,pokemon3]
        return final

    }else{
        const response1 = await fetch(data[0][1])
        const pokemon1 = await response1.json()

        const response2 = await fetch(data[1][1])
        const pokemon2 = await response2.json()
        
        const final = [pokemon1,pokemon2]
        return final
    }
    
}

export default search_counter