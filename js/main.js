// como el primer elemento es preseleccionado guardamos su valor al pricipio
if (!localStorage.getItem('firstChoice')) {
    localStorage.setItem('firstChoice', '2A16')
}

if (!localStorage.getItem('secondChoice')) {
    localStorage.setItem('secondChoice', '1')
}

const buttonOne = document.querySelector('#firstBtn')
if (buttonOne) {
    buttonOne.onclick = function () {
        localStorage.setItem('firstChoice', firstChoice)
    }
}

const buttonTwo = document.querySelector('#secondBtn')
if (buttonTwo) {
    buttonTwo.onclick = function () {
        localStorage.setItem('secondChoice', secondChoice)
    }
}

const handleFirstInput =  document.querySelectorAll('.firstChoice')

let firstChoice = ''
handleFirstInput.forEach(input => {
    input.addEventListener('click', (event) => {
        document.getElementsByClassName('option-container-selected')[0]?.classList
        .remove('option-container-selected')
        event.target.parentElement.parentElement.classList.add('option-container-selected')
        firstChoice = event.path[0].value
    })
})

const handleSecondInput =  document.querySelectorAll('.secondChoice')

let secondChoice = ''
handleSecondInput.forEach(input => {
    input.addEventListener('click', (event) => {
        document.getElementsByClassName('option-container-selected')[0]?.classList
        .remove('option-container-selected')
        event.target.parentElement.parentElement.classList.add('option-container-selected')
        secondChoice = event.path[0].value
    })
})

let discountCode = document.querySelector('#discount-code')

if (discountCode) {
    let data1 = localStorage.getItem('firstChoice')
    let data2 = localStorage.getItem('secondChoice')
    let data = `${data1}${data2}`
    discountCode.style.fontSize = "x-large";
    discountCode.style.color = "black";
    discountCode.style.paddingLeft = "10px";
    discountCode.append(data)
}




// portapapeles

function copiarAlPortapapeles(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }
   
  
  let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')


window.onload = updateClock
let totalTime = 1200

function updateClock() {
    let min = Math.trunc(totalTime / 60)
    let sec = totalTime - min * 60
    
    if (minutes) {
        min > 9 ? minutes.innerHTML = min : minutes.innerHTML =`0${min}`
    }

    if (seconds) {
        sec > 9 ? seconds.innerHTML = sec : seconds.innerHTML =`0${sec}`
    }

    if (totalTime === 0 ) {
        minutes.innerHTML = 'Código caducado.'
        let finalScreen = document.querySelector('#final-screen')
        finalScreen.classList.remove('countdown')
        finalScreen.classList.add('countdown-finished')
        const button = document.createElement('button')
        button.type = 'button'; 
        seconds.innerText = ''
        document.querySelector('#colon').innerText = ''
    }else {
        totalTime-=1
    setTimeout("updateClock()",1000)
  }
}
