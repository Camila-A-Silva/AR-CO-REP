// 1. Seleção de elementos (serãp nll se não estiverem na página)
const btnP1 = document.querySelector('#inputP1');
const btnP2 = document.querySelector('#inputP2');
const btnP3 = document.querySelector('#inputP3');

// 2.Definição das funções
// const verificaBotao = () => {
    
// }



// 2. Método addEventListener com ma função anônima
//  função de click para chamar a página projeto01 no index
btnP1.addEventListener('click',function(){
    window.location.href = './pages/projeto01.html'
});

btnP2.addEventListener('click',function(){
    window.location.href = './pages/projeto02.html'
});

btnP3.addEventListener('click',function(){
    window.location.href = './pages/projeto03.html'
});