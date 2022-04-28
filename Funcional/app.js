/**
 * Programação Funcional?
 * É um paradigma de programação como a OOP, por exemplo.
 * - Uma maneire de resolver problemas.
 * 
 * Funções
 * - Pequenas tarefas dentro de uma função;
 * - Abstrair um problema e isolar ele dentro da função;
 * - Não modificar dados fora dela;
 * - Pequenas e bem específicas no que fazem;
 * 
 * Princípios
 * 
 * PARADIGMAS
 * - Programação Imperativa
 * - Programação Declarativa
 * 
 * DADOS
 * - Imutabilidade
 * - Stateless
 * 
 * FUNÇÕES
 * - Independentes
 * - Puras
 * - Higher-order
 * - First-class
 * - Composição
*/

// Função que eleva o número ao quadrado

// Imperativo: Faça da seguinte forma.
let number = 2
function square() {
  return number * number
}
number = square()

// Declarativa: O que fazer e não como fazer.
const square = n => n * n;

/**
 * Programação imperativa
 * 
 * - O código é pensado e gerado em sequência;
 * - O código é pensado como um passo-a-passo, como uma receita de bolo;
 * - Uma coisa depende da outra;
 * - O estado de um dado é alterado constantemente causando
 * mutações nas variávies;
 * - OOP é um tipo de paradigma imperativo
*/

/**
 * Programação declartiva
 * - O código é gerado para fazer algo, não importa como;
 * - O que fazer e não como fazer;
 * - Não há necessidade de um passo a passo no código;
 * - Programação funcional é um tipo de paradigma declartivo;
 * 
*/

/**
 * Imutabilidade
 * - Uma variável não vai variar;
 * - Se você precisar mudar uma variável, você não muda,
 * você cria uma nova;
*/

const cart = {
  quantity: 2,
  total: 200
}

// BAD 👎
cart.quantity = 3

// GOOD 👍
const newCart = {...cart, quantity: 3}

/**
 * Stateless
 * - Não guarda estado;
 * - A Função só conhece dados entreges a ela;
 * - A resposta não poderá variar;
*/

let number2 = 2

// statefull function
function square() {
  return number2 * number2
}

number2 = square()

// stateless function
const square = n => n * n;

/**
 * Funções independentes
 * - Deverá ter ao menos 1 argumento
 * - Deverá retornar algo
 * - Nada que acontecer lá dentro afeta o mundo externo
 * -- dados imutáveis
 * -- não guardar estado
 * - Não faremos uso de loops (for, while). mas se
 * houver necessidade de tal, usaremos recursos (a função
 * chama ela mesma)
*/

/**
 * Funções Puras
 * - Não deverá depender de nenhum dado externo
 * a não ser o que foi passado como argumento
 * - Não deverá sofrer nenhuma interferência do mundo
 * externo a ela
 * - Se o argumento é o mesmo, o retorno não poderá
 * ser diferente quando a função for chamada novamente.
 * Não terá nenhum efeito colateral no seu código
 * - Não irá modificar nenhum dado.
 * - Não irá guardar nenhum estado.
*/
// Impura
function calculateCircumference(radius) {
  return Math.PI * (radius + radius)
}

// Pura
const calculateCircumference = function (pi, radius) {
  return pi * (radius + radius)
}

/**
 * First-class function
 * - Podem estar em qualquer lugar, inclusive, como
 * parâmetro de outras funções.
 * - A funçao poderá ser entendida como uma variável
*/

const sayMyName = () => console.log('Eduardo')

/**
 * Higher-order function
 * - Funções que recebem funções como argumentos
 * - Funções que poderão retornar outras funções
 * 
*/
// Ex com .map() JS
const numbers = [2, 4, 8, 16]
const square = n => n * n
const squaredNumber = numbers.map(square)
