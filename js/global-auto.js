// 1. Lógica Automática para o Menu (Index)
// Buscamos todos os inputs do tipo botão dentro da classe .project__button-group
const botoesProjeto = document.querySelectorAll('.project__button-group input[type="button"]');
console.log(botoesProjeto)

if (botoesProjeto.length > 0) {
    // Localiza o botão (botao) e mostra em que posição ele está (index = 0, 1, 2,...)
    botoesProjeto.forEach((botao, index) => {
        botao.addEventListener('click', () => {
            // O index começa em 0, então somamos 1 para bater com "projeto01", "projeto02"...
            // toString = converte o numero que está number para sting (texto)
            // padStart = "fala" que é dois números e acrescenta o 0 na frente
            const numeroProjeto = (index + 1).toString().padStart(2, '0');
            window.location.href = `./pages/projeto${numeroProjeto}.html`;
        });
    });
}

// 2. Lógica das Páginas de Projeto (Botão Voltar)
const criarBotaoVoltar = () => {
    const btnVoltar=  document.createElement('button');
    btnVoltar.innerText='Voltar';

    // Herdará o estilo de 'button' do CSS
    btnVoltar.className = 'bnt-navegacao';

    btnVoltar.addEventListener('click', () => {
        window.location.href = '../index.html';
    });

    document.body.appendChild(btnVoltar);
};
 

// Se não houver botões de projeto napágina, assume-se que é uma págima interna
if (botoesProjeto.length === 0) {
    /* Adicionando um evento de escuta no navegador (objeto window).
    Após o carregamento da página a função será invocada() */
    window.addEventListener('load', () => {
        criarBotaoVoltar();
    });
}