//  o botão não existe e ele é responsaval de criar

// 1. Lógica das Páginas de Projeto
function criarBotaoVoltar(){
    // 1. Crir o elemento botão
    const btnVoltar = document.createElement('button');

    // 2. Definir o estilo do botão
    btnVoltar.innerText = 'Voltar';
    btnVoltar.style.marginTop = '20px'

    // 3. Lógica do click
    btnVoltar.addEventListener('click', function(){
        window.location.href = '../index.html'
    });

    // 4. Adicionar obotão no final do body
    // appenChilg coloca o botão no final
    document.body.appendChild(btnVoltar);

};

// O onload tema função de carregar a página, no código ela vai tá carregando a página e logo em seguida ela vai "chamar" o botão
window.onload = criarBotaoVoltar();