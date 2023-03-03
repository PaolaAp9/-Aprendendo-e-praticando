const chalk = require('chalk');
const fs = require('fs');
function trataErro(erro){
    throw new Error(chalk.red.bold(erro.code,'- Não encontramos o Arquivo'))
}
function pegaArquivo(caminhoDoArquivo) {
	const enconding = 'utf-8'
    fs.promises
	.readFile(caminhoDoArquivo,enconding)
    .then((texto)=> console.log(chalk.green(texto))) 
    //ler o texto - se encontrar o erro - vai para catch
    .catch((erro)=> trataErro(erro)) 
   //Soltar o erro -
    
	}
pegaArquivo('./arquivos/texto1.md');
