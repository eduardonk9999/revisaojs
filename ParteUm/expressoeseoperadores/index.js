/**
 * new, serve para criar um objeto
*/
let name = new String('Eduardo')
let age = new Number(23)


// Grouping operator => ()
let total = (2 + 3) + 5

// Operadores de comparação

// == igual a 
let one = 1
let two = 2
console.log(one + two)

// diferente de !=
console.log(one != two)

// === estritamente igual, ele compara o valor e o tipo
console.log(one === two)

// & => True, só se as duas opções forem verdadeiras
// || => True, se um for verdadeiro, false se os dois forem falses
// ! NOT => !true => false

// Controle de Fluxo
let temperature = 36.5
if(temperature >= 37) {
  console.log('Febre 😐')
} else {
  console.log('Está Bem!!!')
}

// Switch
let expression = 'a'
switch (expression) {
  case 'a':
    console.log('a')
    break
  case 'b':
    console.log('b')
    break
  default:
    console.log('default')
    break
}


// throw => Disparar
// catch => Pegar
// try => Tentar

// throw
function sayMyName(name = '') {
  if (name === '') {
    throw 'Nome é obrigatório'
  }
  console.log('depois do erro')
}

//try...catch
try {
  sayMyName()
} catch(e) {
  console.log(e)
}