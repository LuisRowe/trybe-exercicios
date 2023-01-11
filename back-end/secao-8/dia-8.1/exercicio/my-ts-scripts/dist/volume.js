"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const simbols = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
function convert(valor, from, to) {
    const indexFrom = simbols.findIndex((simbol) => from === simbol);
    const indexTo = simbols.findIndex((simbol) => to === simbol);
    const converRate = 1000 ** (indexTo - indexFrom);
    const convertedValue = valor * converRate;
    return `${valor}${from} são ${convertedValue}${to}`;
}
exports.convert = convert;
