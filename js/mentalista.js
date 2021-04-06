let numeroSecreto = parseInt(Math.random()*10);

let tentativas = 3;

while (tentativas > 0) {
    let chute = parseInt(prompt('Digite um número entre 0 e 10'));

    if (numeroSecreto == chute) {
        alert("Acertou!");
        break;
    } else if (chute > numeroSecreto) {
        alert("O númeor secreto é menor!")
    } else if (chute < numeroSecreto) {
        alert("O número é maior")
    }

    tentativas--;
}

if(chute != numeroSecreto) {
    alert("Infelizmente, suas tentativas acabaram. O número secreto era: " + numeroSecreto);
  }