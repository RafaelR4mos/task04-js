// Questão 9
const relatorioDiario = [
    {id: 1, cliente: "Renata", pedido: "Pizza Margherita", bebida: "Refrigerante"},
    {id: 2, cliente: "Lucas", pedido: "Pizza Calabresa", bebida: "Suco"},
    {id: 3, cliente: "Carla", pedido: "Pizza Mussarela", bebida: "Cerveja"},
    {id: 4, cliente: "Fernando", pedido: "Pizza Quatro Queijos", bebida: "Refrigerante"},
    {id: 5, cliente: "Aline", pedido: "Pizza Margherita", bebida: "Cerveja"},
    {id: 6, cliente: "Pedro", pedido: "Pizza Mafiosa", bebida: "Suco"},
    {id: 7, cliente: "Bruno", pedido: "Pizza Mussarela", bebida: "Refrigerante"},
    {id: 8, cliente: "Ana", pedido: "Pizza Quatro Queijos", bebida: "Cerveja"},
    {id: 9, cliente: "Mariana", pedido: "Pizza Calabresa", bebida: "Suco"},
    {id: 10, cliente: "Paulo", pedido: "Pizza Quatro Queijos", bebida: "Refrigerante"},
    {id: 11, cliente: "Julia", pedido: "Pizza Calabresa", bebida: "Cerveja"},
    {id: 12, cliente: "Thiago", pedido: "Pizza Mussarela", bebida: "Refrigerante"},
    {id: 13, cliente: "Beatriz", pedido: "Pizza Margherita", bebida: "Cerveja"},
    {id: 14, cliente: "Gustavo", pedido: "Pizza Quatro Queijos", bebida: "Suco"}
  ];
const pizzas = relatorioDiario.map(pedido => pedido.pedido);
const clientesComRefrigerante = relatorioDiario.filter(pedido => pedido.bebida === "Refrigerante").map(pedido => pedido.cliente);
const clientesComSuco = relatorioDiario.filter(pedido => pedido.bebida === "Suco").map(pedido => pedido.cliente);
const clientesComCerveja = relatorioDiario.filter(pedido => pedido.bebida === "Cerveja").map(pedido => pedido.cliente);
console.log("Pizzaria - Relatório diário"); 
console.log("No dia de hoje os pedidos de pizza foram:");
console.log(pizzas);  
console.log("Os clientes que fizeram pedido com refrigerante foram:");
console.log(clientesComRefrigerante);  
console.log("Os clientes que fizeram pedido com suco foram:");
console.log(clientesComSuco); 
console.log("Os clientes que fizeram pedido com cerveja foram:");
console.log(clientesComCerveja);
  