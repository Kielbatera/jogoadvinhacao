//variáveis

var User_guess = (window.document.getElementById('trial'))
var computerAnswer = Math.round(Math.random() * 10)
var screen2 = window.document.querySelector(".screen2")
let valores = []

// verificando input do usuário

function isNum(n) {
  if (Number(n) < 0 || Number(n) > 10 || n == '') {
    return false
  } else {
    return true
  }
}

/* função que vai verificar igualdade do numero randomico com
o input do usuário */
function guess(n,l) {
  if (n == l) {
    return true
  } else {
    return false
  }
}

//A logica

function verify() {
  if (!isNum(User_guess.value)) {
    alert('Invalid number!')
  } else {
    if (!guess(User_guess.value, computerAnswer)) {
      screen2.innerHTML = `Wrong! Try again!`
      valores.push(User_guess.value)
    } 
    else {
      document.querySelector(".screen1").classList.add("hide")
      document.querySelector(".screen2").classList.remove("hide")
      screen2.innerHTML = `You got it right after your 
      <strong><span>${valores.length + 1}th</span></strong> trial!`
    }
  }
}
  
