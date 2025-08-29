const calculadora = require('../src/index.js');

describe("Teste da calcularoda", () => { 

//SOMA
test("2 + 2 = 4", () => {
    expect(calculadora.soma).toBeDefined();
    expect(calculadora.soma(2, 2)).toBe(4);
});

test("2 + 0 = 2", () => {
    expect(calculadora.soma(2, 0)).toBe(2);
});

test("-2 + -2 = -4", () => {
    expect(calculadora.soma(-2, -2)).toBe(-4);
});


//SUBTRAÇÃO
test("5 - 10 = -5", () => {
    expect(calculadora.sub(5, 10)).toBe(-5);
});

test("8 - 10 = -2", () => {
    expect(calculadora.sub(8, 10)).toBe(-2);
});

test("se a >= b então a - b >= 0", function (){
    expect(calculadora.sub).toBeDefined();
    expect(calculadora.sub(2, 2)).toBeGreaterThanOrEqual(0);
    expect(calculadora.sub(2, -2)).toBeGreaterThanOrEqual(0);
    expect(calculadora.sub(-2, -4)).toBeGreaterThanOrEqual(0);
});


//MULTIPLICAÇÃO
test("5 x 10 = 50", () => {
    expect(calculadora.multi(5, 10)).toBe(50);
});

test("6 x 6 = 36", () => {
    expect(calculadora.multi(6, 6)).toBe(36);
});
test("2 x 0 = 0", () => {
    expect (calculadora.multi(2, 0)).toBe(0);
});
test("positivo com negativo é negativo e negativo com negativo é positivo", () => {
    expect(calculadora.multi(-2, -2)).toBe(4);
    expect(calculadora.multi(4, -3)).toBe(-12);
});

test("se a < 0 ou b < 0 então a * b < 0", () => {
    expect(calculadora.multi(-2, 2)).toBeLessThan(0);
    expect(calculadora.multi(2, -2)).toBeLessThan(0);
})

test("se a = 0 ou b = 0 então a * b = 0", () => {
    expect(calculadora.multi(2, 0)).toBe(0);
    expect(calculadora.multi(-2, 0)).toBe(-0);
})


//DIVISÃO
test("15 / 3 = 5", () => {
    expect(calculadora.divisao(15, 3)).toBe(5);
});

test("6 / 6 = 1", () => {
    expect(calculadora.divisao(6, 6)).toBe(1);
});

test("se b = 0 então DIVISÃO por ZERO", () => {
    expect(() => calculadora.divisao(2, 0)).toThrow("Divisão por ZERO");
});


});