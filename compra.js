
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Preço unitário (ex.: 25.50): ', (textoPreco) => {
  rl.question('Quantidade de unidades: ', (textoQuantidade) => {
    rl.question('Cliente fidelizado? (sim/nao): ', (textoFidelidade) => {

      const preco = Number(textoPreco);
      const quantidade = Number(textoQuantidade);
      const fidelizado = textoFidelidade.trim().toLowerCase() === 'sim';

      const entradasValidas =
        Number.isFinite(preco) &&
        preco > 0 &&
        Number.isInteger(quantidade) &&
        quantidade > 0;

      if (!entradasValidas) {
        console.log('Erro: informe preço positivo e quantidade inteira positiva.');
      } else {
        const subtotal = preco * quantidade;

        const temDesconto = quantidade >= 5;

        const desconto = temDesconto ? subtotal * 0.10 : 0;

        const total = subtotal - desconto;

        const freteGratis =
          (total >= 100) || (fidelizado && total >= 60);

        console.log('\n===== RESUMO DA COMPRA =====');
        console.log('Subtotal: R$ ' + subtotal.toFixed(2));
        console.log('Desconto: R$ ' + desconto.toFixed(2));
        console.log('Total: R$ ' + total.toFixed(2));
        console.log('Frete grátis: ' + (freteGratis ? 'SIM' : 'NÃO'));
      }

      rl.close();
    });
  });
});
