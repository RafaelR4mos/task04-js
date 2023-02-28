const sacasTrevas = [
    {
        name: "Idade das Trevas",
        gold: 45,
        prata: 56,
        madeira: 236,
        pedra: 458,
    },
];

const sacasCastelo = [
    {
        name: "Idade dos castelos",
        gold: 345,
        prata: 568,
        madeira: 789,
        pedra: 897,
    },
];

function levelSacas(item) {
    const castleTotalSacas = item.gold + item.prata + item.madeira + item.pedra;

    console.log(
        `Objetos do meu inventário - ${item.name}: \n Ouro: ${item.gold} \n Prata: ${item.prata} \n Madeira: ${item.madeira} \n Pedra: ${item.pedra} \n Na "${item.name}" o status do meu inventário é: \n Total de 4 tipo de itens com: ${castleTotalSacas} sacas.
        `
    );
}

sacasTrevas.forEach(levelSacas);
sacasCastelo.forEach(levelSacas);
