import {soma, sub, divisao, multi} from "./index.js";


//TESTE DE SOMA
console.log("Teste da função soma")
if (soma(2, 2) === 4) console.log("Pasosu 1º!")
    else console.log("Falhou 1º");

if (soma(-1, 2) === 1) console.log("Passou 2º!")
    else console.log("Falhou 2º");

if (soma(2, 0) === 2) console.log("Passou 3º!")
    else console.log("Falhou 3º!");


//TESTE DE SUBTRAÇÃO
console.log("Teste da função subtração()");
if (sub(-1, 2) === -3) console.log("Passou 1º!")
    else console.log("Falhou 1º");

if (sub(2, 0) === 2) console.log("Passou 2º!")
    else console.log("Falhou 2º!");


//TESTE DE DIVISÃO
console.log("Teste da função divisão");
if (divisao(4, 2) === 2) console.log("Passou 1º!")
    else console.log("Falhou 1º");

if (divisao(4, -2) === -2) console.log("Passou 2º!")
    else console.log("Falhou 2º!");

if (divisao(4, 0) === undefined) console.log("Passou 3º!")
    else console.log("Falhou 3º!");


//TESTE DE MULTIPLICAÇÃO
console.log("Teste da função multiplicação");
if (multi(4, 2) === 8) console.log("Passou 1º!")
    else console.log("Falhou 1º");

if (multi(10, 5) === 50) console.log("Passou 2º!")
    else console.log("Falhou 2º!");