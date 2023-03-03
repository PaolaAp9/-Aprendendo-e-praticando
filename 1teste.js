//node ./1teste.js (para funcionar)
const chalk = require('chalk')

console.log(chalk.green('Olá pessoal, eu sou verdinho'))
const log = console.log
log(chalk.blue.bgRed.bold("Olá pessoal, eu sou vermelhinho"))
log(chalk.blue('Olá') + ' Mundo' + chalk.red('!'))
log(chalk.blue('Olá', 'Mundo!', 'Buu', 'Bar', 'Bis', 'Brasil'))
log(chalk.red('Olá', chalk.underline.bgBlue('Eu sou Azul') + '!'))
log(chalk.green(
	'Bem-Vindo ' +
	chalk.blue.underline.bold('Olá Mundoooo') +
	' Tudoo Bem!!'
));
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

log(chalk.rgb(123, 45, 67).underline('Olá Mundooo!!'));
log(chalk.hex('#DEADED').bold('Cinza Ousado!'));

const error = chalk.bold.red;
const warning = chalk.keyword('orange');
 
console.log(error('Erro!'));
console.log(warning('Avisoo!'));

const name = 'Paola';
console.log(chalk.green('Olá %s'), name);
//=> 'Olá Paola'


- assincrona 
