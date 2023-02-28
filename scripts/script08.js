const a = [2, 4, 6, 7, 8, 22, 45, 34, 89, 75, 62, 54];
const b = [22, 23, 57, 45, 77, 62, 56, 54, 97, 88, 33, 5];

a.sort((a, b) => {
    return a > b ? 1 : -1;
});

b.sort((a, b) => {
    return a > b ? 1 : -1;
});

const uniao = a.concat(b);
const filteredUniao = uniao.filter((number, i) => {
    return uniao.indexOf(number) === i;
});

const diferenca = b.filter((number) => {
    if (!a.includes(number)) {
        return number;
    }
});

const intersecao = a.filter((number) => {
    if (b.includes(number)) {
        return number;
    }
});

filteredUniao.sort((a, b) => {
    return a > b ? 1 : -1;
});

console.log(`A União entre conjuntos = ${filteredUniao}`);
console.log(`A Interseção entre conjuntos = ${intersecao}`);

console.log(`A Diferença entre conjuntos = ${diferenca}`);
