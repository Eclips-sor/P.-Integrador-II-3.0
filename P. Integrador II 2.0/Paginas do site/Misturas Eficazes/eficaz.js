// botão sanduíche //
    const botaoMenu = document.querySelector('.botao-menu');
    const menu = document.querySelector('.menu');
    botaoMenu.addEventListener('click', () => {
        menu.classList.toggle('aberto');
    });

// sistema de busca melhorado ~~Isa//
const campoBusca = document.getElementById('input-busca');
const caixas = document.querySelectorAll('.container-misturas .caixa');
campoBusca.addEventListener('input', () => {
    const textoDigitado = campoBusca.value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    console.log("Buscando por:", textoDigitado);
    caixas.forEach((caixa) => {
        const titulo = caixa.querySelector('.titulo-mistura h1').textContent
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
        if (titulo.startsWith(textoDigitado)) {
            caixa.style.display = "";
        } else {
            caixa.style.display = "none";
        }
    });
});