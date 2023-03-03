const chalk = require('chalk');
const fs = require('fs');
function trataErro(erro){
    throw new Error(chalk.red.bold(erro.code,'- Não encontramos o Arquivo'))
}

async function pegaArquivo(caminhoDoArquivo) {
	const enconding = 'utf-8'
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo,enconding)
        console.log(chalk.green(texto))}
        catch(erro){
            trataErro(erro)
        } 
	}
pegaArquivo('./arquivos/texto1.md');
