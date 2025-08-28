//TESTE DE SOMA
function soma(a, b){
    return a + b;
}


//TESTE DE SUBTRAÇÃO
function sub(a, b){
    return a - b;
}


//TESTE DE DIVISÃO
function divisao(a, b){
    if (b === 0) return undefined;
    return a / b;
}


//TESTE DE MULTIPLICAÇÃO
function multi(a, b){
    return a * b;
}

export {soma, sub, divisao, multi};