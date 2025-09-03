function exibirOla() {
  console.log("Olá, mundo!");
}

exibirOla();


function exibirOlaNome(nome) {
  console.log(`Olá, ${nome}!`);
}

exibirOlaNome("Alice");


function calcularDobro(numero) {
  return numero * 2;
}

let resultadoDobro = calcularDobro(5);
console.log(resultadoDobro);


function calcularMedia() {
    let nota1 = parseInt(prompt("Digite a primeira nota:"));
    let nota2 = parseInt(prompt("Digite a segunda nota:"));
    let nota3 = parseInt(prompt("Digite a terceira nota:"));
    let media = (nota1 + nota2 + nota3) /3;
    console.log(`A média é ${media}`);
}
calcularMedia();


function encontrarMaior(a, b) {
  return a > b ? a : b;
}

let maiorNumero = encontrarMaior(1, 9);
console.log(maiorNumero);

function quadrado(numero) {
  return numero * numero;
}

let resultado = quadrado(2);
console.log(resultado); 