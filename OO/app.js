/**
 * Oriented Object Programing ou OOP
 * Um paradigma de desenvolvimento
 * Uma maneira de resolver um problema, um modo de pensar
 * Não está ligado somente á linguagem de programação, mas a um entendimento amplo
 * e atemporal para criação de softwares
 * 
 * Todo Objeto possui
 * - Propriedades e Funcionalidades
 * - Estado e Comportamentos
 * - Atributos e Métodos
*/

/**
 * Classes
 * As classes na OOP funcionam como um molde para os objetos.
 * Os Objetos são criados a partir de uma classe e muitos deles podem
 * ser feitod da mesma classe.
 * Ex: Máquina de Biscoito
 * - Instâncias
 * A máquina é a classe o biscoito o objeto.
 * 
*/

/**
 * Encapsulamento
 * Dirigir carro vs conhecer o motor do carro
 * Conceitos:
 * - Colocar numa cápsula
 * - Agrupamento de funções e variáveis
 * - Esconder detalhes de implementação
 * - Camada de segurança para os atributos e métodos
*/
// Ex:
// Estrutural
let altura = 50
let largura = 60

function calculadoraArea() {
  return altura * largura
}
let area = calculadoraArea()

// OOP
class Poligono {
  constructor(altura, largura) {
    this.altura = altura
    this.largura = largura
  }
  get area() {
    return this.#calculaArea()
  }
  #calculaArea() {
    return this.altura * this.largura
  }
}
// Criando o Poligno
let poligno = new Poligono(50, 60)

/**
 * Herança
 * - Pais e Filhos
 * - Objetos podem herdar, ou estender, caraterísticas bases
 * - Uma cópia de atributos e métodos de outra classe
*/
