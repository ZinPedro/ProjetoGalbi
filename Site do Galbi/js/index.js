const botaoGabarito = document.getElementsByClassName('botao-gabarito');
const input = document.getElementsByClassName('input-aluno');
const formulario = document.getElementById('formulario-aluno');
const nota = document.getElementById('valor-nota');
const botaoCorrecao = document.getElementById('botao-correcao');
let notaTotal = 0;

const questoes = [];
const respostas = [];

window.addEventListener('load', () => {
    for(i = 0; i < 10; i++){
        const gabarito = prompt(`Insira o gabarito da questão ${i + 1}:`);
        questoes.push(gabarito);
    
        botaoGabarito[i].innerHTML = questoes[i];
    }
});

function aoEnviar(){
    for(i = 0; i < 10; i++){
        const resposta = input[i].value;
        respostas.push(resposta);
    }

    for(i = 0; i < 10; i++){
        if(respostas[i] == questoes[i]){
            notaTotal++;

            nota.innerHTML = notaTotal;
        }
    }
}