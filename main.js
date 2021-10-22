let sum ='0'
let input= document.createElement('input')
let All = document.getElementById('all')
let section = document.querySelector('.calc')
input.classList.add('input')
input.value= sum
input.disabled = true
All.append(input)
const div = document.createElement('div')
div.className='inp'
div.append(input) 
All.append(div)

var ReplaceBackground = function() {
    document.body.style.background = 'green';
 }
 
 document.addEventListener("DOMContentLoaded", ReplaceBackground)

let arr =['C', 'AC', '(', ')', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '/', '*', '+', '-', '=', '.']
arr.forEach((el, index)=>{
    let btn = document.createElement('input')
    btn.type = 'button'
    btn.value = el
    btn.setAttribute('onclick', 'getNum(event)')
    const div = document.createElement('div')
    div.className='divforbtn'
    div.append(btn)
    All.append(div)
})


const getNum =(e)=>{
    let num =e.target.value
    if(num == 'C'){
        sum ='0'
    }else if(num =='AC'){
        sum = sum.substr(0, sum.length-1)
    }else if(num == '='){
        sum = eval(sum)
    }
    else{
        if(sum == '0'){
            sum = ''
        }
        sum+=num
    }
    input.value=sum
}
