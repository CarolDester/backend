const { calcularMediaAluno } = require('../src/calcularMediaAluno.js');


test("a + b + c / 3 = média", () => {
    expect(calcularMediaAluno(5, 2, 6)).toBe(5.5);
});

test("a1 ou a2 indefinido", () => {
    expect(calcularMediaAluno).toThrow();
});

test("a1 ou a2 negativos", () => {
    expect(() => calcularMediaAluno(-1, 10)).toThrow("As notas não podem ser negativas");
    expect(() => calcularMediaAluno(10, -1)).toThrow("As notas não podem ser negativas");
});

test("a3 não informada", () => {
    expect(calcularMediaAluno(7, 5)).toBeCloseTo(2.9);
})

test("a3 negativa", () => {
    expect(() => calcularMediaAluno(3, 5, -3)).toThrow("a3 não pode ser negativa");
});

test("nota a3 substitui a2", () => {
    expect(calcularMediaAluno(7, 4, 6)).toBeCloseTo(6.5)
})

test("nota a3 substitui a2", () => {
    expect(calcularMediaAluno(4, 7, 6)).toBeCloseTo(6.5)
})

