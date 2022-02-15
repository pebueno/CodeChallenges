// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1073

// Leia um valor inteiro N. Apresente o quadrado de cada um dos valores pares, de 1 até N, inclusive N, se for o caso.

// Entrada
// A entrada contém um valor inteiro N (5 < N < 2000).

// Saída
// Imprima o quadrado de cada um dos valores pares, de 1 até N, conforme o exemplo abaixo.

// Tome cuidado! Algumas linguagens tem por padrão apresentarem como saída 1e+006 ao invés de 1000000 o que ocasionará resposta errada. 
// Neste caso, configure a precisão adequadamente para que isso não ocorra.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Declaramos o número de entrada do programa
let lines = gets().split('\n'); //Exemplo de entrada recebida pela plataforma, lines = 8

var N = parseInt(lines.shift());
for (let i=1; i<=N; i++) {
	if (i%2==0)  console.log(i+"^2 =", i*i)
}

// Saída esperada com o valor 8 na entrada:
// '2^2 = 4'
// '4^2 = 16'
// '6^2 = 36'
// '8^2 = 64'