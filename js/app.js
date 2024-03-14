const gridElement = document.getElementById('grid')
const playButton = document.getElementById('playButton')
const containerHTML = document.getElementById('container')
const levelsEl = document.getElementById('levels')

    function getSize(){
       let level = levelsEl.value
       let size = 10
       gridElement.className = 'grid'  
       if (level === 'medium'){
        gridElement.className = 'grid2'  
           size = 9
        } else if (level === 'hard'){
            gridElement.className = 'grid3'  
           size = 7 
        }
    return size
    }
    
    function startGame(){
    
        gridElement.innerHTML = ''
        let size = getSize()
        cells = size ** 2
        console.log(cells)
    
        for (let i = 0; i < cells; i++){
            let position = i + 1
            const newDiv = document.createElement('div')
            newDiv.className = 'cell'
            newDiv.innerHTML = position
            gridElement.append(newDiv)
            
            newDiv.addEventListener('click', function(){
            newDiv.classList.toggle('bg-color')
            console.log(position)
        })
    }
    }

    playButton.addEventListener('click', startGame)
    
    


