"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const simbols = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];
function convert(valor, from, to) {
    const indexFrom = simbols.findIndex((simbol) => from === simbol);
    const indexTo = simbols.findIndex((simbol) => to === simbol);
    const converRate = 100 ** (indexTo - indexFrom);
    const convertedValue = valor * converRate;
    return `${valor}${from} são ${convertedValue}${to}`;
}
exports.convert = convert;
