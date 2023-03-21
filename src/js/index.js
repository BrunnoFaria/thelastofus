/*
passo 1 - pegar o elemento HTML dos botões
passo 2 - Identificar o clique do usuário no botão
passo 3 - desmarcar o botão selecionado anterior
passo 4 - marcar o botão clicado como se estivesse selecionada
passo 5 - esconder a imagem anterior
passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/

//passo 1 - pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// passo 2 - Identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
     // passo 3 - desmarcar o botão selecionado anterior 
     const botaoSelecionado = document.querySelector('.selecionado');
     botaoSelecionado.classList.remove('selecionado');

     // passo 4 - marcar o botão clicado como se estivesse selecionada
     botao.classList.add('selecionado');

     // passo 5 - esconder a imagem anterior
     const imagemAtiva = document.querySelector('.ativa');
     imagemAtiva.classList.remove('ativa');

     // passo 6 - fazer aparecer a imagem correspondente ao botão clicado
     imagens[indice].classList.add('ativa');
        
     
    })
})
