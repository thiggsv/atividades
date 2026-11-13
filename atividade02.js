
//variáveis
const preco = 39.90;             // Preço do produto (R$)
const quantidade = 3;            // Quantidade a ser comprada
const taxaDesconto = 0.10;       // Desconto de 10% (10/100)

// Cálculos
const total = preco * quantidade; 
const desconto = total * taxaDesconto;
const valorFinal = total - desconto;

// resultados
console.log("Preço do produto: R$ " + preco.toFixed(2));
console.log("Quantidade: " + quantidade);
console.log("Valor total: R$ " + total.toFixed(2));
console.log("Desconto (10%): R$ " + desconto.toFixed(2));
console.log("Valor final a pagar: R$ " + valorFinal.toFixed(2));