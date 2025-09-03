let titulo = DocumentTimeline.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';



function consoleClicado() {
    console.log('O botão foi clicado');
}

function alertaClicado() {
    alert('Eu amo Js');
}

function promptClicado() {
   let cidade = prompt('Cite uma cidade que você já visitou');
   alert(`Eu estive em ${cidade} e lembrei de você!`);
}

function somaClicado() {
    let numero1 = parseInt(prompt('Digite o primeiro número'));
    let numero2 = parseInt(prompt('Digite o segundo número'));
    let soma = Number(numero1) + Number(numero2);
    alert(`A soma dos dois números é ${soma}`);
}