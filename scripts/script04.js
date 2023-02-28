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

function levelSacas(levelArray) {
    console.log(
        `Objetos do meu inventário - ${levelArray.name}: \n Ouro: ${levelArray.gold} \n Prata: ${levelArray.prata} \n Madeira: ${levelArray.madeira} \n Pedra: ${levelArray.pedra} \n`
    );
}

sacasTrevas.forEach(levelSacas);
sacasCastelo.forEach(levelSacas);
