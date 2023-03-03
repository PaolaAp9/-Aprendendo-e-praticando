const chalk = require('chalk');
const fs = require('fs');

function trataErro(erro){
    throw new Error(chalk.red(erro.code,'- Não encontramos o Arquivo'))
}
//executar todo o texto e depois mostrar
async function pegaArquivo(caminhoDoArquivo) {
	const enconding = 'utf-8'
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo,enconding)
        //console.log(extrailinks(texto))}
        return extrailinks(texto)
    }
        catch(erro){
            trataErro(erro)
        } 
	}
//pegaArquivo('./arquivos/texto1.md');

function extrailinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
    const arrayResultado = []
    let temp
    while ((temp = regex.exec(texto)) !==null){
        arrayResultado.push({[temp[1]]: temp[2]})
    }
  //console.log(arrayResultado)
  //return arrayResultado
  return arrayResultado.length === 0 ? 'Não há links' : arrayResultado
}
module.exports = pegaArquivo



