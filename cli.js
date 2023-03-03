const chalk = require('chalk')
const pegaArquivo = require('./7semlink')

const caminho = process.argv
//console.log(caminho)
console.log(pegaArquivo(caminho[2]))
//retornará uma array com dois caminhos.um binario e o caminho do nosso arquivo

