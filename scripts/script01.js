// Questão 01
var vetor = [];
for (var i = 0; i < 10; i++) {
  vetor[i] = parseInt(prompt("Digite um valor (Total de 10)."));
}
console.log("Lista de 10 posições: " + vetor);
for (var i = 0; i < vetor.length; i++) {
  for (var c = i + 1; c < vetor.length; c++) {
    if (vetor[i] > vetor[c]) {
      var aux = vetor[i];
      vetor[i] = vetor[c];
      vetor[c] = aux;
    }
  }
}
console.log("Lista de ordem crescente: " + vetor);