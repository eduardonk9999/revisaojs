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

class Veiculo {
  rodas = 4;

  mover(direcao){}
  virar(direcao){}
}
class Moto extends Veiculo {
  constructor() {
    super() // puxa atributos e métodos do pai
    this.rodas = 2
  }
}

/**
 * Polimorfismo
 * Quando um objeto estendo de outro (herança) talves haja
 * a necessidade de reescrever uma ou mais características (atributos e métodos)
 * nesse novo objeto.
 * 
 * Ex -> 
*/

class Atleta {
  peso;
  categoria;
  constructor(peso) {
    this.peso = peso
  }
  definirCategoria() {
    if (this.peso <= 50){
      this.categoria = 'infantil'
    } 
    else if (this.peso <= 65) {
      this.cartegoria = 'juvenil'
    }
    else {
      this.categoria = 'adulto'
    }
  }
}

class Lutador extends Atleta {
  constructor(peso) {
    super(peso)
  }
  definirCategoria(){
    if (this.peso <= 54) {
      this.cartegoria = 'pluma'
    }
    else if (this.peso <= 60) {
      this.categoria = 'leve'
    }
    else if (this.peso <= 75) {
      this.categoria = 'meio-leve'
    }
    else {
      this.categoria = 'pesado'
    }
  }
}

