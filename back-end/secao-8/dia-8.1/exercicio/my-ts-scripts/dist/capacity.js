"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const simbols = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
function convert(valor, from, to) {
    const indexFrom = simbols.findIndex((simbol) => from === simbol);
    const indexTo = simbols.findIndex((simbol) => to === simbol);
    const converRate = 10 ** (indexTo - indexFrom);
    const convertedValue = valor * converRate;
    return `${valor}${from} são ${convertedValue}${to}`;
}
exports.convert = convert;
