async function search_img(data0,data1,data2){
    if(data2 === undefined){
        const response0 = await fetch(data0)
        const pokemon0 = await response0.json()

        const response1 = await fetch(data1)
        const pokemon1 = await response1.json()


        const img0 = pokemon0.sprites.front_default
        const canvas0 = document.getElementById('0img')
        const ctx0 = canvas0.getContext("2d")

        const img1 = pokemon1.sprites.front_default
        const canvas1 = document.getElementById('1img')
        const ctx1 = canvas1.getContext("2d")



        const pkmon_strong0 = new Image()
        pkmon_strong0.setAttribute('src',img0)
        pkmon_strong0.addEventListener('load',dibujar1)
        
        const pkmon_strong1 = new Image()
        pkmon_strong1.setAttribute('src',img1)
        pkmon_strong1.addEventListener('load',dibujar1)


        function dibujar1(){
            ctx0.clearRect(0,0, canvas0.width, canvas0.height)
            ctx1.clearRect(0,0, canvas1.width, canvas1.height)
            
    
            ctx0.drawImage(pkmon_strong0,0,0, canvas0.width, canvas0.height)
            ctx1.drawImage(pkmon_strong1,0,0, canvas1.width, canvas1.height)
        }   
        
    }else{
        //Data calling
        console.log(data0)
        console.log(data1)
        console.log(data2)

        const response0 = await fetch(data0)
        const pokemon0 = await response0.json()

        const response1 = await fetch(data1)
        const pokemon1 = await response1.json()

        const response2 = await fetch(data2)
        const pokemon2 = await response2.json()




        //Canvas set
        const img0 = pokemon0.sprites.front_default
        const canvas0 = document.getElementById('0img')
        const ctx0 = canvas0.getContext("2d")

        const img1 = pokemon1.sprites.front_default
        const canvas1 = document.getElementById('1img')
        const ctx1 = canvas1.getContext("2d")

        const img2 = pokemon2.sprites.front_default
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
    }
    

    
    
    
}

export default search_img