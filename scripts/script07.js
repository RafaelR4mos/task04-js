// Questão 7

vetor = ["Ouro", "Prata", "Bronze"]
var primeiro = vetor[0];
var segundo = vetor[1];
var terceiro = vetor[2];
var semMedalha = " Sem Medalha";
var posicao = 1; 
if (posicao === 1) {
  console.log("Posição no campeonato " + posicao + "° Lugar = Medalha de: " + primeiro);
} else if (posicao === 2) {
  console.log("Posição no campeonato " + posicao + "° Lugar = Medalha de: " + segundo);
} else if (posicao === 3) {
  console.log("Posição no campeonato " + posicao + "° Lugar = Medalha de: " + terceiro);
} else if (posicao === 4 || posicao === 5) {
  console.log("Posição no campeonato " + posicao + "° Lugar = Medalha de: " + semMedalha);
} 
