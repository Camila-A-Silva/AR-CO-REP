// Obter os elementos
// Tratar os dados (converter, exibir os dadosde forma corrte)
// Fazer as cálculos


// Captura global dos elementos

const inputPeso = document.getElementById('weight');
const inputAltura = document.getElementById('height');
const textoResultado = document.getElementById('resultText');
const formulario = document.getElementById('imcForm');

// Função auxiliar

function mostrarResultado(mensagem) {
    textoResultado.textContent = mensagem;
};

// Função principal

function calcularIMC() {
    // apturar os valores dos campos de entrada
    const peso = parseFloat(inputPeso.value);
    const altura = parseFloat(inputAltura.value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        mostrarResultado('Por favor, insira valores válidos.');
        return;
    }
    
    // Calcular o IMC
    const imc = peso / (altura * altura);

    let classificacao = '';
    
    // chamando a função
    classificacao = classificarIMC(imc)
    
    // Template String
    mostrarResultado(`Seu IMC é ${imc.toFixed(2)} (${classificacao})`)
};

function classificarIMC(imc) {
    
    // Classificação
    if (imc < 18.5) return ('Abaixo do peso');
    if (imc < 25) return ('Peso normal');
    if (imc < 30) return ('Sobrepeso');
    return ('Obsidade');
};

function limparCampos() {
    formulario.reset();
    inputPeso.focus();
    mostrarResultado('Preencha os campos e clique em "Calcular".');
};