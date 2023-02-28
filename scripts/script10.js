const itensLoja = [
    {
        name: "Perfume",
        value: 1236.99,
    },
    {
        name: "Brinco",
        value: 132.28,
    },
    {
        name: "Gravata",
        value: 189.99,
    },
    {
        name: "Sapato",
        value: 899.99,
    },
    {
        name: "Casaco",
        value: 2568.78,
    },
    {
        name: "Terno",
        value: 3566.99,
    },
    {
        name: "Vestido",
        value: 4896.99,
    },
];

const userName = "Samanta";
const mapValues = itensLoja.map((item) => {
    return item.value;
});

const totalValue = mapValues.reduce((acc, item) => {
    return acc + item;
}, 0);

const boughtItens = itensLoja.map((item) => {
    return item.name;
});

function displayInfo() {
    console.log(
        `A compra de ${userName} foi: ${boughtItens}, um item de cada que custou um no total: ${totalValue.toLocaleString(
            "pt-br",
            { style: "currency", currency: "BRL" }
        )}\n  `
    );
}

displayInfo();
