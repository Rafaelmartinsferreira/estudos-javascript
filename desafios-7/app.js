/*function calcularIMC(peso, altura) {
    let imc = peso / (alturaMetros * alturaMetros);
}*/

/*function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }

let fatorial = 1;
for (let i = 2; i<= numero; i++) {
    fatorial *= i;
}

return fatorial;
}

let numero = 5
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);*/

/*function converterDolarParaReal(dolar, cotacao) {
    let cotacaoDolar = 4.80;
    let ValorEmReais = valorEmDolar * cotacaoDolar;
    return ValorEmReais.toFixed(2);
}

let valorEmDolar = 50;
valorEmReais = converterDolarParaReal(valorEmDolar);
console.log(`O valor de $${valorEmDolar} é R$${valorEmReais}`);*/

/*function calcularAreaPerimetroSalaRetangular(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);
  
  console.log(`Área da sala: ${area} metros quadrados`);
  console.log(`Perímetro da sala: ${perimetro} metros`);
}

// Exemplo de uso
let altura = 3; // em metros
let largura = 5; // em metros
calcularAreaPerimetroSalaRetangular(altura, largura);*/

/*function calcularAreaPeriemtroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;

    console.log(`Área da sala: ${area.toFixed(2)} metro quadrados`);
    console.log(`Perímetro da sala: ${perimetro.toFixed(2)} metros`);
}

let raio = 4;
calcularAreaPeriemtroSalaCircular(raio);*/

function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

let numero = 7;
mostrarTabuada(numero);