// Déclaration des Variables

let screen = document.querySelector('.screen_text')
let clear = document.querySelector('.clear')

let bouton = document.getElementsByClassName('btn')

let zero = document.querySelector('.zero')
let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')
let four = document.querySelector('.four')
let five = document.querySelector('.five')
let six = document.querySelector('.six')
let seven = document.querySelector('.seven')
let eight = document.querySelector('.eight')
let nine = document.querySelector('.nine')

let decimals = document.querySelector('.decimals')

let add = document.querySelector('.plus')
let substract = document.querySelector('.minus')
let multiply = document.querySelector('.multiply')
let divide = document.querySelector('.divide')

let equals = document.querySelector('.equals')

let tmp = ''
let tmp2 = []
let tmpOp = ''
let stringParse = 0
let shift0 = 0
let shift1 = 0
let result = 0

// OnClick event pour chaque touche (animation avec box shadow, effet touche enfoncée)

const myClicked = function() {
    for (let i = 0; i < bouton.length; i++) {
        bouton[i].addEventListener('click', function() {
            bouton[i].classList.add('clicked')
             setTimeout(function () {
                 bouton[i].classList.remove('clicked')
             }, 200)
        })
    }
}
myClicked()

// Touche Clear : Reset tout

clear.addEventListener('click', function() {
    tmp = ''
    tmp2 = []
    tmpOp = ''
    stringParse = 0
    shift0 = 0
    shift1 = 0
    result = 0
    return screen.textContent = ''
})

// Touches Numériques : 0-9

zero.addEventListener('click', function() {
    tmp += '0'
    return screen.textContent += 0
})
one.addEventListener('click', function() {
    tmp += '1'
    return screen.textContent += 1
})
two.addEventListener('click', function() {
    tmp += '2'
    return screen.textContent += 2
})
three.addEventListener('click', function() {
    tmp += '3'
    return screen.textContent += 3
})
four.addEventListener('click', function() {
    tmp += '4'
    return screen.textContent += 4
})
five.addEventListener('click', function() {
    tmp += '5'
    return screen.textContent += 5
})
six.addEventListener('click', function() {
    tmp += '6'
    return screen.textContent += 6
})
seven.addEventListener('click', function() {
    tmp += '7'
    return screen.textContent += 7
})
eight.addEventListener('click', function() {
    tmp += '8'
    return screen.textContent += 8
})
nine.addEventListener('click', function() {
    tmp += '9'
    return screen.textContent += 9
})

// Touche décimale (nombres à virgules) : . ( , )

decimals.addEventListener('click', function() {
    tmp += '.'
    return screen.textContent += '.'
})

// Touches Opérateurs : + - * /

add.addEventListener('click', function() {
    if (screen.textContent.indexOf('.') != -1) {
        stringParse = parseFloat(tmp, 10)
    } else {
        stringParse = parseInt(tmp, 10)
    }
    tmp2.push(stringParse)
    tmp = ''
    tmpOp += '+'
    return screen.textContent = ''
})
substract.addEventListener('click', function() {
    if (screen.textContent.length >= 0 && screen.textContent.length < 2) {
        screen.textContent += '-'
        tmp += '-'
    } 
    if (screen.textContent.length >= 2) { 
        if (screen.textContent.indexOf('.') != -1) {
        stringParse = parseFloat(tmp, 10)
    } else {
        stringParse = parseInt(tmp, 10)
        }
        tmp2.push(stringParse)
        tmp = ''
        tmpOp += '-'
        return screen.textContent = ''
    }
})
multiply.addEventListener('click', function() {
    if (screen.textContent.indexOf('.') != -1) {
        stringParse = parseFloat(tmp, 10)
    } else {
        stringParse = parseInt(tmp, 10)
    }
    tmp2.push(stringParse)
    tmp = ''
    tmpOp += '*'
    return screen.textContent = ''
})
divide.addEventListener('click', function() {
    if (screen.textContent.indexOf('.') != -1) {
        stringParse = parseFloat(tmp, 10)
    } else {
        stringParse = parseInt(tmp, 10)
    }
    tmp2.push(stringParse)
    tmp = ''
    tmpOp += '/'
    return screen.textContent = ''
})

// Touche = : Résultat

equals.addEventListener('click', function() {
    if (screen.textContent.indexOf('.') != -1) {
        stringParse = parseFloat(tmp, 10)
    } else {
        stringParse = parseInt(tmp, 10)
    }
    tmp2.push(stringParse)
    tmp = ''
    for (i = 0; i < tmpOp.length; i++) {
        if (tmp2.length >= 2) {
            shift0 = tmp2.shift()
            shift1 = tmp2.shift()
            if (tmpOp[i] === '+') {
                result = shift0 + shift1
                tmp2.unshift(result)
            }
            if (tmpOp[i] === '-') {
                result = shift0 - shift1
                tmp2.unshift(result)
            }
            if (tmpOp[i] === '*') {
                result = shift0 * shift1
                tmp2.unshift(result)
            }
            if (tmpOp[i] === '/') {
                result = shift0 / shift1
                tmp2.unshift(result)
            }
        } if (tmp2.length === 1) {
            result = tmp2.shift()
        } if (tmp2.length === 0) { 
            break
        }
    }
    tmp = result.toString(10)
    tmpOp = ''
    return screen.textContent = result
})