const chalk = require('chalk');
const fs = require('fs');
function trataErro(erro){
    throw new Error(chalk.red.bold(erro.code,'- Não encontramos o Arquivo'))
}

async function pegaArquivo(caminhoDoArquivo) {
	const enconding = 'utf-8'
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo,enconding)
        console.log(extrailinks(texto))}
        catch(erro){
            trataErro(erro)
        } 
	}
pegaArquivo('./arquivos/texto1.md');

/*function extrailinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const linkExtraidos = texto.match(regex);
    console.log(linkExtraidos);
}
const texto = 'O markdown é uma ferramenta prática para o dia a dia dos devs. Além disso, _deixa os arquivos menores, dificultando a quebra_.  Basicamente, ele marca alterações nos textos **(subtítulos, negrito, itálico, etc)** apenas com os símbolos do teclado, [Markdown: Sintaxe](https://daringfireball.net/projects/markdown/syntax) sem usar teclas de atalho, menus, selecionando o texto e sem aquele visual complexo - para os que não estão acostumados - de HTML. como usar os simbolos em Markdown: com o negrito: adicione dois asteriscos **texto** ou dois traços-baixos __texto__ no início e no fim do conteúdo. Itálico: adicione apenas um asterisco *texto* ou um traço-baixo _texto_ no início e no fim do conteúdo. [Guia básico de Markdown](https://docs.pipz.com/central-de-ajuda/learning-center/guia-basico-de-markdown/#open) '

extrailinks(texto);
*/

function extrailinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
    const arrayResultado = []
    let temp
    while ((temp = regex.exec(texto)) !==null){
        arrayResultado.push({[temp[1]]: temp[2]})
    }
  console.log(arrayResultado)
  //return arrayResultado
  //return arrayResultado.length === 0 ? 'Não há links' : arrayResultado
}

/*const texto = 'O markdown é uma ferramenta prática para o dia a dia dos devs. Além disso, _deixa os arquivos menores, dificultando a quebra_.  Basicamente, ele marca alterações nos textos **(subtítulos, negrito, itálico, etc)** apenas com os símbolos do teclado, [Markdown Sintaxe](https://daringfireball.net/projects/markdown/syntax) sem usar teclas de atalho, menus, selecionando o texto e sem aquele visual complexo - para os que não estão acostumados - de HTML. como usar os simbolos em Markdown: com o negrito: adicione dois asteriscos **texto** ou dois traços-baixos __texto__ no início e no fim do conteúdo. Itálico: adicione apenas um asterisco *texto* ou um traço-baixo _texto_ no início e no fim do conteúdo. [Guia básico de Markdown](https://docs.pipz.com/central-de-ajuda/learning-center/guia-basico-de-markdown/#open) '*/

extrailinks('./arquivos/texto1.md')
//module.exports = pegaArquivo
