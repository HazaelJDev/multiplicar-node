const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const { argv } = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar especificada por el parametro base',opts)
    .command('crear', 'Crea un archivo .txt de la tabla de multiplicar especificada por el parametro base',opts)
    .help();

module.exports = {
    argv
}