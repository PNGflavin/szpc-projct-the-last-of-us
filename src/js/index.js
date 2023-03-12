const botoescarrossel = document.querySelectorAll('.botao'); //passo 1 pegar os botoes do html
const imagens = document.querySelectorAll('.imagem');
//passo 2 dar um jeito de indentificar o click do usuario
botoescarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarbotaoselecionado();

        botao.classList.add('selecionado');

        esconderimagemativa();

        imagens[indice].classList.add('ativa');

    })

})

function esconderimagemativa() {
    const imagemativa = document.querySelector('.ativa');
    imagemativa.classList.remove('ativa');
}

function desativarbotaoselecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    console.log(botaoSelecionado.classList.remove('selecionado'));
}
