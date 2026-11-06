// botão sanduíche //
    const botaoMenu = document.querySelector('.botao-menu');
    const menu = document.querySelector('.menu');
    const botaoMais = document.getElementById("botao-mais");
    botaoMenu.addEventListener('click', () => {
        menu.classList.toggle('aberto');
    });
    botaoMais.addEventListener('click', () => {
        menu.classList.toggle('aberto');
    });