// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1864
  
// E aí? Curtiu a Escola de Inverno deste ano? Para que esta Escola acontecesse, foram muitos que trabalharam, 
// seja na elaboração dos problemas, na configuração do Portal, na logística do evento ou na captação dos recursos.
// Nosso agradecimento especial deste ano vai para o Prof. Ricardo Oliveira, que não somente aceitou vir ministrar as oficinas 
// como também participou ativamente na organização da Escola.
// Temos certeza que a experiência e a carreira dele no ICPC como competidor e como coach motivaram e inspiraram todos nós.

// Esperamos que você tenha gostado desses últimos dias em Essos e em Westeros, que tenha aprendido bastante e que tenha se divertido.
// Mas não é só em Essos e em Westeros que você deve se divertir. Aqui, em Além da Muralha, programar também é divertido. 
// Continue estudando, continue treinando, e cada vez mais. O importante é o caminho que você vai trilhar daqui para frente. 
// Nosso conselho é que você procure sempre aproveitar ao máximo cada momento, cada oficina, cada escola, cada treino, 
// cada tempo de prática ou estudo em casa. Nossos dias nunca voltarão.

// Entrada
// A entrada consiste de um único inteiro N (1 ≤ N ≤ 34) numa linha.

// Saída
// Imprima os N primeiros caracteres da citação de Søren Kierkegaard definida pelas letras que 
// foram sublinhadas no enunciado deste problema. Preste atenção,
// pois nenhum espaço foi sublinhado — você é que deve adivinhar o número e a localização dos espaços na frase. 
// A única linha da saída deve consistir apenas de letras maiúsculas e espaços e ser finalizada por fim de linha.


// CÓDIGO DO CONSOLE <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Esse exercício tem este tópico a mais, 
// que é excessão deste exercício, na verdade, nem faz parte do exercício, mas achei interessante colocar, 
// já que mostra uma manipulação no DOM bem bacana e cita coisas como Prototypes e Instanceof de um valor

// Bom, como o exercício diz, precisamos sair catando letras sublinhadas pelo enunciado do exercício
// Tentei por 5s mas sempre me perdia, então pensei
// Vou pegar as tags <u> do DOM e juntar as letras ao invés de ficar tentando juntá-las ao olho nu akeoakeoek

// Então o que fiz foi:
// Abri o DevTools na página do exercício, e coloquei o seguinte comando:
// document.querySelectorAll(".description u
// Esse comando, que nada mais é que Javascript, retornava uma NodeList com todas as tags <u> do enunciado do exercício
// Ou seja, já estava no primeiro passo: já estava com todas as tags que estão com as letras

// Beleza, mas o objetivo é pegar todas as letras, ou seja, uma string
// Mas como a NodeList NÃO é um Array, como ela não é uma instância de Array ela não foi construída usando a Prototype do Array, 
// Prototype essa que contém todas as funções que conhecemos: forEach, map, filter, etc,
// como explica bem melhor aqui no site da MDN https://developer.mozilla.org/en-US/docs/Web/API/NodeList
// Então não é possível utilizar NodeList.forEach, nem NodeList.map, etc

// Portanto, preciso transformar essa NodeList em um Array, o que dá pra ser feito com:
// Array.from(document.querySelectorAll(".description u"));
// Então o a NodeList das tags <u> é transformada em um Array mesmo

// Agora o que falta é simplesmente percorrer cada tag e pegar o textContent
// e criar um novo array com cada letra da frase escondida no enredo
// Então pego o Array retornado pelo Array.from(NodeList Aqui);
// E complemento: Array.from(document.querySelectorAll(".description u")).map(el => el.textContent)

// Pronto, já há um Array com cada letra da frase, agora só transformar em String:
// Logo, complemento com a função join("") que junta todos os elementos em uma string
// Array.from(document.querySelectorAll(".description u")).map(el => el.textContent).join("");

// Agora só falta deixar tudo maiúsculo, então usamos o .toUpperCase():
Array.from(document.querySelectorAll(".description u")).map(el => el.textContent).join("").toUpperCase();

// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Aqui, pegamos a entrada que representa em qual caracter devemos cortar a String que achamos pelo passo anterior
let lines = gets().split("\n");
let n = parseInt(lines.shift()); //Exemplo de entrada recebida pela plataforma, n = 7

let str = "LIFE IS NOT A PROBLEM TO BE SOLVED";
console.log(str.substring(0, n));

// Saída esperada com o valor 7 de entrada:
// 'LIFE IS'