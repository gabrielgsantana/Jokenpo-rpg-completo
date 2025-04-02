// FUNÇÃO QUE É CHAMADA QUANDO O JOGADOR ESCOLHE UM PERSONAGEM

function selecionarPersonagem(jogador) {

    // ARRAY COM AS OPÇÕES DISPONÍVEIS
    const opcoes = ['guerreiro', 'assassino', 'mago'];
    
    // ESCOLHA ALEATÓRIA DA CPU
    const cpu = opcoes[Math.floor(Math.random() * opcoes.length)];

    // EXIBE A ESCOLHA DA CPU NO CONSOLE
    console.log(`A CPU ESCOLHEU: ${cpu}`);

    // DETERMINA O RESULTADO DA BATALHA
    let resultado = determinarVencedor(jogador, cpu);

    // EXIBE NO CONSOLE SE A CPU GANHOU OU PERDEU
    if (resultado.includes("PARABÉNS")) {  
        console.log(`A CPU PERDEU! 😢`); // JOGADOR VENCEU, CPU PERDEU
    } else if (resultado.includes("PERDEU")) {  
        console.log(`A CPU VENCEU! 🎉`); // CPU VENCEU, JOGADOR PERDEU
    } else {  
        console.log(`FOI UM EMPATE! 😐`); // EMPATE
    }

    // SELECIONA OS ELEMENTOS DE IMAGEM DOS PERSONAGENS NO HTML
    let imgJogador = document.getElementById("player-img");
    let imgCpu = document.getElementById("cpu-img");

    // DEFINE AS IMAGENS DO RESULTADO DA BATALHA
    if (resultado.includes("PARABÉNS")) {  
        imgJogador.src = `imagens/${jogador}/${jogador}-win.png`; // JOGADOR VENCE
        imgCpu.src = `imagens/${cpu}/${cpu}-lose.png`;   // CPU PERDE
    } else if (resultado.includes("PERDEU")) {  
        imgJogador.src = `imagens/${jogador}/${jogador}-lose.png`;  // JOGADOR PERDE
        imgCpu.src = `imagens/${cpu}/${cpu}-win.png`;  // CPU VENCE
    } else {  
        imgJogador.src = `imagens/${jogador}/${jogador}-base.png`;  // EMPATE
        imgCpu.src = `imagens/${cpu}/${cpu}-base.png`;  
    }

    // ATUALIZA O TEXTO DE RESULTADO NA TELA
    document.getElementById("mensagem-resultado").innerHTML = 
    `VOCÊ ESCOLHEU ${jogador.toUpperCase()} E A CPU ESCOLHEU ${cpu.toUpperCase()}.<br>${resultado}`;

    // OCULTA A TELA DE SELEÇÃO E EXIBE A TELA DE RESULTADO
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";
}

// FUNÇÃO QUE DETERMINA O VENCEDOR DO JOGO COM BASE NAS REGRAS
function determinarVencedor(jogador, cpu) {

    // REGRAS DO JOGO: QUEM VENCE QUEM
    const regras = {
        "guerreiro": "assassino",  
        "assassino": "mago",       
        "mago": "guerreiro"        
    };

    // SE OS PERSONAGENS FOREM IGUAIS, É EMPATE
    if (jogador === cpu) {
        return "⏳ O COMBATE FOI INTENSO,<br>MAS TERMINOU EM EMPATE!";
    } 
    // SE O JOGADOR VENCER DE ACORDO COM AS REGRAS
    else if (regras[jogador] === cpu) {
        return "🎉 PARABÉNS! VOCÊ VENCEU!🏆";
    } 
    // SE A CPU VENCER
    else {
        return "💀 VOCÊ PERDEU! A CPU FOI MAIS FORTE.";
    }
}

// FUNÇÃO QUE REINICIA O JOGO, VOLTANDO PARA A TELA INICIAL
function reiniciarJogo() {
    document.getElementById("game-screen").style.display = "block";  // EXIBE A TELA DE JOGO
    document.getElementById("result-screen").style.display = "none"; // OCULTA A TELA DE RESULTADO
}
