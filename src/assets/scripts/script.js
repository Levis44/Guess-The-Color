start();

function start() {
    // zera as cores no array e a cor escolhida
    game.zerar(false);
    
    const pontos = document.getElementById("points");
    pontos.innerHTML = game.points;

    // pega no HTML a cor certa
    const corSorteada = document.getElementById('corCerta');

    // pega as bolas
    pickBalls();
    corSorteada.innerHTML = game.escolherCor();

    console.log(game.corEscolhida);
    console.log(game.coresTotal);
}

function pickBalls() {
    // array com todas as bolas
    const balls = document.querySelectorAll('.bola');

    // para cada bola, atribui a cor
    balls.forEach((ball) => game.atribuirValores(ball))

    // para cada bola, cria o event listener e ve se acertou
    balls.forEach((ball) => ball.addEventListener('click', acertouCor))
}

function acertouCor() {
    // pega os pontos no html
    const pontos = document.getElementById("points");

    // pega a cor da bola clicada
    let cor = this.style.backgroundColor;

    // se o comparar cores for false
    if(!game.compararCores(cor)){
        // aparece o gameOver
        let gameOver = document.getElementById('gameOver');
        gameOver.style.display = 'flex';
    } else {
        // se não, acrescenta os pontos e chama para o próximo nível
        pontos.innerHTML = game.points;
        start();
    }

}

function restart() {
    game.zerar(true);

    let gameOver = document.getElementById('gameOver');
    gameOver.style.display = 'none';

    start();
}



