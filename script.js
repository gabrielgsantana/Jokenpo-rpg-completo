// FUNÇÃO PARA VERIFICAR A IDADE DO USUÁRIO
function verificarIdade() {
    let idade = document.getElementById("user-age").value;
    let mensagemErro = document.getElementById("mensagem-erro");

    // VERIFICA SE O CAMPO ESTÁ VAZIO OU SE NÃO É UM NÚMERO
    if (idade === "" || isNaN(idade)) {
        mensagemErro.textContent = "⚠️ POR FAVOR, DIGITE UMA IDADE VÁLIDA!";
        return;
    }

    idade = parseInt(idade); // CONVERTE PARA NÚMERO INTEIRO

    // SE TIVER 18 ANOS OU MAIS, REDIRECIONA PARA O JOGO
    if (idade >= 18) {
        window.location.href = "Jogo/index-gamer.html"; 
    } else {
        // SE FOR MENOR DE 18, EXIBE MENSAGEM DE RESTRIÇÃO
        mensagemErro.textContent = "🚫 VOCÊ PRECISA TER 18 ANOS OU MAIS PARA ACESSAR ESTE SITE.";
    }
}
