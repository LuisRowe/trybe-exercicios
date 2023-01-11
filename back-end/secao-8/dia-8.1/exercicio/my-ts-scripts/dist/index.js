"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const length = __importStar(require("./length"));
const mass = __importStar(require("./mass"));
const readlineSync = require('readline-sync');
const method = readlineSync.question('Escolha um dos métodos abaixo para conversão digitando seu número:\n1 - Comprimento(m)\n2 - Peso(g)\n3 - Capacidade(l)');
const valor = readlineSync.question('Qual o valor?\n');
const from = readlineSync.question('Qual a unidade atual?\n');
const to = readlineSync.question('Para qual unidade deseja atualizar?\n');
switch (Number(method)) {
    case 1:
        console.log(length.convert(valor, from, to));
        break;
    case 2:
        console.log(mass.convert(valor, from, to));
        break;
    default:
        console.log('Método inválido');
        break;
}
// console.log("Conversão de valor de distância:");
// console.log(length.convert(5, 'km', 'cm'));
// console.log(length.convert(89000, 'm', 'dam'));
// console.log(length.convert(89000, 'm', 'hm'));
// console.log(length.convert(89000, 'm', 'km'));
// console.log("Conversão de valor de peso:");
// console.log(mass.convert(15, 'kg', 'g'));
// console.log(mass.convert(1300, 'g', 'dag'));
// console.log(mass.convert(1300, 'g', 'hg'));
// console.log(mass.convert(1300, 'g', 'kg'));
// console.log("Conversão de valor de capacidade:");
// console.log(capacity.convert(2, 'l', 'ml'));
// console.log(capacity.convert(1300, 'l', 'dal'));
// console.log(capacity.convert(1300, 'l', 'dl'));
// console.log(capacity.convert(1300, 'l', 'kl'));
// console.log("Conversão de valor de area:");
// console.log(area.convert(2, 'km²', 'm²'));
// console.log(area.convert(1300, 'm²', 'dam²'));
// console.log(area.convert(1300, 'm²', 'dm²'));
// console.log(area.convert(1300, 'm²', 'km²'));
// console.log("Conversão de valor de volume:");
// console.log(volume.convert(2, 'km³', 'm³'));
// console.log(volume.convert(1300, 'm³', 'dam³'));
// console.log(volume.convert(1300, 'm³', 'dm³'));
// console.log(volume.convert(1300, 'm³', 'km³'));
