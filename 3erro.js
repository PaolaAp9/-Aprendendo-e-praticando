const chalk = require('chalk');
const fs = require('fs');
function trataErro(erro){
    throw new Error(chalk.red.bold(erro.code,'- Não encontramos o Arquivo'))
}
function pegaArquivo(caminhoDoArquivo) {
	const enconding = 'utf-8'
	fs.readFile(caminhoDoArquivo,enconding,(erro,texto)=>{
        if(erro){
            trataErro(erro)
        }
		console.log(chalk.green(texto));
	})
}
pegaArquivo('./arquivos/');
