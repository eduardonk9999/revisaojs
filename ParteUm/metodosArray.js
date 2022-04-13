let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")
// adcionar no começo
techs.unshift("sql")
// remover do fim
techs.pop()
// remover do começo
techs.shift()
// pegar somente alguns elementos do array
// remover 1 ou mais itens em qualquer posição do array
techs.splice(1, 3)
// encontrar a posição de um elemento no array
let positionTechs = techs.indexOf('css')
techs.splice(positionTechs, 1)

