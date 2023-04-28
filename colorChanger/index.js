const button = document.querySelector('button')
const body = document.querySelector('body')
let colorName = document.createElement('h1')
const colorDisplay = document.getElementById('textDisplay')

colorDisplay.appendChild(colorName)
const colors = ['red', 'green', 'blue', 'purple', 'indigo', 'violet', 'pink']

let index = 0

body.style.backgroundColor = colors[index]
colorName.innerHTML = `DisplayColor: ${colors[index].toUpperCase()}`

button.addEventListener('click', (event) => {
    event.preventDefault()
    index = (index + 1) % colors.length
    body.style.backgroundColor = colors[index]
    colorName.innerHTML = `DisplayColor: ${colors[index].toUpperCase()}`
});
