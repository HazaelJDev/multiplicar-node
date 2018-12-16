//requiereds
const fs = require('fs');
const colors = require('colors/safe');

let listarTabla = async (base,limite) => {
    if (!Number(base)) {
        throw new Error('¡Base no es un numero!');
    }
    let data = `\tTabla del ${base} \n\t(del 1 al ${limite})\n`;
    data += '#########################\n'
    for (let i = 1; i <= limite; i++) {
        data += `#\t${base} * ${i} = ${base * i}\t#\n`;
    }
    data += '#########################\n'
    return data;
};

let crearArchivo = async (base,limite) => {
    if (!Number(base)) {
        throw new Error('¡Base no es un numero!');
    }
    let data = `\tTabla del ${base} \n\t(del 1 al ${limite})\n`;
    data += '#################\n'
    for (let i = 1; i <= limite; i++) {
        data += `#\t${base} * ${i} = ${base * i}\t#\n`;
    }
    data += '#################\n'
    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err) {
            throw new Error('El archivo no se pudo crear');
        }
    });
    return `¡El archivo ${colors.blue(`tabla-${base}.txt`)} fue creado con exito!`;
};

module.exports = {
    crearArchivo,
    listarTabla
};