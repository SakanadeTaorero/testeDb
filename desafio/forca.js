function palavraSecreta(){
palavraSecreta = palavraSecreta;
}
function dadosDoJogo(){
    dadosDoJogo = {
        letrasChutadas: [],
        vidas: 6,
        palavra: [],
    };

    return underline(dadosDoJogo.palavra);
}
function underline(){
    for(let i in palavraSecreta) dadosDoJogo.push("_")
}

function chutar(letra) {
    if (!contemErro(letra)) {
      const letraEncontrada = palavraSecreta.includes(letra);
      dadosDoJogo.letrasChutadas.push(letra);

      if (letraEncontrada) {
        for (let i in palavraSecreta) {
          palavraSecreta[i] === letra &&
            (dadosDoJogo.palavra[i] = letra);
        } /* caso a letra exista na palavra, adiciona no index correto essa letra */
      } else dadosDoJogo.vidas--;

      return true;
    }
  }

function chutarErrado(letra) { 
    const regLetrasAZ = /[a-z]/i;
    const textoErro = (texto) => {
      console.log(texto);
    };

    if (!regLetrasAZ.test(letra)) {
      textoErro("Neste jogo são permitidas apenas letras");
      return true;
    }
    if (letra.length > 1) {
      textoErro("Não é possivel colocar mais de uma letra por vez");
      return true;
    }
    if (dadosDoJogo.letrasChutadas.includes(letra)) {
      textoErro("Você ja tentou essa letra");
      return true;
    }
    return false;
}

function buscarEstado() {
    if (dadosDoJogo.vidas === 0) {
      return (dadosDoJogo.estado = "Perdeu");
    } else if (
      dadosDoJogo.palavra.join("") === palavraSecreta &&
      dadosDoJogo.vidas > 0
    ) {
      return (dadosDoJogo.estado = "Ganhou");
    }
} 

function buscarDadosDoJogo() {
    return dadosDoJogo; 
}