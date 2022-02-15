// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.beecrowd.com.br/judge/pt/problems/view/1075

// Leia um valor inteiro N. Apresente todos os números entre 1 e 10000 que divididos por N dão resto igual a 2.

// Entrada
// A entrada contém um valor inteiro N (N < 10000).

// Saída
// Imprima todos valores que quando divididos por N dão resto = 2, um por linha.

// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
let lines = gets().split('\n'); //Exemplo de entrada recebida pela plataforma, lines = 13

let N = parseInt(lines.shift());
for (let i=1; i<10000; i++) {
	if (i%N==2) console.log(i);
}

// Saída esperada com o valor 13 na entrada:
// 2
// 15
// 28
// 41