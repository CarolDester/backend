function calcularMediaAluno(a1, a2, a3) {
    if (!a1|| !a2) throw Error(undefined);
    if (a1 < 0 || a2 < 0) throw Error("As notas não podem ser negativas");
    if (a3 == undefined) {
        return (a1 * 0.4 + a2 * 0.6) / 2
    };
    if (a3 < 0) throw ("a3 não pode ser negativa");
    if (a3 > a2) {
        return (a1 + a3) / 2
    };
    if (a3 > a1) {
        return (a2 + a3) / 2
    };
    if (a1, a2, a3 >= 0) return (a1 + a2 + a3) / 3;
    return Math.max(calcularMediaAluno, 0);
};

module.exports = { calcularMediaAluno };