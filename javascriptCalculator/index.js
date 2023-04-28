let buttons = document.querySelectorAll('button')
let currOper = document.querySelector('input')
let operatorButtons = document.querySelectorAll('button[value="+"],button[value="-"],button[value="x"],button[value="/"]')
let equalsButton = document.querySelector('button[value="="]')
let firstOper = ''
let operator = ''
let secondOper = ''

buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        if(button.value === 'c'){
            currOper.value = ''
        }else if(button.value === 'del'){
            currOper.value = currOper.value.slice(0, -1)
        }else{
            currOper.value += button.value
        }
    })
})

operatorButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        firstOper = currOper.value
        operator = button.value
    })
})


equalsButton.addEventListener('click', ()=>{
    let result
    let secondOper = currOper.value
    try{
        if(operator === '/' && firstOper !== '' && secondOper !== ''){
            result = Number.parseInt(firstOper) / Number.parseInt(secondOper)
            currOper.value = result
        }else if(operator === 'x' && firstOper !== '' && secondOper !== ''){
            result = Number.parseInt(firstOper) * Number.parseInt(secondOper)
            currOper.value = result
        }else if(operator === '+' && firstOper !== '' && secondOper !== ''){
            result = Number.parseInt(firstOper) + Number.parseInt(secondOper)
            currOper.value = result
        }else if(operator === '-' && firstOper !== '' && secondOper !== ''){
            result = Number.parseInt(firstOper) - Number.parseInt(secondOper)
            currOper.value = result
        }
    }catch(e){
        console.log(e)
        alert('insert valid number')
    }
})
