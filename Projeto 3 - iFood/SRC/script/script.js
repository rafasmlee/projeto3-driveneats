let pedidoEscolhido = '';
let pedidoEscolhido2 = '';
let pedidoEscolhido3 = '';

function verificaSelecao(){
    if (pedidoEscolhido !== '') {
        if (pedidoEscolhido2 !==''){
            if(pedidoEscolhido3 !==''){
                const botaoFinalizar = document.querySelector('.oculto')
                fim.classList.classList.toggle('oculto')
            }
        }
        
    }
    
}

function selecionarComida(seletor){

     pedidoEscolhido = seletor.innerHTML;

    const botaoSelecionadoAnteriormente = document.querySelector('.selecionado');
    if(botaoSelecionadoAnteriormente != null){
        botaoSelecionadoAnteriormente.classList.remove('selecionado')
    }

    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');

    verificaSelecao();

}

function selecionarBebida(seletor){

    pedidoEscolhido2 = seletor.innerHTML;


    const botaoSelecionadoAnteriormente = document.querySelector('.selecionado2');
    if(botaoSelecionadoAnteriormente != null){
        botaoSelecionadoAnteriormente.classList.remove('selecionado2')
    }

    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado2');

    verificaSelecao();

}

function selecionarSobremesa(seletor){

    pedidoEscolhido3 = seletor.innerHTML;


    const botaoSelecionadoAnteriormente = document.querySelector('.selecionado3');
    if(botaoSelecionadoAnteriormente != null){
        botaoSelecionadoAnteriormente.classList.remove('selecionado3')
    }

    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado3');

    verificaSelecao();
}
