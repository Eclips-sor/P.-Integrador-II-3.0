// botão sanduíche //
    const botaoMenu = document.querySelector('.botao-menu');
    const menu = document.querySelector('.menu');
    botaoMenu.addEventListener('click', () => {
        menu.classList.toggle('aberto');
    });