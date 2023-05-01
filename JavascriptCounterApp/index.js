const display = document.getElementById('count')
const incrementButton = document.getElementById('incrementButton')
const decrementButton = document.getElementById('decrementButton')
let count = Number.parseInt(display.innerHTML)

incrementButton.addEventListener('click', (e)=>{
    e.preventDefault()
    count += 1
    display.innerHTML = count
})

decrementButton.addEventListener('click',(e)=>{
    e.preventDefault()
    count -= 1
    display.innerHTML = count
})