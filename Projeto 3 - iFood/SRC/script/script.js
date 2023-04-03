function selecionarComida(seletor){

    const botaoSelecionadoAnteriormente = document.querySelector('.selecionado');
    if(botaoSelecionadoAnteriormente != null){
        botaoSelecionadoAnteriormente.classList.remove('selecionado')
    }

    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');

}

function selecionarBebida(seletor){

    const botaoSelecionadoAnteriormente = document.querySelector('.selecionado');
    if(botaoSelecionadoAnteriormente != null){
        botaoSelecionadoAnteriormente.classList.remove('selecionado')
    }

    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');

}

function selecionarSobremesa(seletor){

    const botaoSelecionadoAnteriormente = document.querySelector('.selecionado');
    if(botaoSelecionadoAnteriormente != null){
        botaoSelecionadoAnteriormente.classList.remove('selecionado')
    }

    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');

}