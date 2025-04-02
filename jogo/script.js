// FUNÇÃO QUE É CHAMADA QUANDO O JOGADOR ESCOLHE UM PERSONAGEM
function selecionarPersonagem(jogador) {
    // OPÇÕES DE PERSONAGENS
    const opcoes = ['guerreiro', 'assassino', 'mago'];

    // CPU ESCOLHE UM PERSONAGEM ALEATÓRIO
    const cpu = opcoes[Math.floor(Math.random() * opcoes.length)];

    console.log(`A CPU ESCOLHEU: ${cpu}`);

    // DETERMINA O VENCEDOR E A EXPLICAÇÃO DA VITÓRIA
    let resultado = determinarVencedor(jogador, cpu);
    let explicacao = explicarVantagem(jogador, cpu);

    // ALTERA AS IMAGENS DOS PERSONAGENS DE ACORDO COM O RESULTADO
    let imgJogador = document.getElementById("player-img");
    let imgCpu = document.getElementById("cpu-img");

    // SE O JOGADOR VENCEU
    if (resultado.includes("PARABÉNS")) {  
        imgJogador.src = `imagens/${jogador}/${jogador}-win.png`;
        imgCpu.src = `imagens/${cpu}/${cpu}-lose.png`;
    } 
    // SE A CPU VENCEU
    else if (resultado.includes("PERDEU")) {  
        imgJogador.src = `imagens/${jogador}/${jogador}-lose.png`;
        imgCpu.src = `imagens/${cpu}/${cpu}-win.png`;
    } 
    // SE DER EMPATE
    else {  
        imgJogador.src = `imagens/${jogador}/${jogador}-base.png`;
        imgCpu.src = `imagens/${cpu}/${cpu}-base.png`;
    }

    // EXIBE O RESULTADO NA TELA
    document.getElementById("mensagem-resultado").innerHTML = `  
        VOCÊ ESCOLHEU ${jogador.toUpperCase()} E A CPU ESCOLHEU ${cpu.toUpperCase()}.<br>
        ${resultado} <br><br>
        <strong>${explicacao}</strong>
    `;

    // ESCONDE A TELA DO JOGO E MOSTRA A TELA DE RESULTADO
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";
}

// FUNÇÃO QUE DETERMINA O VENCEDOR DO JOGO
function determinarVencedor(jogador, cpu) {
    // REGRAS DO JOGO: QUEM VENCE QUEM
    const regras = {
        "guerreiro": "assassino",  
        "assassino": "mago",       
        "mago": "guerreiro"        
    };

    // SE FOR EMPATE
    if (jogador === cpu) {
        return "⏳ O COMBATE FOI INTENSO,<br>MAS TERMINOU EM EMPATE!";
    } 
    // SE O JOGADOR VENCEU
    else if (regras[jogador] === cpu) {
        return "🎉 PARABÉNS, VOCÊ VENCEU! 🏆";
    } 
    // SE A CPU VENCEU
    else {
        return "💀 VOCÊ PERDEU, A CPU FOI MAIS FORTE.";
    }
}

// FUNÇÃO QUE EXPLICA POR QUE O VENCEDOR GANHOU OU SE DEU EMPATE
function explicarVantagem(jogador, cpu) {
    // MENSAGENS EXPLICATIVAS BASEADAS NAS REGRAS DO JOGO
    const frasesExplicativas = {
        "guerreiro-assassino": "⚔️ O Guerreiro venceu o Assassino porque sua armadura resistiu aos ataques rápidos!",
        "assassino-mago": "🗡️ O Assassino venceu o Mago porque atacou antes que ele pudesse conjurar um feitiço!",
        "mago-guerreiro": "🔮 O Mago venceu o Guerreiro porque usou sua magia para evitar os golpes pesados!"
    };

    // SE O JOGADOR VENCEU, EXIBE A FRASE NORMAL
    if (frasesExplicativas[`${jogador}-${cpu}`]) {
        return frasesExplicativas[`${jogador}-${cpu}`];
    } 
    // SE A CPU VENCEU, INVERTE A FRASE PARA FICAR CORRETO
    else if (frasesExplicativas[`${cpu}-${jogador}`]) {
        return frasesExplicativas[`${cpu}-${jogador}`].replace("venceu", "derrotou");
    } 
    // SE FOR EMPATE, EXPLICA QUE ELES DECIDIRAM VIRAR AMIGOS 🍻
    else {
        return "🍻 Ambos perceberam que eram igualmente fortes! Então decidiram deixar as armas de lado e foram beber juntos na taverna!";
    }
}

// FUNÇÃO QUE REINICIA O JOGO
function reiniciarJogo() {
    // ESCONDE A TELA DE RESULTADO E VOLTA PARA A TELA INICIAL
    document.getElementById("game-screen").style.display = "block";
    document.getElementById("result-screen").style.display = "none";
}
