
1
//variáveis da bolinha
2
let xBolinha = 100;
3
let yBolinha = 200;
4
let diametro = 13;
5
let raio = diametro / 2;
6
​
7
//velocidade da bolinha
8
let velocidadeXBolinha = 6;
9
let velocidadeYBolinha = 6;
10
​
11
//variáveis da raquete
12
let xRaquete = 5;
13
let yRaquete = 150;
14
let raqueteComprimento = 10;
15
let raqueteAltura = 90;
16
​
17
//variáveis do oponente
18
let xRaqueteOponente = 585;
19
let yRaqueteOponente = 150;
20
let velocidadeYOponente;
21
​
22
let colidiu = false;
23
​
24
​
25
//placar do jogo
26
let meusPontos = 0;
27
let pontosDoOponente = 0;
28
​
29
function setup() {
30
  createCanvas(600, 400);
