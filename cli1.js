const chalk = require('chalk')
const pegaArquivo = require('./7semlink')
const validaUrls = require('./http-validacao')

const caminho = process.argv;

/*async function processaTexto(caminhoDoArquivo){
    const resultado = await pegaArquivo(caminhoDoArquivo[2])
    console.log(chalk.blueBright('Lista de Links'),resultado)
}
processaTexto(caminho)  */

async function processaTexto(caminhoDoArquivo){
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);
    if(caminho[3] === 'validar') {
        console.log(chalk.yellow('Link Validados'), await validaUrls
        (resultado))
    }else{
        console.log(chalk.yellow('Lista de links'),resultado)
    }
}
processaTexto(caminho);