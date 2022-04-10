/**
 * Functions
 * 
*/

function createPhrases() {
  console.log('Estudar é muito bom!!!')
}

createPhrases();


/**
 * Argumentos e Parametros
 * 
 * parametros vai na function
 * argumentos, vai na execução da function
*/

// Function expression || function anonymous
const sum = function(number1, number2) {
  return number1 + number2 
}
sum(2, 3) // 5



/**
 * function scope
*/

let subject = 'create video'
function creatThink(subject) {
  subject = 'study'
  return subject
}

creatThink(subject)

// arrow function
const sayMyName = (name) => {
  console.log(nome)
}
sayMyName("Eduardo")

// callback function, callback = chamar de volta...
// calback é uma função que está passando por parametro outra função
function sayMyName (name) {
  console.log(nome)
}
sayMyName(
  () => {
    console.log('estou em uma callback')
  }
)

// Função construtora
function Person(name) {
  this.name = name
}
const Edu = new Person() // Edu vai ter uma propriedade name.

