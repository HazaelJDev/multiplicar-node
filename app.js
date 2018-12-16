const {argv} = require('./config/yargs');
const {crearArchivo} = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors/safe');
/*console.log('Base: '+argv.base);
console.log('Limite: '+argv.limite);*/
let comando = argv._[0]
switch (comando) {
    case 'listar':
        listarTabla(argv.base,argv.limite)
            .then(res => console.log(colors.green(res)))
            .catch(err => console.log(colors.red(err)));
    break;
    case 'crear':
        crearArchivo(argv.base,argv.limite)
            .then(res => console.log(colors.green(res)))
            .catch(err => console.log(colors.red(err)));
    break;
    default:
        console.log(colors.red(`¡Comando no reconocido: ${comando}!`));
    break;
}

/*let base = process.argv[2].split('=')[1];*/

