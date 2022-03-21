var numeroSecreto = Math.floor(Math.random() * 10 + 1);
console.log(numeroSecreto);
var numeroDeChutes = 3;

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var elementoResultado = document.getElementById("resultado");

  if (numeroDeChutes == 0) {
    elementoResultado.innerHTML =
      "Você errou 3 vezes, tente novamente. O número era " + numeroSecreto;
  } else {
    if (chute == numeroSecreto) {
      --numeroDeChutes;
      elementoResultado.innerHTML =
        "Você acertou! Restando " + numeroDeChutes + " tentativas";
    } else if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML = "Digite apenas numeros de a 0 ate 10";
    } else {
      if (numeroSecreto > chute && numeroDeChutes > 0) {
        --numeroDeChutes;
        elementoResultado.innerHTML =
          "Você errou! Tente outra vez com um numero maior! Restam " +
          numeroDeChutes +
          " tentativas";
      } else if (numeroSecreto < chute && numeroDeChutes > 0) {
        numeroDeChutes++;
        elementoResultado.innerHTML =
          "Você errou! Tente outra vez com um numero menor! Restam " +
          numeroDeChutes +
          " tentativas";
      }
      if (numeroDeChutes <= 0) {
        elementoResultado.innerHTML =
          "Você errou 3 vezes, tente novamente. O número era " + numeroSecreto;
      }
    }
  }
}