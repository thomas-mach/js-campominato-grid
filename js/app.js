const gridElement = document.getElementById('grid')
const playButton = document.getElementById('playButton')
const levelButton1 = document.getElementById('level1')
const levelButton2 = document.getElementById('level2')
const levelButton3 = document.getElementById('level3')
const containerHTML = document.getElementById('container')
const buttonsElement = document.getElementById('buttons')

let size = 0
playButton.remove()

levelButton1.addEventListener('click', function(){
  gridElement.className = 'grid'  
  buttonsElement.append(playButton)
    size = 10 ** 2
    console.log(size)
})

levelButton2.addEventListener('click', function(){
    gridElement.className = 'grid2'  
    buttonsElement.append(playButton)
    size = 9 ** 2
    console.log(size)
})

levelButton3.addEventListener('click', function(){
    gridElement.className = 'grid3'  
    buttonsElement.append(playButton)
    size = 7 ** 2
    console.log(size)
})

playButton.addEventListener('click', function(){
levelButton1.remove()
levelButton2.remove()
levelButton3.remove()   
playButton.remove()


for (let i = 0; i < size; i++){
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
})