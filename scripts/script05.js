// Questão 5

let queijos = ["Mussarela", "Minas", "Parmesão", "Prato", "Gorgonzola"];
console.log("Cardápio de Queijos: " + queijos);
queijos.push("Mascarpone", "Ricota", "Provolone");
console.log("Lista atualizada: " + queijos);
queijos.sort();
console.log("Lista atualizada: " + queijos);
queijos.splice(0, 0, 'Cottage');
console.log("Lista atualizada em ordem alfabética: " + queijos);