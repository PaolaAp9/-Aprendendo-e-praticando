const chalk = require('chalk');
const fs = require('fs');
function pegaArquivo(caminhoDoArquivo) {
	const enconding = 'utf-8'
	fs.readFile(caminhoDoArquivo,enconding,(_,texto)=>{
		console.log(chalk.green(texto));
	})
}
pegaArquivo('./arquivos/texto1.md');
