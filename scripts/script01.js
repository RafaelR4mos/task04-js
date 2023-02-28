// Questão 01 - TOTAS QUESTÕES FORAM TESTADAS NO CONSOLE DO NAVEGADOR
var vetor = [];
for (var i = 0; i < 10; i++) {
    vetor[i] = parseInt(prompt("Digite um valor (Total de 10)."));
}
console.log("Lista de 10 posições: " + vetor);
var vetor2 = vetor;

vetor2.sort((a, b) => {
    return a > b ? 1 : -1;
});

console.log("Lista de ordem crescente: " + vetor2);
