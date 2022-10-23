/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 150;
const formaPagamento = 'parcelado 5x';

const noDebito = precoEtiqueta - (precoEtiqueta * (10 / 100));
const noDinheiro = precoEtiqueta - (precoEtiqueta * (15 / 100));
const noPix = precoEtiqueta - (precoEtiqueta * (15 / 100));
const parceladoDuas = precoEtiqueta;
const parceladoAcima = precoEtiqueta + (precoEtiqueta * (10 / 100));


if (formaPagamento === 'debito') {
    console.log(noDebito)
} else if (formaPagamento === 'dinheiro') {
    console.log(noDinheiro);
} else if (formaPagamento === 'pix') {
    console.log(noPix);
} else if (formaPagamento === 'parcelado 2x') {
    console.log(parceladoDuas);
} else {
    console.log(parceladoAcima);
}
