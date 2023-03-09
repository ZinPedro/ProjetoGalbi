const botaoGabarito = document.getElementsByClassName('botao-gabarito');
const input = document.getElementsByClassName('input-aluno');
const formulario = document.getElementById('formulario-aluno');
const nota = document.getElementById('valor-nota');
const botaoCorrecao = document.getElementById('botao-correcao');
const questoes = [];
const respostas = [];
const notaTotal = 0;

for(i = 0; i < 10; i++){
    const gabarito = prompt(`Insira o gabarito da questão ${i + 1}:`);
    questoes.push(gabarito);

    botaoGabarito[i].innerHTML = questoes[i];
}

for(i = 0; i < 10; i++){
    const resposta = input[i].value;
    respostas.push(resposta);
}

formulario.addEventListener('submit', () => {
    alert('oi')
    for(i = 0; i < 10; i++){
        notaTotal++;

        if(respostas[i] == questoes[i]){
            nota.innerHTML = notaTotal;
        }
    }
})