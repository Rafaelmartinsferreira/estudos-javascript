alert("Boas vindas ao jogo do número secreto.");
let numeroMaximo = 5000;
let numeroMinimo = 1;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao número secreto, continue pedindo um novo chute
while (chute != numeroSecreto) {
  chute = prompt(`Escola um número entre ${numeroMinimo} e ${numeroMaximo}`);
  //se chute for igual ao número secreto, exiba a mensagem de parabéns
  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`)

/*if (tentativas > 1) {
  alert(
    `Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas.`
  );
} else {
  alert(
    `Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa.`
  );
}*/
